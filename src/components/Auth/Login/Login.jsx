import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Input } from '../Form/Input/Input';
import { Link, useNavigate } from 'react-router-dom';


import { loginUser, setError } from '../../../redux/auth/auth.slice';
import { HOME, REGISTER } from '../../../config/urlPaths';


export function Login() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showpwd, setShowPwd] = useState(false);
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await dispatch(loginUser({ username, password }));
            navigate(HOME);
        } catch (error) {
            dispatch(setError(error));
        }
    }
    return (
        <div className='grid place-items-center w-full font-poppins min-h-full py-8'>
            <div className="min-w-[50%] flex flex-col justify-center items-center gap-8">
                <h1 className='text-3xl font-bold tracking-wide font-poppins'>Login</h1>
                <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit}>

                    <Input type={"text"} id={"username"} label={"Username"} value={username} onChange={(e) => setUsername(e.target.value)} />

                    <Input type={showpwd ? "text" : "password"} id={"password"} label={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} />

                    <div className='flex p-1 justify-between items-baseline'>
                        <div className='flex gap-1 justify-center items-center'>
                            <input type="checkbox" id="showpwd" checked={showpwd} value={showpwd} onChange={(e) => setShowPwd(prev => !prev)} />
                            <label htmlFor="showpwd" className='text-sm text-gray-500'>Show password</label>
                        </div>
                        <div>
                            <Link to={HOME} className='text-sm hover:text-blue-600'>Forgot password?</Link>
                        </div>
                    </div>

                    <button className='bg-amber-500 p-3 font-semibold text-neutral-50 tracking-wider hover:outline  hover:outline-yellow-400'>
                        SIGN IN
                    </button>
                </form>

                <div className='text-gray-500'>
                    <Link to={REGISTER} className='tracking-wide hover:tracking-widest transition-all duration-300 text-sm border-b border-b-gray-500'>
                        OR CREATE AN ACCOUNT
                    </Link>
                </div>
            </div>
        </div>
    );
}
