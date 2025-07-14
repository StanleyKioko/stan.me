import React, { useState } from 'react'
import cars from '../assets/cars.png'
import stan from '../assets/stan.png'
import huru from '../assets/huru.png'
import blobe from '../assets/blobe.png'
import data from '../assets/data.png'

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const projects = [
    {
      id: 1,
      name: "Blobe Cars",
      image: cars,
      description: "A modern car dealership platform with search and filter functionality.",
      tech: ["React", "Tailwind CSS", "Firebase"],
      demoLink: "https://blobecars.netlify.app/",
      codeLink: "https://github.com/StanleyKioko/Blobe-Cars"
    },
    {
      id: 2,
      name: "Huru Spaces",
      image: huru,
      description: "Co-working space booking platform with real-time availability.",
      tech: ["Next.js", "MongoDB", "Stripe"],
      demoLink: "https://huru-hack.vercel.app/",
      codeLink: "https://github.com/StanleyKioko/Huru-Hack"
    },
    {
      id: 3,
      name: "Blobe Logistics",
      image: blobe,
      description: "Supply chain management solution for tracking deliveries.",
      tech: ["React", "Express", "Node.js"],
      demoLink: "https://data-deck-tau.vercel.app/",
      codeLink: "https://github.com/StanleyKioko/Data-Deck"
    },
    {
      id: 4,
      name: "Data Analytics",
      image: data,
      description: "Dashboard for visualizing and analyzing business metrics.",
      tech: ["React", "Chart.js", "Tailwind CSS"],
      demoLink: "https://blobestan.vercel.app/",
      codeLink: "https://github.com/StanleyKioko/React-Tailwind-Vite-Simple-front-end"
    }
  ];

  return (
    <div name='work' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1200px] mx-auto p-4 py-16 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 py-1'>Work</p>
                <p className='py-6 text-lg'>Here are some of my recent projects. Hover over each project to see more details.</p>
                <div className='flex flex-wrap gap-3 mb-8'>
                    <span className='text-sm bg-pink-900/30 text-pink-400 px-3 py-1 rounded-full border border-pink-800/50'>All Projects</span>
                    <span className='text-sm bg-[#112240] px-3 py-1 rounded-full hover:bg-pink-900/30 hover:text-pink-400 cursor-pointer transition-all'>Web Apps</span>
                    <span className='text-sm bg-[#112240] px-3 py-1 rounded-full hover:bg-pink-900/30 hover:text-pink-400 cursor-pointer transition-all'>Mobile</span>
                    <span className='text-sm bg-[#112240] px-3 py-1 rounded-full hover:bg-pink-900/30 hover:text-pink-400 cursor-pointer transition-all'>API</span>
                </div>
            </div>
            
            {/* Grid container for projects */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project, index) => (
                    <div 
                        key={project.id} 
                        className='relative group bg-[#112240] rounded-xl overflow-hidden shadow-xl shadow-[#040c16] h-[380px] transform transition-all duration-500 hover:-translate-y-2'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Project Image with Gradient Overlay */}
                        <div className='h-48 relative overflow-hidden'>
                            <div 
                                style={{ backgroundImage: `url(${project.image})` }} 
                                className='absolute inset-0 bg-cover bg-center h-full w-full transform transition-all duration-700 group-hover:scale-110'
                            ></div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[#112240] opacity-70'></div>
                        </div>
                        
                        {/* Project Info */}
                        <div className='p-5 flex flex-col justify-between h-[calc(380px-12rem)]'>
                            <div>
                                <h3 className='text-2xl font-bold text-white mb-2'>{project.name}</h3>
                                <p className='text-gray-400 text-sm mb-3'>{project.description}</p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tech.map((tech, i) => (
                                        <span 
                                            key={i} 
                                            className='text-xs px-2 py-1 bg-[#0a192f] rounded-md text-gray-300'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className='flex justify-between items-center'>
                                <div className='flex space-x-3'>
                                    <a 
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer" 
                                        className='flex items-center space-x-1 text-pink-400 hover:text-pink-300 transition-colors'
                                    >
                                        <span>Demo</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <a 
                                        href={project.codeLink} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='flex items-center space-x-1 text-pink-400 hover:text-pink-300 transition-colors'
                                    >
                                        <span>Code</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </a>
                                </div>
                                <span className={`h-2 w-2 rounded-full ${hoveredIndex === index ? 'bg-pink-500' : 'bg-gray-500'}`}></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* View All Projects Button */}
            <div className='flex justify-center mt-12'>
                <a 
                    href="https://github.com/StanleyKioko"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='group border-2 border-pink-600 px-6 py-3 flex items-center hover:bg-pink-600 transition-all duration-300 rounded-md'
                >
                    View All Projects
                    <span className='group-hover:rotate-90 duration-300 ml-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Work