import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogoReact, BiLogoRedux, BiLogoTailwindCss, } from 'react-icons/bi';
import { SiVite } from 'react-icons/si';
import { Logo } from '../Logo/Logo';


function FooterIcon({ icon, name }) {
    return <p className='text-neutral-400  flex justify-center items-center gap-1'>
        <span className='text-5xl'>{icon}</span>
        <span className='tracking-wider     text-4xl'>{name}</span>
    </p>;
}

function FooterLink({ to, name }) {
    return <Link to={to} className='hover:underline underline-offset-2'>{name}</Link>;
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
                            <FooterLink to={"/about"} name={"About"} />
                            <FooterLink to={"/checkout"} name={"Checkout"} />
                            <FooterLink to={"/contact"} name={"Contact"} />
                            <FooterLink to={"#"} name={"Services"} />
                        </div>
                    </div>
                </div>
                {/* Second block  end */}

                {/* Third block   */}
                <div className='col-span-1'>
                    <div className="py-4">
                        <h1 className='text-neutral-100 font-semibold tracking-wide text-xl my-4'>My Accout</h1>
                        <div className='text-neutral-400 flex flex-col gap-4'>
                            <FooterLink to={"#"} name={"My Account"} />
                            <FooterLink to={"/contact"} name={"Contact"} />
                            <FooterLink to={"/cart"} name={"Shopping Cart"} />
                            <FooterLink to={"/shop"} name={"Shop"} />
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

            <div className='bg-[#191919] pt-16 pb-8 w-full'>
                <div className='text-neutral-400 text-sm tracking-wide text-center'>

                    <p className='my-1'>
                        <span>This website is a replica of a free website template from</span>
                        <a href="https://colorlib.com/" className='hover:text-yellow-400 mx-1 transition-all duration-300  border-b border-b-neutral-400 hover:border-yellow-400'>Colorlib.</a>
                    </p>
                    <p className='my-1'>
                        <span>All the images used in the website are from </span>
                        <a href="https://unsplash.com/" className='hover:text-yellow-400 mx-1 transition-all duration-300 border-b hover:border-yellow-400 border-b-neutral-400'>Unsplash</a>

                        <span>and fall under the free use licence.</span>
                    </p>
                </div>
            </div>
            {/* Empty div for spacing end */}
        </div>
    );
}
