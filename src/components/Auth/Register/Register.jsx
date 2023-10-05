import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { setRegisterData, registerUser, setError } from '../../../redux/auth/auth.slice';
import { Input } from '../Form/Input/Input';
import { Error } from '../Error/Error';


export function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [matchPwd, setMatchPwd] = useState("");


  async function handleSubmit(e) {
    e.preventDefault();
    try {
      dispatch(registerUser({ username, password }));
      navigate("/");
    } catch (error) {
      console.log("Error registering : ", error);
      setError(error);
    }
  }
  return (
    <div className='grid place-items-center w-full font-poppins min-h-full py-8'>
      <Error />
      <div className="min-w-[50%] flex flex-col justify-center items-center gap-8">
        <h1 className='text-3xl font-bold tracking-wide font-poppins'>Register</h1>
        <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit}>

          <Input type={"text"} id={"username"} label={"Username"} value={username} onChange={(e) => setUsername(e.target.value)} />

          <Input type={"password"} id={"password"} label={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} />

          <Input type={"password"} id={"confirmpwd"} label={"Confirm Password"} value={confirmPwd} onChange={(e) => setConfirmPwd(e.target.value)} />


          <button className='bg-amber-500 p-3 font-semibold text-neutral-200 tracking-wider hover:outline  hover:outline-yellow-400 my-4'>
            SIGN IN
          </button>
        </form>

        <div className='text-gray-500'>
          <Link to={"/login"} className='tracking-wide hover:tracking-widest transition-all duration-300 text-sm border-b border-b-gray-500'>
            OR LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
}
