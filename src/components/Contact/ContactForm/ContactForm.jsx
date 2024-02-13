import React, { useState } from 'react';
import {motion} from 'framer-motion';


export function ContactForm() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

async function handleSubmit(e){
  e.preventDefault();
}
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex gap-4 my-8'>
        <input type="text" name='name' id='name' value={name} onChange={(e) => setName(e.target.value)}
        placeholder='Your Name'
          className='p-2 px-4 w-full outline-none border border-gray-400 focus:outline  focus:outline-gray-400' />
        <input type="email" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} className='p-2 px-4 w-full outline-none border border-gray-400 focus:outline  focus:outline-gray-400' 
        placeholder='Your Email'/>
      </div>
      <div className='relative '>
        <span className={'absolute -top-5 right-2 text-sm font-semibold'}>{500 - message.length}</span>
        <motion.textarea 
        whileFocus={{ outline: '#9ca3af solid',}}
        cols="30" rows="10" maxLength={500} minLength={10} className='min-w-full border border-gray-400 p-2 rounded' placeholder='Leave a message...'
          onChange={(e) => setMessage(e.target.value)}></motion.textarea>
      </div>
      <div className='my-4 mx-1'> 
        <motion.button
        whileHover={{borderRadius: 10}}
        whileTap={{scale: 0.9}}
        whileFocus={{outline: '#9ca3af solid'}}
        className='bg-gray-950  px-3 py-2 text-white outline-none border border-gray-400 '>SEND MESSAGE</motion.button>
      </div>
    </form>
  );
}
