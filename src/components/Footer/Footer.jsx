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
        <div className='mt-16'>
            {/* Footer gray icons  */}
            <div className='flex justify-center items-center gap-10 py-6 w-full bg-[#303030]'>
                <FooterIcon icon={<BiLogoReact />} name={"React"} />
                <FooterIcon icon={<BiLogoRedux />} name={"Redux"} />
                <FooterIcon icon={<BiLogoTailwindCss />} name={"Tailwind"} />
                <FooterIcon icon={<SiVite className='scale-90' />} name={"Vite"} />
            </div>
            {/* End  */}

            {/* Inner  */}
            <div className='bg-[#191919] min-h-[100%] grid grid-cols-6 gap-16'>
                {/* First block  */}
                <div className='col-span-2 flex justify-end py-4  min-w-fit '>
                    <div className='col-span-1 flex gap-6 flex-col'>
                        <div className='text-neutral-100 w-full flex justify-start'>
                            <Logo />
                        </div>
                        <div className='text-neutral-600 flex flex-col gap-2 min-w-fit'>
                            <p className='block'>Address: 60-49 Road 11378 New York.</p>
                            <p>Phone: +91 4455-666-7788</p>
                            <p>Email: fakestore.store@gmail.com</p>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>
                {/* First block end  */}

                {/* Second block   */}
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
                {/* Second block  end */}

                {/* Third block   */}
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
                {/* Third block end   */}

                {/* Fourth block */}
                <div className='col-span-2'>
                    <div className="py-4">
                        <h1 className='text-neutral-100 font-bold text-xl my-4 tracking-wide'>Join our newsletter</h1>
                        <div className='text-neutral-400 flex flex-col gap-4'>
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className='flex'>
                                    <input type="email"
                                        className=' bg-[#303030] placeholder:text-neutral-500 px-4 py-3 outline-none focus:outline-1 focus:outline-neutral-500'
                                        placeholder='Enter your email' />
                                    <button className='bg-amber-500 text-neutral-100 text-sm px-4 py-3 font-semibold outline-none focus:outline-1 focus:outline-neutral-500 '>SUBSCRIBE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Fourth block end */}
            </div>
            {/* Inner end  */}

            {/* Empty div for spacing */}
            <div className='bg-[#191919] p-16 w-full'>

            </div>
            {/* Empty div for spacing end */}
        </div>
    )
}
