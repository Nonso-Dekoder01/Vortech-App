import React from 'react'
import { UserLogo } from "../../assets/asset";
import { RiDashboardFill } from "react-icons/ri"
import { LiaUserCheckSolid } from "react-icons/lia"
import { FaVoteYea } from "react-icons/fa"
import { TbFileSettings } from "react-icons/tb"
import { VscOutput } from "react-icons/vsc"
import { BiLogOut } from "react-icons/bi"
import {MdHowToVote} from "react-icons/md"
import { Link } from 'react-router-dom';

const VoterManagementSideNav = () => {

    return (

        <div className='h-full bg-[#0D8343] pl-8 fixed w-[25vw] flex flex-col  justify-between '>
            <div className='pt-6' >
                <img src={UserLogo} alt="Logo" />
            </div>
            <div className='flex flex-col justify-between h-screen pt-10'>
                <div className='flex flex-col gap-y-6'>
                                        <Link to='/dashboard'><h2 className='flex items-center text-zinc-400 text-[18px] font-semibold gap-x-1'><RiDashboardFill className='text-[#16DA70] text-[30px]' />Dashboard</h2></Link>
                                        <Link to='/votemanagement'><h2 className='flex items-center text-white text-[18px] font-semibold gap-x-1'><LiaUserCheckSolid className='text-[#16DA70] text-[30px]' />Voter Management</h2></Link>
                                        <Link to='/candidates'><h2 className='flex items-center text-zinc-400 text-[18px] font-semibold gap-x-1'><FaVoteYea className='text-[#16DA70] text-[30px]' />Candidate Management</h2></Link>
                                        <Link to='/voteconfiguration'><h2 className='flex items-center text-zinc-400 text-[18px] font-semibold gap-x-1'><TbFileSettings className='text-[#16DA70] text-[30px]' />Vote configuration</h2></Link>
                                        <Link to='/voteanalysis'><h2 className='flex items-center text-zinc-400 text-[18px] font-semibold gap-x-1'><VscOutput className='text-[#16DA70] text-[30px]' />Vote Analysis</h2></Link>
                                        <Link to='/resultmanagement'><h2 className='flex items-center text-zinc-400 text-[18px] font-semibold gap-x-1'><MdHowToVote className='text-[#16DA70] text-[30px]' />Result Management</h2></Link>
                </div>
                <div>
                    <h2 className='flex items-center text-white text-[22px] font-semibold pb-5 gap-x-1'><BiLogOut className='text-[#16DA70] text-[30px]' />Logout</h2>
                </div>
            </div>
        </div>



    )

}


export default VoterManagementSideNav