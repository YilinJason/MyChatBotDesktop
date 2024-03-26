import React, {useState} from "react";
import settingCSS from "./setting.module.css";
import userImg from "../../assets/8b167af653c2399dd93b952a48740620.jpg";

export const Setting = (props) => {

    return (
        <div className={settingCSS.dashboard}>
            <div className={settingCSS.menu}>
                <div className={settingCSS.icon}>
                    <div className={settingCSS.icon_img}>
                        <img src = {userImg} alt=""/>
                    </div>
                    <div className={settingCSS.icon_con}>
                        <p>Welcome</p>
                        <h2>UserName</h2>
                    </div>
                </div>
                <div className={settingCSS.line}></div>
                <div className={settingCSS.detail}>
                    <div className={settingCSS.item}>
                        <div className={settingCSS.light}></div>
                        {/* <div className={settingCSS.licon}>
                            <span className="iconfont icon-shexiang1"></span>
                        </div> */}
                        <div className={settingCSS.con}>Explorer</div>
                    </div>
                    <div className={settingCSS.item}>
                        <div className={settingCSS.light}></div>
                        {/* <div className={settingCSS.licon}>
                            <span className="iconfont icon-shexiang1"></span>
                        </div> */}
                        <div className={settingCSS.con}>Create New</div>
                    </div>
                    <div className={settingCSS.item}>
                        <div className={settingCSS.light}></div>
                        {/* <div className={settingCSS.licon}>
                            <span className="iconfont icon-shexiang1"></span>
                        </div> */}
                        <div className={settingCSS.con}>Browse web</div>
                    </div>
                    <div className={settingCSS.item}>
                        <div className={settingCSS.light}></div>
                        {/* <div className={settingCSS.licon}>
                            <span className="iconfont icon-shexiang1"></span>
                        </div> */}
                        <div className={settingCSS.con}>Vibe it /component</div>
                    </div>
                    <div className={settingCSS.item}>
                        <div className={settingCSS.light}></div>
                        {/* <div className={settingCSS.licon}>
                            <span className="iconfont icon-shexiang1"></span>
                        </div> */}
                        <div className={settingCSS.con}>Discord</div>
                    </div>
                    <div className={settingCSS.item}>
                        <div className={settingCSS.light}></div>
                        {/* <div className={settingCSS.licon}>
                            <span className="iconfont icon-shexiang1"></span>
                        </div> */}
                        <div className={settingCSS.con}>Setting</div>
                    </div>
                    <div className={settingCSS.item}>
                        <div className={settingCSS.light}></div>
                        {/* <div className={settingCSS.licon}>
                            <span className="iconfont icon-shexiang1"></span>
                        </div> */}
                        <div className={settingCSS.con}>LogOut</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting;