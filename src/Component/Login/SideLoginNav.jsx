import React from 'react';
import { login, logo1 } from '../../assets/asset';


const SideLoginNav = () => {
    return (
        <div className=' bg-[#16DA70] h-screen flex justify-around flex-col nav-body'>
            <img src={logo1} alt="" className='w-[252px] h-[54px] right-[30px] top-[25px] z-10 absolute text-center'/>
            <img src={login} alt=""  className='w-[494px] h-[609px]'/>
        </div>
    )
}

export default SideLoginNav