import React from 'react'
import VoterManagementMain from './VoterManagementMain'
import VoterManagementSideNav from './VoterManagementSideNav'

const VoterManagement = () => {
    return (
        <div className='flex'>
            <div className="w-3/12">
                <VoterManagementSideNav/>
            </div>
            <div className="w-9/12 overflow-y-scroll">
                <VoterManagementMain/>
            </div>
        </div>
    )
}

export default VoterManagement