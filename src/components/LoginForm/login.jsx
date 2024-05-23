import "../SignUpForm/signup.css";

import {useState} from 'react';
import {Link} from "react-router-dom";

const LoginForm = ({ onSubmit }) => {
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
        onSubmit(formData);
    };

    return (
        <div className="signup-container">
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
                            <p style={{paddingRight: 50}}><input type="checkbox"/> Remember me </p>
                        </div>
                        <div>
                            <p>Forgot Password</p>
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
