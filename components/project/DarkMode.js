import React from 'react'
import DarkCard from './DarkCard'

const DarkMode = () => {
  return (
    <div className="w-full overflow-x-hidden bg-[#1D2028]">
    <div className="p-4 w-full lg:w-11/12 mx-auto py-16">
      <div className="flex justify-between items-center">
        <div className="font-poppins flex flex-col">
          <h3 className="font-bold text-4xl mb-8">
            <span className="text-purple2">Dark</span> Mode
          </h3>

          <div className="text-purple2 h-8 w-8 rounded-[50%] shadow-[0px_3px_38px_#00000029] border-3 border-white mb-8"></div>
          <p className="font-medium text-xl text-white">
            Design with a white <br /> background.
          </p>
        </div>
        <div className="flex justify-between ">
          <div className="mr-16 slant">
            <DarkCard purple={true} shadowLg={true} />
          </div>
          <div className="slant">
            <DarkCard  shadowMd={true} />
          </div>
        </div>
      </div>
      <div></div>
    </div>
    <div className="w-full  overflow-x-hidden overflow-y-visible relative">
      <div className="p-4 w-full lg:w-11/12 mx-auto flex justify-end overflow-y-visible z-10">
      
      <div className="slant mr-16"><DarkCard /></div>
      <div className="slant mr-16"><DarkCard /></div>
      <div className="slant"><DarkCard /></div>
      </div>
    </div>
  </div>
  )
}

export default DarkMode