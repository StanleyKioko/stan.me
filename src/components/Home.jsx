import React from 'react'
import { Link } from 'react-scroll'
import { ReactTyped } from "react-typed";
import { HiArrowRight, HiCode } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Container for the content */}
      <div className="relative z-10 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex flex-col gap-3">
          <div className="mb-4">
            {/*<p className='text-pink-600 text-lg font-medium tracking-wider mb-2 flex items-center'>
              <HiCode className="mr-2" /> Hi, my name is
            </p>*/}
            <h1 className="text-5xl sm:text-7xl font-bold text-[#ccd6f6] mb-2 tracking-tight">
              Starnley Mwange
            </h1>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#8892b0] flex items-center h-16">
              I'm a{" "}
              <span className="text-pink-500 ml-2">
                <ReactTyped
                  strings={[
                    "Full Stack Developer",
                    "Data Analyst",
                    "Data Engineer",
                    "AI Engineer"
                  ]}
                  typeSpeed={60}
                  backSpeed={70}
                  loop
                />
              </span>
            </h2>
          </div>
          
          <p className="text-[#8892b0] text-lg leading-relaxed py-4 max-w-[700px] border-l-2 border-pink-600 pl-4">
            I'm a Full Stack Developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on creating responsive and accessible web applications
            with modern technologies and beautiful designs.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link
            to="work"
            smooth={true}
            duration={500}
            className='text-white group border-2 border-pink-600 px-8 py-3 flex items-center bg-transparent hover:bg-pink-600 hover:text-white transition-all duration-300 rounded'
            >
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowRight className="ml-3" />
              </span>
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className='text-white group border-2 px-8 py-3 flex items-center hover:bg-pink-600 hover:text-white transition-all duration-300 rounded'>
              Contact Me
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowRight className="ml-3" />
              </span>
            </Link>
          </div>
          
          {/* Social icons */}
          <div className="flex mt-8 space-x-5">
            <a href="https://github.com/StanleyKioko" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/starnley-mwange/" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/Starnleykioko" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:flex items-center flex-col">
            <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
            <div className="w-[2px] h-8 bg-pink-600/50 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-600/30 to-transparent"></div>
    </div>
  )
}

export default Home