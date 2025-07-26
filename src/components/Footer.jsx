import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a192f] text-gray-300 py-8 border-t border-gray-600 pb-16">
      <div className="max-w-[1000px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-[#ccd6f6]">Starnley Mwange</h3>
            <p className="text-[#8892b0] mt-2">Full Stack Developer</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/StanleyKioko" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/starnley-mwange/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:mwangestanley02@gmail.com" className="hover:text-pink-600 transition duration-300">
              <HiOutlineMail size={24} />
            </a>
            {/*<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition duration-300">
              <BsFillPersonLinesFill size={24} />
            </a>*/}
          </div>
        </div>
        <div className="text-center mt-8 text-[#8892b0]">
          <p>&copy; {new Date().getFullYear()} Starnley Mwange. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer