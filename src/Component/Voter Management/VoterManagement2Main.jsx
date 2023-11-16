import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { MdDelete, MdEdit } from 'react-icons/md'

const VoterManagement2Main = () => {
    // const [nav, setNav ] = useState()



    return (
        <div className='pl-6 bg-[#e7fbf0] pb-10 pt-10 pr-[25px] h-full '>
            
            <div>
                <h1 className='text-4xl font-bold text-[#0D8343] pb-5'>Voter Management</h1>
            </div>
            <p className=' width-[500px] -mr-6  border-black border-b-2 h-[10px] text-black' />
            <div className='pt-5 flex justify-between items-center'>
                <p className='text-[#0D8343] text-2xl font-semibold'>Voter Details</p>
                <div className='flex items-center'>
                    <button className='ml-[200px] absolute text-white z-10'><BiSearch /></button>
                    <input type="text" className='w-[229px] h-[40px] opacity-50 pl-2 bg-gradient-to-bl from-green-700 to-green-500 rounded-[10px] shadow relative' />
                </div>
            </div>
            <div>
                <form>
                    <div className='pt-3'>
                        <h4 className='text-black text-2md font-semibold register-firstname-text'>First Name</h4>
                        <input type="text" placeholder='First Name' className='w-[638px] h-[50px] bg-green-500 text-white pl-2' />
                        <div className="pt-3">
                            <h4 className='text-black text-2md font-semibold register-lastname-text'>Last Name</h4>
                            <input type="text" placeholder='Last Name' className='w-[638px] h-[50px] bg-green-500 text-white pl-2' />
                        </div>

                        <div className="flex justify-between pr-[325px] depmatrcno">
                            <div className="flex flex-col pt-3">
                                <h4 className='text-black text-2md font-semibold register-department-text'>Department</h4>
                                <select className="w-[300px] h-[50px] bg-green-500 flex justify-between pl-3 pr-10 text-white">
                                    <option className='pt-2 pl-5 '>Department</option>
                                    <option className='pt-2 pl-5 '>SUG PRESIDENT</option>
                                    <option className='pt-2 pl-5 '>VICE PRESIDENT</option>
                                    <option className='pt-2 pl-5 '>GENERAL SECRETARY</option>
                                    <option className='pt-2 pl-5 '>PRO</option>
                                    <option className='pt-2 pl-5 '>FINANCIAL SECRETARY</option>
                                    <option className='pt-2 pl-5 '>TREASURER</option>
                                    <option className='pt-2 pl-5 '>DIRECTOR OF TRANSPORTATION</option>
                                    <option className='pt-2 pl-5 '>WELLWARE OFFICER</option>
                                    <option className='pt-2 pl-5 '>DIRECTOR OF SPORTS</option>
                                    <option className='pt-2 pl-5 '>ASSISTANT GENERAL SECRETARY</option>
                                    <option className='pt-2 pl-5 '>DIRECTOR OF SOCIALS</option>
                                </select>
                            </div>
                            <div className="flex flex-col pt-3">
                                <h4 className='text-black text-2md font-semibold register-matricnumber-text'>Matric Number</h4>
                                <input type="text" placeholder='Matric Number' className='w-[300px] h-[50px] bg-green-500 pl-2 text-white register-matricnumber' />
                            </div>
                        </div>
                        <div className="flex justify-between pr-[325px] dobphono">
                            <div className="flex flex-col pt-3">
                                <h4 className='text-black text-2md font-semibold register-dob-text'>Date of Birth</h4>
                                <input type="date" placeholder='Date of Birth' className='w-[300px] h-[35px]  bg-green-500 pl-2 text-white register-dob' />
                            </div>
                            <div className="flex flex-col pt-3">
                                <h4 className='text-black text-2md font-semibold register-phonenumber-text'>Phone Number</h4>
                                <input type="text" placeholder='Number' className='w-[300px] h-[35px]  bg-green-500 pl-2 text-white register-phonenumber' />
                            </div>
                        </div>
                        <div className="pt-3">
                            <h4 className='text-black text-2md font-normal register-password-text'>Password</h4>
                            <input type="text" placeholder='Password' className='w-[638px] h-[35px]  bg-green-500 pl-2 text-white register-password' />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                    <button className='text-center text-2lg font-bold  mt-10 py-2 px-7 bg-[#02160B] text-[#16DA70] rounded-lg items-center flex '><MdEdit/>Edit</button>
                    <button className='text-center text-2lg font-bold  mt-10 py-2 px-7 bg-[#02160B] text-[#16DA70] rounded-lg items-center flex '><MdDelete/>Delete</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default VoterManagement2Main