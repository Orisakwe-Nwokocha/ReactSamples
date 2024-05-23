import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm';
import OtpForm from '../../components/OtpPage';
import axios from 'axios';

const Register = () => {
    const [userData, setUserData] = useState(null);

    const handleUserFormSubmit = (data) => {
        setUserData(data);
        // Here you might want to send an initial request to your backend to send the OTP
        // Example:
        // axios.post('/api/send-otp', { email: data.username })
        //   .then(response => console.log(response))
        //   .catch(error => console.error(error));
    };

    const handleOtpFormSubmit = (data) => {
        // Submit the final data to the endpoint
        axios.post('/api/verify-otp', data)
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
