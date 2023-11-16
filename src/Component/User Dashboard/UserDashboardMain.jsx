import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai"

const UserDashboardMain = () => {
    return (
        <div className='pl-10 bg-[#E8FBF1] pb-10 pt-8 pr-[50px] h-full '>
            <div>
                <h1 className='text-4xl font-bold text-[#0D8343]'>Dashboard</h1>
                <p className='text-neutral-400 text-xl pt-3 font-semibold'>Welcome to Vortech: Your Personalized Voting Dashboard</p>
            </div>
            <p className='pt-3 width-[500px] border-black border-b-2 h-[10px] text-black' />
            <div className='mt-6 pt-5 pb-6 pl-7 pr-5 bg-[#0D8343] rounded-[0.175rem] shadow'>
                <h2 className='text-white text-2xl font-bold'>Make A Decision</h2>
                <p className='text-white  text-xl  font-medium'>Choose your candidate, make the right choice!</p>
                <div className='flex pt-8 gap-x-5'>
                    <button className='flex items-center py-2 px-2 rounded-[0.175rem] bg-[#E8FBF1] text-[#0D8343] text-xl font-semibold gap-x-2'>Vote <AiFillPlusCircle className='text-[#0D8343] mt-1' /></button>
                    <button className='flex items-center py-2 px-2 rounded-[0.175rem] bg-[#E8FBF1] text-[#0D8343] text-xl font-semibold gap-x-2'>Register as a Candidate <AiFillPlusCircle className='text-[#0D8343] mt-1' /></button>
                </div>
            </div>
            <div>
                <div className='pt-6'>
                    <h1 className='text-3xl font-extrabold text-[#0D8343]'>LeaderBoard</h1>
                </div>
                <div className='mt-6 '>
                    <table className='border border-[#0D8343] w-full'>
                        <thead>
                            <tr>
                                <th className='border p-2 border-[#0D8343] text-22px font-semibold'>No.</th>
                                <th className='border p-2 border-[#0D8343] text-22px font-semibold'>Candidate Name</th>
                                <th className='border p-2 border-[#0D8343] text-22px font-semibold'>Candidate Role</th>
                                <th className='border p-2 border-[#0D8343] text-22px font-semibold'>Candidate ID</th>
                                <th className='border p-2 border-[#0D8343] text-22px font-semibold'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border p-2 border-[#0D8343]'>1</td>
                                <td className='border p-2 border-[#0D8343]'>Kevin Gates</td>
                                <td className='border p-2 border-[#0D8343]'>SUG PRESIDENT</td>
                                <td className='border p-2 border-[#0D8343]'>MCB001</td>
                                <td className='border p-2 border-[#0D8343]'>First Place</td>
                            </tr>
                            <tr>
                                <td className='border p-2 border-[#0D8343]'>1</td>
                                <td className='border p-2 border-[#0D8343]'>Kevin Gates</td>
                                <td className='border p-2 border-[#0D8343]'>SUG PRESIDENT</td>
                                <td className='border p-2 border-[#0D8343]'>MCB001</td>
                                <td className='border p-2 border-[#0D8343]'>First Place</td>
                            </tr>
                            <tr>
                                <td className='border p-2 border-[#0D8343]'>1</td>
                                <td className='border p-2 border-[#0D8343]'>Kevin Gates</td>
                                <td className='border p-2 border-[#0D8343]'>SUG PRESIDENT</td>
                                <td className='border p-2 border-[#0D8343]'>MCB001</td>
                                <td className='border p-2 border-[#0D8343]'>First Place</td>
                            </tr>
                            <tr>
                                <td className='border p-2 border-[#0D8343]'>1</td>
                                <td className='border p-2 border-[#0D8343]'>Kevin Gates</td>
                                <td className='border p-2 border-[#0D8343]'>SUG PRESIDENT</td>
                                <td className='border p-2 border-[#0D8343]'>MCB001</td>
                                <td className='border p-2 border-[#0D8343]'>First Place</td>
                            </tr>
                            <tr>
                                <td className='border p-2 border-[#0D8343]'>1</td>
                                <td className='border p-2 border-[#0D8343]'>Kevin Gates</td>
                                <td className='border p-2 border-[#0D8343]'>SUG PRESIDENT</td>
                                <td className='border p-2 border-[#0D8343]'>MCB001</td>
                                <td className='border p-2 border-[#0D8343]'>First Place</td>
                            </tr>
                            <tr>
                                <td className='border p-2 border-[#0D8343]'>1</td>
                                <td className='border p-2 border-[#0D8343]'>Kevin Gates</td>
                                <td className='border p-2 border-[#0D8343]'>SUG PRESIDENT</td>
                                <td className='border p-2 border-[#0D8343]'>MCB001</td>
                                <td className='border p-2 border-[#0D8343]'>First Place</td>
                            </tr>
                            <tr>
                                <td className='border p-2 border-[#0D8343]'>1</td>
                                <td className='border p-2 border-[#0D8343]'>Kevin Gates</td>
                                <td className='border p-2 border-[#0D8343]'>SUG PRESIDENT</td>
                                <td className='border p-2 border-[#0D8343]'>MCB001</td>
                                <td className='border p-2 border-[#0D8343]'>First Place</td>
                            </tr>
                            {/* You can add more rows with data here */}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default UserDashboardMain