import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.jpg'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    
    // Handle navbar background change on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Toggle mobile menu
    const handleClick = () => setNav(!nav);
    
    // Close mobile menu when clicking a link
    const closeNav = () => setNav(false);
    
    const navLinks = [
        { id: 'home', text: 'Home' },
        { id: 'about', text: 'About' },
        { id: 'skills', text: 'Skills' },
        { id: 'work', text: 'Projects' },
        { id: 'contact', text: 'Contact' }
    ];
    
    const socialLinks = [
        { 
            name: 'LinkedIn', 
            icon: <FaLinkedin size={22} />, 
            href: 'https://www.linkedin.com/in/starnley-mwange/',
            color: 'bg-[#0077b5]'
        },
        { 
            name: 'GitHub', 
            icon: <FaGithub size={22} />, 
            href: 'https://github.com/StanleyKioko',
            color: 'bg-[#333333]'
        },
        { 
            name: 'Email', 
            icon: <HiOutlineMail size={22} />, 
            href: 'mailto:mwangestanley02@gmail.com',
            color: 'bg-[#ea4335]'
        }
    ];

    return (
        <div className={`fixed w-full h-[70px] flex justify-between items-center px-6 text-gray-300 z-50 transition-all duration-300 ${
            scrolled ? 'bg-[#0a192f]/95 backdrop-blur-sm shadow-md' : 'bg-[#0a192f]'
        }`}>
            {/* Logo */}
            <div className="flex items-center">
                <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="w-12 h-12 rounded-full object-cover border-2 border-pink-600/30" 
                    />
                </Link>
                <span className="ml-3 font-bold text-xl hidden sm:block tracking-wide">
                    Stanley<span className="text-pink-600">.</span>
                </span>
            </div>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-2">
                {navLinks.map(link => (
                    <li key={link.id}>
                        <Link 
                            to={link.id} 
                            spy={true}
                            smooth={true} 
                            duration={500}
                            offset={-70}
                            onSetActive={() => setActiveSection(link.id)}
                            className={`px-4 py-2 cursor-pointer hover:text-pink-500 transition-colors relative ${
                                activeSection === link.id ? 'text-pink-500 font-medium' : ''
                            }`}
                        >
                            {link.text}
                            {activeSection === link.id && (
                                <span className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 h-0.5 bg-pink-600 rounded-full"></span>
                            )}
                        </Link>
                    </li>
                ))}
                
                <li className="ml-3">
                    <a 
                        href="/resume.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 border border-pink-600 text-pink-600 rounded-md hover:bg-pink-600 hover:text-white transition-colors"
                    >
                        Resume
                    </a>
                </li>
            </ul>
            
            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10 cursor-pointer p-2 hover:bg-[#112240] rounded-full transition-colors">
                {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
            </div>
            
            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-[#0a192f]/98 backdrop-blur-sm flex flex-col justify-center items-center transition-all duration-300 md:hidden ${
                nav ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
                <div className="absolute top-6 left-6">
                    <img src={logo} alt="Logo" className="w-12 h-12 rounded-full object-cover" />
                </div>
                <ul className="space-y-8 mb-10">
                    {navLinks.map(link => (
                        <li key={link.id} className="text-center">
                            <Link 
                                onClick={closeNav}
                                to={link.id} 
                                smooth={true} 
                                duration={500}
                                className="text-3xl font-medium hover:text-pink-500 transition-colors px-8 py-2"
                            >
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                
                <div className="flex space-x-6 mt-8">
                    {socialLinks.map((social, index) => (
                        <a 
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 rounded-full ${social.color} hover:scale-110 transition-transform`}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
            
            {/* Social icons - side panel */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-30">
                <ul>
                    {socialLinks.map((social, index) => (
                        <li 
                            key={index}
                            className={`w-[160px] h-[50px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 ${social.color} rounded-r-md mb-1`}
                        >
                            <a 
                                className='flex justify-between items-center w-full text-white pl-6 pr-2'
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.name} {social.icon}
                            </a>
                        </li>
                    ))}
                    <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-r-md">
                        <a 
                            className='flex justify-between items-center w-full text-white pl-6 pr-2'
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume <BsFillPersonLinesFill size={22} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;