import React, { useState } from 'react';

export function ContactForm() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  return (
    <form>
      <div className='flex gap-4 my-8'>
        <input type="text" name='name' id='name' value={name} onChange={(e) => setName(e.target.value)}
        placeholder='Your Name'
          className='p-2 px-4 w-full outline-none border border-gray-400 focus:outline  focus:outline-gray-400' />
        <input type="email" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} className='p-2 px-4 w-full outline-none border border-gray-400 focus:outline  focus:outline-gray-400' 
        placeholder='Your Email'/>
      </div>
      <div className='relative '>
        <span className={'absolute -top-5 right-2 text-sm font-semibold'}>{500 - message.length}</span>
        <textarea cols="30" rows="10" maxLength={500} minLength={10} className='min-w-full border border-gray-400 p-2 rounded' placeholder='Leave a message...'
          onChange={(e) => setMessage(e.target.value)}></textarea>
      </div>
      <div className='my-4 mx-1'> 
        <button className='bg-yellow-400 hover:bg-yellow-500 px-3 py-2 text-white outline-none border border-gray-400 focus:outline  focus:outline-gray-400'>SEND MESSAGE</button>
      </div>
    </form>
  );
}
