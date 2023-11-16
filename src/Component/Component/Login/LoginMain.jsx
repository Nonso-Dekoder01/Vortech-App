import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsFillEyeFill } from "react-icons/bs"
import { AiFillEyeInvisible } from 'react-icons/ai'

const LoginMain = () => {

    const [see, setSee] = useState(true);

    const passwordShow = (e) => {
        e.preventDefault()
        setSee(!see)
    }


    return (

        <div className='pl-8 pt-8 bg-green-100 pr-[100px] h-screen mainl'>
            <form>
                <div className='flex justify-between'>
                    <h2 className="text-neutral-950 text-2xl font-bold login-text">Login</h2>
                    <Link to={'/register'}><button className='text-center text-2lg font-bold  mt-1 py-1 px-3 bg-[#02160B] text-[#16DA70] rounded-lg register-btn'>Register</button></Link>
                </div>
                <div className="flex flex-col mt-[125px]">
                    <div className='flex flex-col justify-around'>
                        <div className="pt-3">
                            <h4 className='text-black text-2md font-normal login-email-text'>Email</h4>
                            <input type="email" placeholder='Email' className='w-[550px] h-[40px] bg-white pl-2 login-email' />
                        </div>
                        <div className="pt-3">
                            <h4 className='text-black text-2md font-normal login-password-text'>Password</h4>
                            <div className='flex items-center'>
                                <button className='ml-[527px] text-[#16DA70] absolute z-10' onClick={passwordShow}>
                                    {
                                        !see ?
                                            <BsFillEyeFill/>
                                            :
                                            <AiFillEyeInvisible/> 
                                    }
                                </button>
                                <input type={ see ? "password" :"text" } placeholder='Password' className='relative w-[579px] h-[40px] bg-white pl-2 login-password' />
                            </div>
                        </div>
                    </div>
                </div>
                <button className='text-center text-2lg font-bold  mt-10 py-2 px-7 bg-[#02160B] text-[#16DA70] rounded-lg'>Confirm</button>
            </form>
        </div>
    )
}

export default LoginMain