/* eslint-disable react/no-unescaped-entities */
import image from '../../assets/others/authentication2.png'
import background from "../../assets/others/authentication.png"
import { Helmet } from 'react-helmet';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';


const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;
        console.log(email, password, captcha);
    }
    // captcha
    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value) == true) {
            toast.success('Captcha Matched');
            setDisabled(false);
        }

        else {
            toast.error('Captcha Does Not Match');
            setDisabled(true);
        }
    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    return (
        <div className='flex items-center max-w-7xl mx-auto max-h-[800px] my-[200px] justify-between px-[70px] py-[20px] shadow-xl shadow-slate-700' style={{ backgroundImage: `url(${background})` }}>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <h4 className="block font-sans mb-[30px] text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Login
                </h4>

                <form onSubmit={handleLogin}

                    className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input
                            type="password"
                            id="password"
                            name='password'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>

                    <div className="mb-5">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <LoadCanvasTemplate />
                        </label>

                        <input
                            type="text"
                            name='captcha'
                            placeholder='please solve this captcha'
                            ref={captchaRef}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        <button
                            onClick={handleValidateCaptcha}
                            className="btn btn-xs btn-outline w-full">Validate</button>
                    </div>

                    <input
                        type="submit"
                        disabled={disabled}
                        className="btn btn-md w-full text-white bg-yellow-500 " />
                </form>
            </div>

            <img src={image} alt="" />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Login;