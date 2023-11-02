import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { registerUser, setError } from '../../../redux/auth/auth.slice';
import { Input } from '../Form/Input/Input';

import { PASSWORD_REGEX, USERNAME_REGEX } from '../../../config/config';


export function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const matchRef = useRef();


  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);


  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [validationError, setValidationError] = useState("");


  //Focus username input of page load
  // useEffect(() => {
  //   usernameRef.current.focus();
  // }, []);

  //Validate username
  useEffect(() => {
    const isValid = USERNAME_REGEX.match(username);
    setValidUsername(isValid);
  }, [username]);

  //Validate password
  useEffect(() => {
    const isVaid = PASSWORD_REGEX.match(password);
    setValidPassword(isVaid);
    const isMatched = (password === matchPassword);
    setValidMatch(isMatched);
  }, [password, matchPassword]);



  useEffect(() => {
    setValidationError("");
  }, [username, password, matchPassword]);



  async function handleSubmit(e) {
    e.preventDefault();
    try {
      dispatch(registerUser({ username, password }));
      navigate("/");
    } catch (error) {
      console.log("Error registering : ", error);
      setError(error.message);
    }
  };





  return (
    <section className='grid place-items-center w-full font-poppins min-h-full py-8'>
      <div className="min-w-[50%] flex flex-col justify-center items-center gap-8">
        {
          validationError && <>
            <p>Validation Error</p>
          </>
        }
        <h1 className='text-3xl font-bold tracking-wide font-poppins'>Register</h1>

        <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit}>

          <Input type={"text"} id={"username"} label={"Username"} value={username} onChange={(e) => setUsername(e.target.value)} ref={usernameRef} />

          <Input type={"password"} id={"password"} label={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} ref={passwordRef} />

          <Input type={"password"} id={"matchPassword"} label={"Confirm Password"} value={matchPassword} onChange={(e) => setMatchPassword(e.target.value)} ref={matchRef} />


          <button className='bg-amber-500 p-3 font-semibold text-neutral-200 tracking-wider hover:outline  hover:outline-yellow-400 my-4' disabled={(!validUsername || !validPassword || !validMatch)}>
            SIGN IN
          </button>
        </form>

        <div className='text-gray-500'>
          <Link to={"/login"} className='tracking-wide hover:tracking-widest transition-all duration-300 text-sm border-b border-b-gray-500'>
            OR LOGIN
          </Link>
        </div>
      </div>
    </section>
  );
}
