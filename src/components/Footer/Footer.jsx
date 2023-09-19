import React from 'react'

import { BiLogoReact, BiLogoRedux, BiLogoTailwindCss, } from 'react-icons/bi';
import { SiVite } from 'react-icons/si';
import { Logo } from '../Logo/Logo';


function FooterIcon({ icon, name }) {
    return <p className='text-neutral-400  flex justify-center items-center gap-1'>
        <span className='text-5xl'>{icon}</span>
        <span className='tracking-wider     text-4xl'>{name}</span>
    </p>
}
export default function Footer() {
    return (
        <div className=''>
            <div className='flex justify-center items-center gap-10 py-6 w-full bg-[#303030]'>
                <FooterIcon icon={<BiLogoReact />} name={"React"} />
                <FooterIcon icon={<BiLogoRedux />} name={"Redux"} />
                <FooterIcon icon={<BiLogoTailwindCss />} name={"Tailwind"} />
                <FooterIcon icon={<SiVite className='scale-90' />} name={"Vite"} />
            </div>
            <div className='bg-[#191919] min-h-[100%] grid grid-cols-6 gap-16'>

                <div className='col-span-2 flex justify-end py-4  min-w-fit '>
                    <div className='col-span-1 flex gap-6 flex-col'>
                        <div className='text-neutral-100 w-full flex justify-start'>
                            <Logo />
                        </div>
                        <div className='text-neutral-500 flex flex-col gap-2 min-w-fit'>
                            <p className='block'>Address: 60-49 Road 11378 New York.</p>
                            <p>Phone: +91 4455-666-7788</p>
                            <p>Email: fakestore.store@gmail.com</p>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>

                <div className='col-span-1'>
                    <div className="py-4">
                        <h1 className='text-neutral-100 font-bold text-xl my-4 tracking-wide'>Information</h1>
                        <div className='text-neutral-400 flex flex-col gap-4'>
                            <p>About</p>
                            <p>Checkout</p>
                            <p>Contact</p>
                            <p>Services</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className="py-4">
                        <h1 className='text-neutral-100 font-semibold tracking-wide text-xl my-4'>My Accout</h1>
                        <div className='text-neutral-400 flex flex-col gap-4'>
                            <p>My Account</p>
                            <p>Contact</p>
                            <p>Shopping Cart</p>
                            <p>Shop</p>
                        </div>
                    </div>
                </div>  
                <div></div>
            </div>
        </div>
    )
}
