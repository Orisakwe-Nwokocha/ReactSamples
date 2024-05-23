import "./otpForm.css"
import {useState} from 'react';

const OtpForm = ({ initialData, onSubmit }) => {
    const [otp, setOtp] = useState('');

    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalData = {
            ...initialData,
            otp,
        };
        onSubmit(finalData);
    };

    return (
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
    );
};

export default OtpForm;
