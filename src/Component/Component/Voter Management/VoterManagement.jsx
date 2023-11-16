import React from 'react'
import VoterManagementMain from './VoterManagementMain'
import VoterManagementSideNav from './VoterMangementSideNav'

const VoterManagement = () => {
    return (
        <div className='flex'>
            <div className="w-3/12">
                <VoterManagementSideNav/>
            </div>
            <div className="w-9/12">
                <VoterManagementMain/>
            </div>
        </div>
    )
}

export default VoterManagement