import React from 'react'
import cars from '../assets/cars.png'
import stan from '../assets/stan.png'
import huru from '../assets/huru.png'
import blobe from '../assets/blobe.png'
import data from '../assets/data.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 py-4'>Work</p>
                <p className='py-6'>Here are some of my recent projects:</p>
            </div>
            {/* Grid container for projects */}
            <div
             className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Item*/}
                <div style={{ backgroundImage: `url(${cars})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 duration-500'>
                        <div>
                            <span className='text-2xl font-bold text-[#00df9a] tracking-wider'>
                                Blobe Cars

                            </span>
                            <div className='pt-8 text-center'>
                              <a href="https://blobecars.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo </button>
                                </a>  
                                <a href="https://github.com/StanleyKioko/Blobe-Cars">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Grid Item*/}
                <div style={{ backgroundImage: `url(${huru})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 duration-500'>
                        <div>
                            <span className='text-2xl font-bold text-[#00df9a] tracking-wider'>
                                Huru Spaces

                            </span>
                            <div className='pt-8 text-center'>
                              <a href="https://huru-hack.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo </button>
                                </a>  
                                <a href="https://github.com/StanleyKioko/Huru-Hack">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Grid Item*/}
                <div style={{ backgroundImage: `url(${blobe})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 duration-500'>
                        <div>
                            <span className='text-2xl font-bold text-[#00df9a] tracking-wider'>
                                Blobe Logistics

                            </span>
                            <div className='pt-8 text-center'>
                              <a href="https://data-deck-tau.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo </button>
                                </a>  
                                <a href="https://github.com/StanleyKioko/Data-Deck">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Grid Item*/}
                <div style={{ backgroundImage: `url(${data})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 duration-500'>
                        <div>
                            <span className='text-2xl font-bold text-[#00df9a] tracking-wider'>
                                Data Analytics

                            </span>
                            <div className='pt-8 text-center'>
                              <a href="https://blobestan.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo </button>
                                </a>  
                                <a href="https://github.com/StanleyKioko/React-Tailwind-Vite-Simple-front-end">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Work
