import "./signup.css";
import signUpLogo from "./webSignup.png";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        role: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/user/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const responseData = await response.json();
            console.log(responseData);
            if (response.ok) {
                alert("Kindly Check your mail to see your OTP number for Account verification");
                alert(responseData.data.message);
                console.log(responseData);
                navigate("/authenticate", {state: {formData}});
            } else {
                console.error('Error:', responseData);
            }
        } catch (error) {
            console.error('Error:', error);
            let message = error.response.data.data;
            alert(`Error registering: ${message}`);
        }
    };

    return (
        <div className="signup-container">
            <img src={signUpLogo} className="signup-image" alt="signUpLogo" />
            <div className="signup-form">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <h2>Welcome!</h2>
                    <p>Sign up by entering the information below</p>
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
                    <div className="input-container">
                        <select
                            id="dropdown"
                            name="role"
                            className="form-control"
                            value={formData.role}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select preferred role</option>
                            <option value="member">Member</option>
                            <option value="librarian">Librarian</option>
                        </select>
                    </div>
                    <div className="form-footer">
                        <div>
                            <p>Already have an account? </p>
                        </div>
                        <div>
                            <Link to="/login">Login</Link>
                        </div>
                    </div>
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
