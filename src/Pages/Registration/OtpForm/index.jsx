import "./otpForm.css"
import {useState} from 'react';
import signUpLogo from "../SignUpForm/webSignup.png";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

const OtpForm = () => {
    const [otp, setOtp] = useState('');
    const location = useLocation();
    const { formData } = location.state || {};
    const navigate = useNavigate();


    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalData = {
            ...formData,
            otp,
        };
        axios.post("http://localhost:8080/user/register", finalData)
            .then(response => {
                console.log('OTP Verified', response);
                alert("Your Account has been successfully verified");
                let userId = response.data.data.id;
                let username = response.data.data.username;
                alert(`user id:  '${userId}'  ||  username:  '${username}'`)
                console.log(response.data.data);
                navigate("/login")
            })
            .catch(error => {
                console.error('Error verifying OTP', error);
            });
    };

    return (
        <div className="otp-container">
            <img src={signUpLogo} className="signup-image" alt="signUpLogo"/>

            <div className="signup-form">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <h2>Enter your otp number</h2>
                    <div className="input-container">
                        <input
                            id="otp"
                            name="otp"
                            type="text"
                            placeholder="OTP"
                            value={otp}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="signup-button">Verify OTP</button>
                </form>
            </div>
        </div>
    );
};

export default OtpForm;
