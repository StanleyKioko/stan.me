import React from "react";
import { ReactTyped } from "react-typed";

const Resume = () => {
  return (
    <div name="resume" className="w-full min-h-screen bg-[#0a192f] pt-[80px]">
      <div className="bg-[#0a192f] text-gray-300 font-sans min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-[#112240] shadow-md p-8 rounded-xl">
          <header className="text-center">
            <h1 className="text-4xl font-bold text-pink-600">STARNLEY MWANGE</h1>
            <p className="text-md text-gray-400 mt-1">
              Nairobi, Kenya | +254 708 967 800 | mwangestanley02@gmail.com
            </p>
            <a
              href="https://github.com/StanleyKioko"
              className="text-pink-500 hover:text-pink-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/StanleyKioko
            </a>
          </header>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-300 border-b border-gray-700 pb-1 mb-4">
            <ReactTyped strings={["FULL-STACK WEB DEVELOPER TAILWIND CSS REACT FLASK CLOUD INFRASTRUCTURE"]} typeSpeed={10} backSpeed={50} loop />
            </h2>
            <p className="text-gray-400">
              Innovative and results-oriented Full Stack Developer with hands-on experience building clean, responsive, and scalable web applications. Skilled in frontend development using React.js and Tailwind CSS, and backend development with Flask, Django, and PostgreSQL. Proficient in REST API development, cloud deployment using Docker and AWS, and real-time messaging systems.
            </p>
          </section>

          <section className="mt-6">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">Core Competencies</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 list-disc pl-5 text-gray-300">
              <li>Frontend Development (React + Tailwind CSS)</li>
              <li>Backend Development (Flask / Django)</li>
              <li>REST APIs & Microservices</li>
              <li>Cloud Deployment (AWS, Docker)</li>
              <li>Firebase & Real-Time Messaging</li>
              <li>Database Modeling (SQL / NoSQL)</li>
              <li>Agile & Collaborative Development</li>
            </ul>
          </section>

          <section className="mt-6">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">Technical Skills</h3>
            <p className="text-gray-300"><strong className="text-gray-200">Languages & Frameworks:</strong> JavaScript (ES6), Python, HTML5, CSS3, React.js, Next.js, Flask, Django</p>
            <p className="text-gray-300"><strong className="text-gray-200">Styling & UI:</strong> Tailwind CSS, Bootstrap, CSS Modules</p>
            <p className="text-gray-300"><strong className="text-gray-200">Databases:</strong> PostgreSQL, MySQL, MongoDB, Firebase</p>
            <p className="text-gray-300"><strong className="text-gray-200">Cloud & DevOps:</strong> AWS (EC2, S3, RDS), Docker, Linux</p>
            <p className="text-gray-300"><strong className="text-gray-200">Tools & Others:</strong> Git, GitHub, WebSockets, CKAN, Power BI, Shell Scripting</p>
          </section>

          <section className="mt-6">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">Professional Experience</h3>

            <div className="mb-6">
              <h4 className="font-bold text-gray-200">Frontend & Backend Developer</h4>
              <p className="italic text-sm text-gray-400">Fourbic Limited | Nov 2024 – Present</p>
              <ul className="list-disc pl-5 text-gray-400 mt-2">
                <li>Improved user engagement by 35% through responsive React.js + Tailwind CSS dashboards.</li>
                <li>Reduced manual reporting by 50% with Flask-based REST APIs and PostgreSQL integration.</li>
                <li>Deployed services via Docker on AWS EC2, cutting infrastructure setup time by 60%.</li>
                <li>Implemented real-time data sync via WebSockets and Power BI, accelerating decisions by 25%.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-gray-200">Data Analyst / Web Integrator</h4>
              <p className="italic text-sm text-gray-400">GCS Ltd. | Sep 2023 – Present</p>
              <ul className="list-disc pl-5 text-gray-400 mt-2">
                <li>Reduced reporting time by 40% via dashboards built with PowerBI.</li>
                <li>Improved data reliability and sync efficiency using Python scripts and SQL integrations.</li>
                <li>Reduced backend data retrieval latency by 30% with Flask API optimization.</li>
                <li>Enhanced automation and data modeling with collaborative dev efforts.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-bold text-gray-200">Data Analytics Trainee</h4>
              <p className="italic text-sm text-gray-400">Primo Academy | Aug 2022 – Feb 2023</p>
              <ul className="list-disc pl-5 text-gray-400 mt-2">
                <li> Learned How to Use PowerBI for data visualization.</li>
                <li>Learned Machine Learning concepts and techniques.</li>
                <li>Contributed to ML pipeline design, improving prediction accuracy by 15%.</li>
                <li>Implemented data preprocessing and feature engineering for model training.</li>
              </ul>
            </div>
          </section>

          <section className="mt-6">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">Projects</h3>

            <div className="mb-4">
              <h4 className="font-bold text-gray-200">🧠 Child Trauma Prediction App</h4>
              <p className="text-gray-400">Flask + Firebase + Tailwind CSS + WebSockets</p>
              <ul className="list-disc pl-5 text-gray-400 mt-1">
                <li>Developed a real-time chat and prediction system for doctors and patients.</li>
                <li>Secured result handling and reduced miscommunication by 100%.</li>
                <li>Made Early-stage Trauma Detection Easy</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-200">📱 AI-Powered USSD Learning App</h4>
              <p className="text-gray-400">Flask + PostgreSQL + Tailwind CSS + Groq-API</p>
              <ul className="list-disc pl-5 text-gray-400 mt-1">
                <li>Developed a USSD learning app for rural learners, thus availing educational resources to the learners in the disadvantaged areas.</li>
                <li>Bridged the digital divide by providing offline access to learning materials.</li>
              </ul>
            </div>
          </section>

          <section className="mt-6">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">Education</h3>
            <p className="text-gray-300">BSc. Business and Information Technology – Dedan Kimathi University of Technology</p>
          </section>

          <section className="mt-6">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">Awards & Recognition</h3>
            <ul className="list-disc pl-5 text-gray-300">
              <li>🏆 Winner –  AI For the Future Hackathon (Hosted by Impact Africa 2025)</li>
            </ul>
          </section>
          
          <div className="mt-8 text-center">
            <a 
              href="resume.pdf" 
              download
              className="inline-block px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
            >
              Download Resume PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;