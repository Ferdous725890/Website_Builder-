import React from 'react';

// Component Imports
import Greeting from './components/Greeting';
import Activity from './components/Activity';
import UserProfile from './components/UserProfile';
import RecentProject from './components/RecentProjects';
import Wishlist from './components/Wislist'; // Make sure the filename is correct (possibly "Wishlist")

const Page = () => {
  return (
    <div>
      {/* Greeting Section */}
      <Greeting />

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        
        {/* Left Column - User Profile */}
        <div className="flex-1">
          <UserProfile />
        </div>

        {/* Right Column - Activity, Projects, Wishlist */}
        <div className="flex-2">
          <Activity />
          <RecentProject />
          <Wishlist />
        </div>
      </div>
    </div>
  );
};

export default Page;
