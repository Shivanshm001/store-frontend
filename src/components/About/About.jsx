import React from 'react';


export function About() {
  return (
    <section className='p-8 flex flex-col gap-8'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl'>Summary</h1>
        <p className='pl-4 border-l-4 border-l-yellow-400'>
          This is an e-commerce website that is supposed to be used by a single "shop" or "store" as opposed to something like amazon. <br /> This is an amalgam of the tools and frameworks I have learned during the course of learning web development, <br /> both in front-end (React/Javascript, Redux, Tailwind) and backend (Nodejs, Express/Typescript, MongoDB).
        </p>
      </div>

      <div className='flex flex-col gap-4 my-4'>
        <h1 className='text-3xl'>Features</h1>
        <div className='pl-4 border-l-4 border-l-yellow-400'>
          <h2 className=' font-semibold'>This works similar an e-commerce website where the user can :</h2>
          <ul className='list-disc pl-8'>
            <li className='list-item'>Browse the products in shop.</li>
            <li>Add products to Cart.</li>
            <li>Add products to  Wishlist.</li>
            <li>Remove products from Cart/Wishlist.</li>
          </ul>
        </div>

        <div className='flex flex-col gap-4'>
          <p>The website also uses jwt (JSON Web Tokens) for auth, sign in gives a "admin" access which allows the users to modify the database.</p>
          <div className='pl-4 border-l-4 border-l-yellow-400'>
            <h2 className='font-semibold'>After sign in , the user can :</h2>
            <ul className='list-disc pl-8'>
              <li>Have access to two new pages.</li>
              <li>Add new product to the database through a form.</li>
              <li>Update a product's information in the database through a form.</li>
              <li>Delete product's in the database.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 my-4'>
        <h1 className='text-3xl'>Breakdown</h1>
        <div className='pl-4 border-l-4 border-l-yellow-400'>
          <h2 className=' font-semibold'>Frontend stack :</h2>
          <ul className='list-disc pl-8 '>
            <li>Daisy UI.</li>
            <li>Framer Motion.</li>
            <li className='list-item'>Javascript.</li>
            <li className='list-item'>React.</li>
            <li className='list-item'>Redux Toolkit.</li>
            <li>React Icons</li>
            <li>Tailwind CSS.</li>
          </ul>
        </div>

        <div className='flex flex-col gap-4 my-4'>
          <div className='pl-4 border-l-4 border-l-yellow-400'>
            <h2 className='font-semibold'>Backend Stack</h2>
            <ul className='list-disc pl-8'>
              <li>Typescript.</li>
              <li>AWS S3 Bucket</li>
              <li>NodeJS / ExpressJS.</li>
              <li>MongoDB.</li>
              <li>Mongoose.</li>
              <li>Multer</li>
              <li>Cookie Parser.</li>
              <li>JSON Web Tokens (JWT).</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='p-[1px] bg-gray-400'/>
      <h1 className='text-4xl'>End</h1>
    </section>
  );
}