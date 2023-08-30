import React from 'react'
import Navbar from '../components/Navbar/page'
import Footer from "../components/Footer/page"

const page = () => {
  return (
    <div>
      <Navbar/>
       <div>
        <h1 className='text-3xl my-3'>skills</h1>
        <p className='text-1xl my-3'>Welcome to my Skills page, where I highlight the technologies and tools I've mastered throughout my journey as a MERN Stack developer. My diverse skill set empowers me to create innovative and impactful web applications. Here's an overview of what I bring to the table: </p>
        <h1 className='text-3xl my-3'> Front-End Development</h1>
        <h1 className='text-3xl my-3'>React</h1>
        <p className='text-1xl my-3'>Proficient in building dynamic user interfaces using React, harnessing the power of components, state management, and modern JavaScript libraries.</p>
        <h1 className='text-3xl my-3'>HTML & CSS: </h1>
        <p className='text-1xl my-3'>A deep understanding of semantic HTML5 and CSS3, ensuring elegant and responsive designs across devices.</p>
        <h1 className='text-3xl my-3'>Responsive design</h1>
        <p className='text-xl my-3'> Creating fluid and adaptable layouts that provide an optimal viewing experience on various screen sizes.</p>
        <h1 className='text-3xl my-3'>Back-End Development</h1>
        <p className='text-xl my-3'> Node.js: Building scalable and efficient server-side applications using Node.js, with a focus on asynchronous programming and event-driven architecture.</p>
        <p>Express.js: Crafting robust APIs and server routes using Express.js, enabling seamless communication between front-end and back-end.</p>
        <h1 className='text-3xl my-3'>Database Management</h1>
        <p className='text-xl my-3'>MongoDB: Designing, implementing, and optimizing MongoDB databases to handle data securely and efficiently, with a strong grasp of CRUD operations.</p>
        <h1 className='text-3xl my-3'>Web Development Tool</h1>
        <p className='text-xl my-3'> Version Control: Proficient in Git for managing code versions and collaborating effectively with other developers.</p>
        <p className='text-xl my-3'> Package Managers: Experience using npm to manage project dependencies and streamline development workflows.</p>
        <h1 className='text-3xl my-3'>Full Stack Development</h1>
        <p className='text-xl my-3'>MERN Stack: Expertise in developing full stack applications using the MERN (MongoDB, Express.js, React, Node.js) stack, enabling end-to-end solutions.</p>
        <p className='text-xl my-3'> API Integration: Integrating third-party APIs to enhance the functionality and features of web applications.</p>
        <h1 className='text-3xl my-3'>Problem Solving & Optimization</h1>
        <p className='text-xl my-3'>Debugging: Skilled in diagnosing and troubleshooting issues across the development stack, ensuring smooth performance.</p>
        <p className='text-xl my-3'>Performance Optimization: Identifying and addressing bottlenecks to improve application speed and efficiency.</p>
        <h1 className='text-3xl my-3'>Collaboration & Tools</h1>
        <p className='text-xl my-3'>Agile Methodology: Experience working in agile environments, participating in sprints, and collaborating within cross-functional teams.</p>
        <p className='text-xl my-3'>Communication: Strong communication skills for effective collaboration, requirement gathering, and client interaction.</p>
        <p className='text-xl my-3'>IDEs: Proficient in using IDEs like Visual Studio Code for efficient coding and debugging.</p>
        <h1 className='text-3xl my-3'>Continuous Learning</h1>
        <p className='text-xl my-3'>Staying Current: Dedicated to staying updated with the latest industry trends and technologies to deliver modern solutions.</p>
        <p className='text-xl my-3'>Online Learning: Enthusiastic about online learning platforms for continuous skill enhancement.</p>
        <h1 className='text-3xl my-3'>Let's Connect</h1>
        <p className='text-xl my-3'>My skill set is a culmination of continuous learning and hands-on experience. If you're interested in working together, collaborating on a project, or exploring how I can contribute to your development needs, feel free to Contact Me.</p>

       </div>
      <Footer/>
    </div>
  )
}

export default page
