import { useState } from 'react';
import SignUpForm from './SignUpForm';
import OtpForm from "./OtpForm";
import axios from 'axios';

const Register = () => {
    const [userData, setUserData] = useState(null);
    const API_URL = "http://localhost:8080/user";

    const handleUserFormSubmit = (data) => {
        setUserData(data);
        console.log(data);
        axios.post(`${API_URL}/register`, { email: data.username })
            .then(response => console.log(response))
            .catch(error => console.error(error));
    };

    const handleOtpFormSubmit = (data) => {
        console.log(data);
        axios.post(`${API_URL}/register`, data)
            .then(response => {
                console.log('OTP Verified', response);
            })
            .catch(error => {
                console.error('Error verifying OTP', error);
            });
    };

    return (
        <div>
            {!userData ? (
                <SignUpForm onSubmit={handleUserFormSubmit} />
            ) : (
                <OtpForm initialData={userData} onSubmit={handleOtpFormSubmit} />
            )}
        </div>
    );
};

export default Register;
