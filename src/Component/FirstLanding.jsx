import React from 'react';
import { background, logo1 } from '../assets/asset';
import { Link } from 'react-router-dom';


const FirstLanding = () => {
  return (
    <div className='w-100% h-screen relative'>
      <img className='w-full h-full object-cover' src={background} alt="background" />
      <div className='flex flex-col items-center absolute h-full w-full justify-center top-0'>



        <div className="items-center text-center  ">

          <img className="pb-[150px] flex pl-4 w-50% h-50%" src={logo1} alt="logo" />
          <p className='text-xl sm:text-xl md:text-4xl text-center'>Empowering Your Voice With Vortech</p>
          <p className='text-xl sm:text-xl sm:mr-10 md:text-4xl text-center'>Your Voice, Your Future.</p>
          <Link to='/secondlanding'>
            <button className=' text-white  bg-[#16da70] text-[18px] rounded-md px-6 py-4 mt-4 font-extrabold'>Next </button>
          </Link>

        </div>

      </div>
    </div>

  );
}

export default FirstLanding;
