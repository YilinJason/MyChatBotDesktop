import mainAppCSS from './mainApp.module.css';
import React,{ useState,useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { startSessionApi,endSessionApi} from "../../Api/chatApi"
import io from 'socket.io-client'
import Queue from '../../tools/Queue';
const socket = io("54.176.95.223:8080", {autoConnect: false, reconnection:false, transports: ['websocket']});
export const MainApp = (props) => {
    const {
      resetTranscript,
      transcript,
      listening,
    } = useSpeechRecognition()
    const [isListening, setListening] = useState(false);
    const [sectionId, setSectionId] = useState("");
    // const [playList, setPlayList] = useState([]);
    const sleep = (second) => new Promise((resolve) => setTimeout(resolve, second * 1000));
    const soundList = new Queue();
    const playList = [];
    

    const listeningStatus = async () => {
        setListening(!isListening);
        if(!isListening){
            const chatSec = {
                user_name: "admin",
                character_data: "",
                voice: "Ruth",
                token: ""
            }
            let sectionId = await startSessionApi(chatSec)
            console.log(sectionId.session_id);
            setSectionId(sectionId.session_id)
        }
        else{
            endSessionApi(sectionId);
            socket.disconnect();
        }
    }


    async function getSoundList(id,txt) {
        await socket.emit('character_msg', {
            session_id: id,
            voice_enable: 0,
            voice: 'anything',
            txt: txt
        });
        await socket.on('chat_response', (data) => {
            console.log('Text response:', data.txt_response);
            if (data.audio) {
                console.log(data.audio)
                playList.push(data.audio)
                // if(playList.length>0) playNextPlayList()
            }
            if(data.txt_response === "stop") {
                playNextPlayList();
            }
        });
    }
    // openAudio
    const playNextPlayList = ()=>{
        if(playList.length>0){
            const audioData = playList[0]
            var response = new Audio("data:audio/wav;base64," + audioData);
            // 监听播放完成
            response.addEventListener('ended',()=>{
                // 移除播放完成的信息
                playList.shift()
                // 递归播放下一个
                playNextPlayList()
            })

            response.play();
            // console.log(playList);
        }
    }

    useEffect(() => {
        if(isListening){       
            if(isListening && !transcript){
                SpeechRecognition.startListening();
            }
            if(transcript&&!listening){
                SpeechRecognition.stopListening();
                console.log(transcript);
                socket.connect();
                socket.on('connect_error', (error) => {
                    console.error('连接错误:', error);
                });
                getSoundList(sectionId,transcript,soundList);
                socket.off('chat_response');
                // socket.emit('character_msg', {
                //     session_id: sectionId,
                //     voice_enable: 0,
                //     voice: 'anything',
                //     txt: transcript
                // });
                // socket.on('chat_response', (data) => {
                //     console.log('Text response:', data.txt_response);
                //     if (data.audio) {
                //         console.log(data.audio)
                //         soundList.push(data.audio)
                //         console.log(soundList.items)
                //         setPlayList(soundList.items)
                //         var response = new Audio("data:audio/wav;base64," + data.audio);
                //         response.play();
                //     }
                // });

                // while(!soundList.isEmpty){
                //     console.log(soundList.pop());
                //     var response = new Audio("data:audio/wav;base64," + soundList.pop());
                //     response.play();
                //     sleep(1);
                // }
                resetTranscript();
            }
        }   
    },[transcript, listening, isListening, sectionId, soundList, playList])
    return (
        <div className= {mainAppCSS.main_app_layer}>
            <p>{listening ? 'on' : 'off'}</p>
            <p>{isListening ? 'yes' : 'no'}</p>
            <p>{transcript}</p>
            <div className= {mainAppCSS.bot_win}>
                <img src={ require('../../assets/4627fbd59145e53c6162849e1b0398c4.png')}/>
            </div>
            <div className= {mainAppCSS.feature_bar}>
                <div className= {mainAppCSS.settingImg} onClick={() => listeningStatus()}>
                    <img src= {require('../../assets/Vector.png')}/>
                </div>
                <div className= {mainAppCSS.chatImg}>
                    <img src= {require('../../assets/Group.png')} />
                </div>
            </div>
        </div>
    )
}

export default MainApp;