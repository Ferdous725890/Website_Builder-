// "use client"
import React from 'react';

// Component Imports
import Greeting from './components/Greeting';
import Activity from './components/Activity';
import UserProfile from './components/UserProfile';
import RecentProject from './components/RecentProjects';
import Wishlist from './components/Wislist'; // Make sure the filename is correct (possibly "Wishlist")
import Notification from './components/Notification';
// import { useAuth } from '@/app/hooks/useAuth';
// import { useRouter } from 'next/navigation';

const Page = () => {
  // const {user} = useAuth()
  // const router = useRouter()
  // if(!user){
  //   router.push('/sign-in')
  //   return
  // }
  return (
    <div>
      {/* Greeting Section */}
      <Greeting />

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        
        {/* Left Column - User Profile */}
        <div className="flex-1">
          <UserProfile />
          <div className='hidden md:block'>
          <Notification></Notification>
          </div>
        </div>

        {/* Right Column - Activity, Projects, Wishlist */}
        <div className="flex-2">
          <Activity />
          <RecentProject />
          <Wishlist />
          <div className='md:hidden'>
          <Notification></Notification>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
