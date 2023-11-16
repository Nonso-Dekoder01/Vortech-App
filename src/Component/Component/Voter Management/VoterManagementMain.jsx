import React from 'react'
import { BiSearch } from 'react-icons/bi'

const VoterManagementMain = () => {
    return (
        <div className='pl-6 bg-[#fbfffd] pb-10 pt-10 pr-[25px] h-full '>
            <div>
                <h1 className='text-4xl font-bold text-[#0D8343] pb-5'>Voter Management</h1>
            </div>
            <p className=' width-[500px] -mr-6  border-black border-b-2 h-[10px] text-black' />
            <div className='pt-5 flex justify-between items-center'>
                <p className='text-[#0D8343] text-2xl font-semibold'>Voter List</p>
                <div className='flex items-center'>
                    <button className='ml-[200px] absolute'><BiSearch/></button>
                    <input type="text" className='w-[229px] h-[40px] opacity-50 pl-2 bg-gradient-to-bl from-green-700 to-green-500 rounded-[10px] shadow relative' />
                </div>
            </div>
            <div className='mt-6 '>
                <table className='border border-[#0D8343] w-full'>
                    <thead>
                        <tr>
                            <th className='border py-1 px-2 border-zinc-400 text-20px font-semibold'>No.</th>
                            <th className='border py-1 px-2 border-zinc-400 text-20px font-semibold'>ID</th>
                            <th className='border py-1 px-2 border-zinc-400 text-20px font-semibold'>Department</th>
                            <th className='border py-1 px-2 border-zinc-400 text-20px font-semibold'>First Name</th>
                            <th className='border py-1 px-2 border-zinc-400 text-20px font-semibold'>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>1</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>652e9e67b88fdc257fc412e8</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>Chemistry</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>Sophia</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>Carson</td>
                        </tr>
                        <tr>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>1</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>652e9e67b88fdc257fc412e8</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>Chemistry</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>Sophia</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>Carson</td>
                        </tr>
                        <tr>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>1</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>652e9e67b88fdc257fc412e8</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>Chemistry</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>Sophia</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>Carson</td>
                        </tr>
                        <tr>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>1</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>652e9e67b88fdc257fc412e8</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>Chemistry</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>Sophia</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>Carson</td>
                        </tr>
                        <tr>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>1</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>652e9e67b88fdc257fc412e8</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>Chemistry</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>Sophia</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>Carson</td>
                        </tr>
                        <tr>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>1</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>652e9e67b88fdc257fc412e8</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>Chemistry</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>Sophia</td>
                            <td className='border py-1 px-2 border-zinc-400 text-14px'>Carson</td>
                        </tr>
                        {/* You can add more rows with data here */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VoterManagementMain