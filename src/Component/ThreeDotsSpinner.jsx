import React from 'react'



const ThreeDotsSpinner = () => {
    return (
      <div className="flex space-x-2 items-center justify-center py-5 relative md:right-[245px]  md:mt-16">
        
        <div className="w-2 h-2 bg-[#16da70] rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-[#16da70] rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-[#16da70] rounded-full animate-pulse"></div>
        
      </div>)
  };
  
  export default ThreeDotsSpinner;