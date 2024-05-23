import "./signup.css";

import {useState} from 'react';

const SignUpForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        role: "",
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
                        <option disabled selected value="">
                            Select preferred role
                        </option>
                        <option value="member">Member</option>
                        <option value="librarian">Librarian</option>
                    </select>
                </div>
                <div className="form-footer">
                    <div>
                        <p>Already have an account? </p>
                    </div>
                    <div>
                        <a href="/login">Login</a>
                    </div>
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
            </div>
        </div>
    );
};

export default SignUpForm;
