import React, {useState} from "react";
import {loginApi} from "../../Api/hostApi"
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const navigate = useNavigate();
    // const {BrowserWindow} = require('@electron/remote');

    const handleSubmit = (e) => {
        e.preventDefault();
        initInput();
        navigate("/mainpage");
    }
    // 初始化inputbox
    const initInput = () => {
        setEmail('');
        setPass('');
    }
    const goLogIn = async () => {
        try {
            if(!email.trim() || !password.trim()){
                alert("pleace input information!")
            }
            else{
                const user = {
                    email: email,
                    password: password
                }
                let LoginRes = await loginApi(user);
                localStorage.setItem("token",LoginRes.jwt);
                console.log(LoginRes.jwt);
            }
        } catch(err) {
            alert('log in failed')
        }
    }
    const switchPage = async () => {
        navigate("/signup");
    }


    return (
        <div className="auto-form-container">
            <form className = "login_form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email"placeholder="ex@gmail.com" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)}type="password"placeholder="********" name="email" />
                <button type="submit" onClick={goLogIn}>Log In</button>
            </form>
        
            <button className="link_btn" onClick={switchPage}>Don't have an account? Signup now</button>
        </div>
    )
}