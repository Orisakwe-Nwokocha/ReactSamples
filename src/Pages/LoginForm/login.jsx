import "../Registration/SignUpForm/signup.css";

import {useState} from 'react';
import {Link} from "react-router-dom";
import loginLogo from "./webLogin.png";
import axios from "axios";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch("http://localhost:8080/user/login", formData)
            .then(response => {
                console.log('OTP Verified', response);
                alert("Your Account has been successfully logged in");
                let userId = response.data.data.id;
                let username = response.data.data.username;
                alert(`user id:  '${userId}'  ||  username:  '${username}'`)
                console.log(response.data.data);
            })
            .catch(error => {
                console.error('Error verifying OTP', error);
            });
    };

    return (
        <div className="signup-container">
            <img src={loginLogo} className="signup-image" alt="loginLogo"/>

            <div className="signup-form">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <h2>Welcome Back!</h2>
                    <p>Log in to your Dashboard</p>
                    <div className="input-container">
                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-footer1">
                        <div>
                            <p style={{paddingRight: 60}}><input type="checkbox"/> Remember me </p>
                        </div>
                        <div>
                            <p style={{paddingLeft: 60}}>Forgot Password</p>
                        </div>
                    </div>
                    <button type="submit" className="signup-button">Login</button>
                    <div className="form-footer">
                        <div>
                            <p>Don't have an account? </p>
                        </div>
                        <div>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
