import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactIcon from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import GitHub from '../assets/github.png'
import Node from '../assets/node.png'
import Mongo from '../assets/mongo.png'
import FireBase from '../assets/firebase.png'
import AWS from '../assets/aws.png'

const Skills = () => {
  const skills = [
    { img: HTML, name: 'HTML', category: 'frontend' },
    { img: CSS, name: 'CSS', category: 'frontend' },
    { img: JavaScript, name: 'JavaScript', category: 'frontend' },
    { img: ReactIcon, name: 'React', category: 'frontend' },
    { img: Tailwind, name: 'Tailwind', category: 'frontend' },
    { img: GitHub, name: 'GitHub', category: 'tools' },
    { img: Node, name: 'Node.js', category: 'backend' },
    { img: Mongo, name: 'MongoDB', category: 'backend' },
    { img: FireBase, name: 'Firebase', category: 'backend' },
    { img: AWS, name: 'AWS', category: 'backend' }
  ];
  
  return (
    <div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-24 pb-16'>
            <div className='mb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 py-1'>Skills</p>
                <p className='py-6 text-lg'>These are the technologies I've worked with:</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center'>
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg p-4 bg-[#112240] flex flex-col items-center justify-center h-32 group'
                    >
                        <img 
                            className='w-16 mx-auto group-hover:scale-110 transition-transform duration-300' 
                            src={skill.img} 
                            alt={`${skill.name} icon`} 
                        />
                        <p className='mt-3 font-medium'>{skill.name}</p>
                        <span className={`text-xs mt-1 px-2 py-1 rounded-full ${
                            skill.category === 'frontend' 
                                ? 'bg-pink-800/30 text-pink-300' 
                                : skill.category === 'backend' 
                                ? 'bg-blue-800/30 text-blue-300' 
                                : 'bg-green-800/30 text-green-300'
                        }`}>
                            {skill.category}
                        </span>
                    </div>
                ))}
            </div>
            
            <div className='mt-12 text-center'>
                <p className='text-xl font-semibold mb-4'>Always learning and expanding my skillset</p>
                <div className='w-full bg-gray-700/30 h-2 rounded-full overflow-hidden'>
                    <div className='bg-gradient-to-r from-pink-500 to-purple-500 h-full rounded-full w-[85%] animate-pulse'></div>
                </div>
                <p className='text-sm text-gray-400 mt-2'>Continuous learning progress</p>
            </div>
        </div>
    </div>
  )
}

export default Skills