import React from 'react'
import Greeting from './components/Greeting'
import Activity from './components/Activity'
import UserProfile from './components/UserProfile'
import RecentProject from './components/RecentProjects'
import Wishlist from './components/Wislist'

const page = () => {

  return (
    <div>
      <Greeting></Greeting>
      <div className='flex flex-col md:flex-row gap-4 mt-4'>
      <div className="flex-1 ">
        <UserProfile></UserProfile>
        </div>
        <div className='shadow-xl flex-2'>
          <Activity></Activity>
          <RecentProject></RecentProject>
          <Wishlist></Wishlist>
        </div>
      </div>
    </div>
  )
}

export default page