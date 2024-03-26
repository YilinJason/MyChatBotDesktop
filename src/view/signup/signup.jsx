import React, {useState} from "react";
import {signupApi} from "../../Api/hostApi";
import { useNavigate } from "react-router-dom";

export const Signup = (props) => {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [rePassword, setRePassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const initInform = async () => {
        setEmail('');
        setName('');
        setPass('');
        setRePassword('');
    }
    const goSignUp = async () => {
        if(!email.trim() || !password.trim() || !username.trim() || !rePassword.trim()){
            alert("Please input information");
        }
        else{
            if(rePassword !== password){
                alert("Password and Re-Enter password is not match");
            }
            else{
                const newUser = {
                    email: email,
                    name: username,
                    password: password
                }
                signupApi(newUser);
                initInform();
                switchPage();
            }
        }
    }
    const switchPage = async () => {
        navigate("/login");
    }

    return (
        <div className="auto-form-container">
            <form className="signup_form" onSubmit={handleSubmit}>
                <label htmlFor="username">UserName</label>
                <input value={username} onChange={(e) => setName(e.target.value)}type="username"placeholder="username" name="username" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email"placeholder="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)}type="password"placeholder="password" name="password" />
                <label htmlFor="repassword">password</label>
                <input value={rePassword} onChange={(e) => setRePassword(e.target.value)}type="password"placeholder="repassword" name="repassword" />
                <button type="submit" onClick={goSignUp}>Sign Up</button>
            </form>
            <button className="link_btn" onClick={switchPage}>Already have an account? Login now</button>
        </div>
    )
}