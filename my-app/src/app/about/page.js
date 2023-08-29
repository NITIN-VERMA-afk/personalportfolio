import React from "react";
import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex-col text-center my-24  container">
        <div className=" ">
          <img className="inline-block h-2/4 w-2/4 rounded-full ring-2 ring-white "
            src=" https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais "
            alt="web dev"
          ></img>
        </div>
        <div className=""> 
        
        <h1 className="text-6xl uppercase my-20">about me</h1>
        <p className="text-3xl indent-4">Hello there! I'm Nitin Verma, a passionate and dedicated Full Stack Developer with a flair for crafting dynamic and user-centric web applications. With a strong foundation in the MERN (MongoDB, Express.js, React, Node.js) stack, I thrive on transforming ideas into functional and elegant digital experiences.</p>
        <h2 className="text-6xl uppercase my-20"> my Journey</h2>
        <p className="text-3xl indent-4"> My journey in the world of web development began with a fascination for how lines of code could shape the online world. As I embarked on my educational path, I honed my skills in both front-end and back-end technologies. This journey allowed me to blend creativity with logic, resulting in innovative solutions that marry form and function seamlessly. </p>

        <h3 className="text-6xl uppercase my-20"> Why I Love What I Do </h3>
        <p className="text-3xl indent-4"> The ever-evolving nature of web development keeps me fueled with excitement. Whether it's staying up-to-date with the latest industry trends or diving into complex problem-solving, I find joy in every step of the process. I believe that each line of code has the potential to make a positive impact, and that belief drives me to push the boundaries of what's possible in the digital realm. </p>
        <h4 className="text-6xl uppercase my-20">What Sets Me Apart</h4>
        <p className="text-3xl indent-4">My dedication to clean, efficient code and a keen eye for detail set me apart in the competitive world of development. I'm not just a developer; I'm a problem solver, a collaborator, and a creator. I thrive on challenges and approach each project with enthusiasm, turning concepts into reality while ensuring a seamless user experience.</p>
        <h5 className="text-6xl uppercase my-20">lets connect</h5>
        <p className="text-3xl indent-4"> I'm not just about coding; I'm about building relationships and connections too. Whether you're a fellow developer, a potential collaborator, or someone looking to bring your digital ideas to life, I'm excited to connect and explore how we can work together to make the web an even better place.</p>
        <p className="text-3xl indent-4 mt-12"> Feel free to explore my portfolio to see some of the projects I've brought to fruition. Let's embark on this digital journey together!</p>
        <p className="text-3xl indent-4 mt-12">Feel free to customize this text to match your personal style and experiences. Good luck with your portfolio creation! </p>
       
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
