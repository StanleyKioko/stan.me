import React from 'react'
import {HiArrowRight } from 'react-icons/hi'
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      
      {/* Container for the content */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className='text-pink-600'>Hi My Name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Stanley Mwange</h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#8892b0]">
          <ReactTyped
            strings={["I'm a Frontend Developer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a frontend developer specializing in building exceptional digital experiences. 
          Currently, I’m focused on building responsive front-end web applications. </p>

        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                View Work
            <span className='group-hover:rotate-90 duration-300'>
                <HiArrowRight className="ml-3" />

            </span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Home
