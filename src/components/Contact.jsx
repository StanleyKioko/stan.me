import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate form submission (the actual submission will be handled by the form action)
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 3000);
      e.target.submit();
    }, 1000);
  };

  {/* Scroll Back to top/Home function*/}
  const scrollToTop = () => {
    const topElement = document.querySelector('[name="home"]');
    if (topElement){
      topElement.scrollIntoView({ behavior: 'smooth' });
    } else{
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div name="contact" className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <div className='max-w-[800px] w-full grid md:grid-cols-2 gap-8 my-16'>
        {/* Left side - Contact Info */}
        <div className='p-4'>
          <div className='pb-6'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 py-1'>Contact Me</p>
          </div>
          <p className='text-gray-300 py-4 text-lg'>Ready to discuss your project? Reach out to me through this form or directly via:</p>
          
          {/* Contact methods */}
          <div className='mt-8 space-y-6'>
            <div className='flex items-center space-x-4 text-gray-300'>
              <div className='bg-gradient-to-r from-pink-600 to-purple-500 p-3 rounded-lg'>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className='text-sm text-gray-400'>Email</p>
                <a href="mailto:mwangestanley02@gmail.com" className='hover:text-pink-400 transition-colors'>mwangestanley02@gmail.com</a>
              </div>
            </div>
            
            <div className='flex items-center space-x-4 text-gray-300'>
              <div className='bg-gradient-to-r from-pink-600 to-purple-500 p-3 rounded-lg'>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <div>
                <p className='text-sm text-gray-400'>Location</p>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
            
            <div className='flex items-center space-x-4 text-gray-300'>
              <div className='bg-gradient-to-r from-pink-600 to-purple-500 p-3 rounded-lg'>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <p className='text-sm text-gray-400'>Availability</p>
                <p>Open for freelance & full-time positions</p>
              </div>
            </div>
          </div>
          
          {/* Social links */}
          <div className='mt-12'>
            <p className='text-gray-400 mb-3 text-sm'>Connect with me on:</p>
            <div className='flex space-x-4'>
              <a href="https://github.com/StanleyKioko" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-pink-500 transition-colors'>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                </svg>
              </a>
              <a href="#linkedin" className='text-gray-300 hover:text-pink-500 transition-colors'>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#twitter" className='text-gray-300 hover:text-pink-500 transition-colors'>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Right side - Contact Form */}
        <div className='bg-[#112240] p-6 rounded-xl shadow-lg'>
          <h3 className='text-2xl font-semibold text-gray-300 mb-6'>Send me a message</h3>
          <form method="POST" action="https://getform.io/f/bqomlrob" className='flex flex-col w-full' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor="name" className='text-sm text-gray-400 block mb-2'>Your Name</label>
              <input 
                id="name"
                className='w-full bg-[#1e2a45] text-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all' 
                type="text" 
                placeholder='John Doe' 
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className='mb-4'>
              <label htmlFor="email" className='text-sm text-gray-400 block mb-2'>Email Address</label>
              <input 
                id="email"
                className='w-full bg-[#1e2a45] text-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all' 
                type="email" 
                placeholder='john@example.com' 
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className='mb-6'>
              <label htmlFor="message" className='text-sm text-gray-400 block mb-2'>Your Message</label>
              <textarea 
                id="message"
                className='w-full bg-[#1e2a45] text-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all' 
                name="message" 
                placeholder='Tell me about your project...'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`px-6 py-3 rounded-lg text-white font-medium flex items-center justify-center transition-all duration-300 ${
                isSending ? 'bg-gray-500 cursor-not-allowed' : isSent ? 'bg-green-600' : 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500'
              }`}
              disabled={isSending}
            >
              {isSending ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : isSent ? (
                <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : null}
              {isSending ? 'Sending...' : isSent ? 'Message Sent!' : "Let's Connect"}
            </button>
          </form>
        </div>
      </div>
      {/* Scroll to top button */}
       <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>
    </div>
  )
}

export default Contact