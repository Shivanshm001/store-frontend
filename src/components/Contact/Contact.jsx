import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { ContactForm } from './ContactForm/ContactForm';

function ContactCard({ icon, title, subtitle }) {
  return <>
    <div className='flex gap-3 items-center rounded-lg shadow-full shadow-[#e8e8e8] bg-white p-4'>
      <div className='mr-3'>
        {icon}
      </div>
      <div className='flex flex-col gap-1'>
        <p className='text-sm text-neutral-400'>{title}</p>
        <p className=''>{subtitle}</p>
      </div>
    </div>
  </>;
}
export function Contact() {
  return (
    <div className='grid grid-cols-2 place-items-center gap-6 p-8'>
      <div className='col-span-1  flex flex-col items-center justify-start'>
        <div className='m-8 flex flex-col gap-3'>
          <h1 className='text-2xl tracking-wide'>Contact Us</h1>
          <p className='text-neutral-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quos dignissimos iste harum quas a veniam tempora praesentium! Facere cumque adipisci veniam ex possimus alias labore similique iusto unde maxime!</p>
        </div>


        <div className='flex flex-col gap-6 w-[90%]'>
          <ContactCard icon={"Icon"} title={"Address"} subtitle={"140 Anand Vihar, New Delhi, 110095"} />
          <ContactCard icon={"Icon"} title={"Address"} subtitle={"140 Anand Vihar, New Delhi, 110095"} />
          <ContactCard icon={"Icon"} title={"Address"} subtitle={"140 Anand Vihar, New Delhi, 110095"} />
        </div>
      </div>
      <div className='col-span-1'>
        <div className='m-8 flex flex-col gap-3'>
          <h1 className='text-2xl tracking-wide'>Leave a note</h1>
          <p className='text-neutral-500'>Our staff will call back later and answer your questions.</p>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
