import "../Registration/SignUpForm/signup.css";

import {useState} from 'react';
import {Link} from "react-router-dom";
import loginLogo from "./webLogin.png";
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import {Field, Form, Formik} from "formik";
import 'react-toastify/dist/ReactToastify.css';

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

    const handleSubmit = () => {
        axios.patch("http://localhost:8080/user/login", formData)
            .then(response => {
                console.log('Logged in', response);
                // alert("Your Account has been successfully logged in");
                // let userId = response.data.data.id;
                // let username = response.data.data.username;

                toast.success('Your Account has been successfully logged in', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });

                // alert(`user id:  '${userId}'  ||  username:  '${username}'`)
                // console.log(response.data.data);
            })
            .catch(error => {
                console.error('Error logging in', error);
                let message = error.response.data.data;
                // alert(`Error logging in: ${message}`);

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
            });
    };

    return (
        <div>
        <Formik
            // initialValues={{fullName: '', email: ''}}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
            initialValues={{username: "", password: ""}}
        >
            <div className="signup-container">

                <img src={loginLogo} className="signup-image" alt="loginLogo"/>

                <div className="signup-form">
                    <Form className="signup-form">
                        <h2>Welcome Back!</h2>
                        <p>Log in to your Dashboard</p>
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
                        <div className="form-footer1">
                            <div>
                                <p style={{paddingRight: 43}}><input type="checkbox"/> Remember me </p>
                            </div>
                            <div>
                                <p style={{paddingLeft: 43}}>Forgot Password</p>
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
                    </Form>
                </div>
            </div>
        </Formik>
            <ToastContainer/>
        </div>
    );
};

export default LoginForm;
