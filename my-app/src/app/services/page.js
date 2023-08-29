import React from 'react'
import Navbar from '../components/Navbar/page'
import Footer from "../components/Footer/page"

const page = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <h1 className="text-6xl uppercase my-20">Services</h1>
        <p className="text-3xl indent-4">Welcome to the Services page, where I offer a range of web development solutions tailored to meet your needs. As a skilled MERN Stack developer, I specialize in crafting dynamic and user-friendly applications. Here's how I can assist you:</p>
        <h1 className="text-6xl uppercase my-20"> 1. Custom Web Application Development</h1>
        <p className="text-3xl indent-4"> I create bespoke web applications from the ground up, focusing on functionality, performance, and user experience. Whether you need a robust enterprise solution or a sleek startup MVP, I'm here to turn your ideas into reality. </p>
        <h1 className="text-6xl uppercase my-20">2. Front-End Development</h1>
        <p className="text-3xl indent-4">I specialize in building captivating user interfaces using React, ensuring that your web application not only works flawlessly but also provides an engaging and intuitive experience for your users.</p>
        <h1 className="text-6xl uppercase my-20"> 3. Back-End Development</h1>
        <p className="text-3xl indent-4"> With Node.js and Express.js, I develop scalable and efficient back-end systems that power your web applications. From API development to server architecture, I've got the technical expertise to make it happen.</p>
        <h1 className="text-6xl uppercase my-20">4. Database Management </h1>
        <p className="text-3xl indent-4"> I work with MongoDB to design and implement databases that handle your data securely and efficiently. Whether it's structuring data for optimal performance or ensuring data integrity, I've got your back </p>
        <h1 className="text-6xl uppercase my-20"> 5. Web Application Optimization</h1>
        <p className="text-3xl indent-4">Is your web application running a bit slow? I specialize in identifying bottlenecks, optimizing code, and fine-tuning performance to ensure that your users enjoy a seamless and lightning-fast experience. </p>
        <h1 className="text-6xl uppercase my-20"> 6. Troubleshooting and Debugging</h1>
        <p className="text-3xl indent-4"> Encountering technical issues? I'm your problem-solving partner. I excel in diagnosing and resolving issues to ensure your web application is running smoothly at all times.</p>
        <h1 className="text-6xl uppercase my-20">7. Consultation and Collaboration</h1>
        <p className="text-3xl indent-4"> Beyond development, I'm here to consult and collaborate on your projects. Whether you're seeking advice on tech stacks, architectural decisions, or project planning, I'm ready to provide insights and guidance.</p>
        <h1 className="text-6xl uppercase my-20"> 8. Maintenance and Updates</h1>
        <p className="text-3xl indent-4"> Web development is an ongoing process. I offer maintenance and update services to keep your applications current, secure, and aligned with the latest industry trends.</p>
        <h1 className="text-6xl uppercase my-20">Ready to Get Started?</h1>
        <p className="text-3xl indent-4">I'm dedicated to delivering top-notch solutions that align with your goals. If you're looking for a MERN Stack developer who's passionate about creating exceptional web experiences, let's discuss how I can bring your vision to life.</p>
        <h1 className="text-6xl uppercase my-20">Contact Me to discuss your project, ask questions, or explore the possibilities. I'm excited to collaborate with you!</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default page
