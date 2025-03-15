import React from "react";

const Start = () => {
  return (
    <div className="container mx-auto w-11/12 ">
    <div className="w-[500px broder ]">
    <div className="stats shadow  grid text-center mt-10 ">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
             
            </svg>
          </div>

          <div className="stat-value text-primary ">25.6K</div>
          <div className="stat-desc text-black ">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
          
          </div>
         
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc text-black">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
         
              </div>
            </div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title text-black">Tasks done</div>
    
        </div>
      </div>
    </div>
    </div>
  );
};

export default Start;
