import React from 'react'
import { UserLogo } from '../../assets/asset'
import { RiDashboardFill } from "react-icons/ri"
import { LiaUserCheckSolid } from "react-icons/lia"
import { FaVoteYea } from "react-icons/fa"
import { TbFileSettings } from "react-icons/tb"
import { VscOutput } from "react-icons/vsc"
import { BiLogOut } from "react-icons/bi"

const UserDashboardSideNav = () => {
    return (
        <div className='h-full bg-[#0D8343] pl-8 fixed w-[25vw] flex flex-col gap-y-10 overflow-hidden'>
            <div className='pt-8 '>
                <img src={UserLogo} alt="" />
            </div>
            <div className='flex flex-col justify-between h-screen'>
                <div className='flex flex-col gap-y-8'>
                    <h2 className='flex items-center text-white text-[18px] font-semibold gap-x-1'><RiDashboardFill className='text-[#16DA70] text-[30px]' />Dashboard</h2>
                    <h2 className='flex items-center text-zinc-400 text-[18px] font-semibold gap-x-1'><LiaUserCheckSolid className='text-[#16DA70] text-[30px]' />View Candidates</h2>
                    <h2 className='flex items-center text-zinc-400 text-[18px] font-semibold gap-x-1'><FaVoteYea className='text-[#16DA70] text-[30px]' />Vote</h2>
                    <h2 className='flex items-center text-zinc-400 text-[18px] font-semibold gap-x-1'><TbFileSettings className='text-[#16DA70] text-[30px]' />Register as Candidate</h2>
                    <h2 className='flex items-center text-zinc-400 text-[18px] font-semibold gap-x-1'><VscOutput className='text-[#16DA70] text-[30px]' />Result</h2>
                </div>
                <div>
                    <h2 className='flex items-center text-white text-[22px] font-semibold pb-5 gap-x-1'><BiLogOut className='text-[#16DA70] text-[30px]' />Logout</h2>
                </div>
            </div>

        </div>
    )
}

export default UserDashboardSideNav