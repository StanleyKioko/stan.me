import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 px-4">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="pb-8 pl-4">
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right text-3xl sm:text-4xl font-bold">
                    <p className="leading-tight">Hi. I'm Starnley, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p className="text-lg leading-relaxed">I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. My journey in web development has equipped me with the skills to build user-friendly interfaces and robust back-end systems.</p>
                    
                    <div className="mt-4 flex flex-col sm:flex-row gap-4">
                        <a href="#work" className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 justify-center">
                            View Work
                        </a>
                        <a href="#contact" className="text-white bg-pink-600 border-2 border-pink-600 px-6 py-3 my-2 flex items-center hover:bg-transparent hover:border-white transition-all duration-300 justify-center">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;