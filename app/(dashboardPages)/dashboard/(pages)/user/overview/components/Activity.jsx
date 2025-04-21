import React from 'react'
import { FaRegHeart } from 'react-icons/fa';
import { GrProjects } from "react-icons/gr";
import { TbEaseInOutControlPoints } from "react-icons/tb";
import RecentRentals from './RecentRentals';

const Activity = () => {
  return (
    <div className='flex-2 shadow-xl'>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
      <div className='shadow-sm p-4 border-gray-200 border rounded-xl'>
      <div className='flex justify-between items-center'>
      <p><GrProjects /></p>
      <p>Active</p>
      </div>
      <p>0</p>
      <p>Projects</p>
      </div>
      <div className='shadow-sm p-4 border-gray-200 border rounded-xl'>
      <div className='flex justify-between items-center'>
      <p><FaRegHeart /></p>
      <p>Saved</p>
      </div>
      <p>0</p>
      <p>Wishlists</p>
      </div>
      <div className='shadow-sm p-4 border-gray-200 border rounded-xl'>
      <div className='flex justify-between items-center'>
      <p><TbEaseInOutControlPoints /></p>
      <p>Rewards</p>
      </div>
      <p>0</p>
      <p>Points</p>
      </div>
      </div>
      <RecentRentals></RecentRentals>
    </div>
  )
}

export default Activity