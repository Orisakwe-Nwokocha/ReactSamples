import "./signup.css";
import signUpLogo from "./webSignup.png";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Field, Form, Formik} from "formik";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
// import * as Yup from 'yup';



const SignUpForm = () => {
    // const validationSchema = Yup.object().shape({
    //     fullName: Yup.string()
    //         .matches(/^[a-zA-Z\s]+$/, 'Name should only contain letters and spaces')
    //         .required('Full Name is required'),
    //     email: Yup.string()
    //         .email('Invalid email address')
    //         .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Must be a valid email Address')
    //         .required('Email Address is required'),
    // });
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


    const handleSubmit = async () => {
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
                let message = "Kindly Check your mail to see your OTP number for Account verification";
                // alert(message)
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
                    navigate("/authenticate", { state: { formData } });
                }, 3000);
            } else {
                console.error('Error:', responseData);
                console.log("else statement", responseData.data)

                toast.error(responseData.data, {
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
            }
        } catch (error) {
            console.error('Error:', error);
            console.log("error statement", error)

            let message = error.data;
            // alert(`Error registering: ${message}`);
            toast.error(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        } 
    };

    return (
        <div>
            <Header/>
            <Formik
                // initialValues={{fullName: '', email: ''}}
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}
                initialValues={{username: "", password: "", role: ""}}
            >
        <div className="signup-container">
            <img src={signUpLogo} className="signup-image" alt="signUpLogo" />
            <div className="signup-form">
                <Form className="signup-form">
                    <h2>Welcome!</h2>
                    <p>Sign up by entering the information below</p>
                    <div className="input-container">
                        <Field
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
                        <Field
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
                </Form>
            </div>
        </div>
            </Formik>
            <ToastContainer/>
            <Footer/>
        </div>
    );
};

export default SignUpForm;
