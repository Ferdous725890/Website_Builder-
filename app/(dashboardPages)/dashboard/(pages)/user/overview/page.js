import React from 'react'
import Greeting from './components/Greeting'
import Activity from './components/Activity'
import UserProfile from './components/UserProfile'

const page = () => {
  
  return (
    <div>
<Greeting></Greeting>
<div className='flex gap-4 mt-4'>
  <UserProfile></UserProfile>
<Activity></Activity>
</div>
    </div>
  )
}

export default page