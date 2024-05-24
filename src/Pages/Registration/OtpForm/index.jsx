import "./otpForm.css"
import {useState} from 'react';
import signUpLogo from "../SignUpForm/webSignup.png";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import {toast, ToastContainer} from "react-toastify";

const OtpForm = () => {
    const [otp, setOtp] = useState('');
    const location = useLocation();
    const { formData } = location.state || {};
    const navigate = useNavigate();

    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = () => {
        const finalData = {
            ...formData,
            otp,
        };
        axios.post("http://localhost:8080/user/register", finalData)
            .then(response => {
                console.log('OTP Verified', response);
                let message = "Your Account has been successfully verified";
                // alert(message);
                // let userId = response.data.data.id;
                // let username = response.data.data.username;
                // alert(`user id:  '${userId}'  ||  username:  '${username}'`)
                console.log(response.data.data);

                toast.success(message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });

                setTimeout(() => {
                    navigate("/login");
                }, 3000);

            })
            .catch(error => {
                console.error('Error verifying OTP', error);
                let message = error.response.data.data;
                // alert(`Error verifying OTP: ${message}`);

                toast.error(`Error verifying OTP: ${message}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                    // transition: Bounce,
                });
            });
    };

    return (
        <div>
            <Formik
                // initialValues={{fullName: '', email: ''}}
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}
                initialValues={{otp: ""}}
            >
        <div className="otp-container">
            <img src={signUpLogo} className="signup-image" alt="signUpLogo"/>

            <div className="signup-form">
                <Form className="signup-form">
                    <h2>Enter your otp number</h2>
                    <div className="input-container">
                        <Field
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
                </Form>
            </div>
        </div>
            </Formik>
            <ToastContainer/>
        </div>
    );
};

export default OtpForm;
