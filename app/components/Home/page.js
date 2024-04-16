import React from 'react';
import Header from "../Header/page"
const page = () => {
  return (
    <div className='text-white font-serif bg-[url("/bg.jpg")] w-full min-h-screen bg-cover bg-center bg ' id='#Home'>
        <Header/>
     <div className='p-12 pt-16 text-3xl '>
     <h1>Welcome To Coffero!</h1>
     <p className='text-5xl w-[50%] pt-4'>Discover Amazing Coffee House & Get Energy</p>
     </div>
    </div>
  );
}

export default page;
