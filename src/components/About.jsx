import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right text-4xl font-bold">
                    <p>Hi. I'm Starnley, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. My journey in web development has equipped me with the skills to build user-friendly interfaces and robust back-end systems.</p>
                </div>
            </div>
        </div>
      </div>
  )
}

export default About;
