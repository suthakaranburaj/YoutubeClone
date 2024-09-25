import React, { useState } from 'react';

import "./LoginPage.scss";
import useStore from '../../store/userStore';

function LoginPage() {

    const [email, setEmail] = useState();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const { login } = useStore();

    const submitHandler = async () => {
        try {
            await login(userName, email, password);
            console.log("Done!!");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='flex justify-center items-center h-screen bg-gray-800'>
                <div className='card-content  bg-[#171717] w-[40vw] rounded-3xl flex-col flex items-center p-8 shadow-lg'>
                    <h1 className='font-bold text-3xl text-white mb-8'>Login to Youtube</h1>
                    <div className='input-container flex flex-col gap-4 w-full px-10'>
                        <input
                            type="text"
                            placeholder='Enter your username'
                            value={userName}
                            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => { setUserName(e.target.value) }}
                        />
                        <input
                            type="email"
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            placeholder='Enter your passwrod'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button 
                        onClick={submitHandler}
                        className="bg-blue-500 text-white py-3 px-6 rounded-md mt-6 hover:bg-blue-600 transition-colors"
                    >
                        Login
                    </button>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default LoginPage
