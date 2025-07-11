import React, {useState} from 'react'
import logo from '../assets/logo.jpg'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className="fixed  w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
        </div>
        {/*menu*/}
         <ul className="hidden md:flex">
            <li>
                <Link to="home" smooth={true} duration={500}>home</Link>
                </li>
            <li>
                <Link to="about" smooth={true} duration={500}>about</Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>skills</Link>
            </li>
            <li>
                <Link to="work" smooth={true} duration={500}>projects</Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500}>contact</Link>
            </li>
            </ul>
        
        {/*hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/*Mobile menu*/}
        {/*Mobile menu*/}
<ul className={!nav? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-gray-300 md:hidden'}>
    <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="home" smooth={true} duration={500}>home</Link>
    </li>
    <li className="px-6 text-4xl">
        <Link onClick={handleClick} to="about" smooth={true} duration={500}>about</Link>
    </li>
    <li className="px-6 text-4xl">
        <Link onClick={handleClick} to="skills" smooth={true} duration={500}>skills</Link>
    </li>
    <li className="px-6 text-4xl">
        <Link onClick={handleClick} to="work" smooth={true} duration={500}>projects</Link>
    </li>
    <li className="px-6 text-4xl">
        <Link onClick={handleClick} to="contact" smooth={true} duration={500}>contact</Link>
    </li>
</ul>

        {/*Social icons*/}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[60px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-blue-600">
                    <a className='flex justify-between items-center'
                    href="/">LinkedIn <FaLinkedin size={30} /></a>
                </li>
                <li className="w-[60px] h-[60px] flex justify-between items-center ml-[-70px] hover:ml-[-10px] duration-300 bg-[#333333]">
                    <a className='flex justify-between items-center'
                    href="/">GitHub <FaGithub size={30} /></a>
                </li>
                <li className="w-[60px] h-[60px] flex justify-between items-center ml-[-60px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                    <a className='flex justify-between items-center'
                    href="/">Email <HiOutlineMail size={30} /></a>
                </li>
                <li className="w-[60px] h-[60px] flex justify-between items-center ml-[-70px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                    <a className='flex justify-between items-center'
                    href="/">Resume <BsFillPersonLinesFill size={30} /></a>
                </li>
            </ul>
            </div>
        </div>
  )
}

export default Navbar
