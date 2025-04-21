import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';
import { TbEaseInOutControlPoints } from 'react-icons/tb';

const Activity = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      
      {/* Active Projects Card */}
      <div className="shadow-sm p-4 border border-gray-200 rounded-xl">
        <div className="flex justify-between items-center">
          <p><GrProjects /></p>
          <p>Active</p>
        </div>
        <p className="text-xl font-semibold mt-2">0</p>
        <p className="text-gray-600">Projects</p>
      </div>

      {/* Saved Wishlists Card */}
      <div className="shadow-sm p-4 border border-gray-200 rounded-xl">
        <div className="flex justify-between items-center">
          <p><FaRegHeart /></p>
          <p>Saved</p>
        </div>
        <p className="text-xl font-semibold mt-2">0</p>
        <p className="text-gray-600">Wishlists</p>
      </div>

      {/* Rewards Points Card */}
      <div className="shadow-sm p-4 border border-gray-200 rounded-xl">
        <div className="flex justify-between items-center">
          <p><TbEaseInOutControlPoints /></p>
          <p>Rewards</p>
        </div>
        <p className="text-xl font-semibold mt-2">0</p>
        <p className="text-gray-600">Points</p>
      </div>

    </div>
  );
};

export default Activity;
