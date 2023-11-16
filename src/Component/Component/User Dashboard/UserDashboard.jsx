import React from 'react';
import UserDashboardSideNav from './UserDashboardSideNav';
import UserDashboardMain from './UserDashboardMain';

const UserDashboard = () => {
  return (
    <div className='flex '>
      <div className="w-3/12">
        <UserDashboardSideNav/>
      </div>
      <div className="w-9/12">
        <UserDashboardMain/>
      </div>
    </div>
  )
}

export default UserDashboard
