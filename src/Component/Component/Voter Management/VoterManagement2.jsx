import React from 'react'
import VoterManagement2Main from './VoterManagement2Main'
import VoterManagementSideNav from './VoterMangementSideNav'

const VoterManagement2 = () => {
    return (
        <div className='flex'>
            <div className="w-3/12">
                <VoterManagementSideNav/>
            </div>
            <div className="w-9/12">
                <VoterManagement2Main/>
            </div>
        </div>
    )
}

export default VoterManagement2