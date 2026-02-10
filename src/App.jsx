import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextType from './TextType';
import './index.css'
import './full.css'
import Modal from './Modal.jsx';
import EduModal from './EduModal.jsx';
import CertModal from './CertModal.jsx';
import LanModal from './LanModal.jsx';
import DotGrid from './DotGrid';
import CountUp from './CountUp';
import vookstimg from './assets/vookst.png'
import taskflowsimg from './assets/taskflows.png'
import stoicbeansimg from './assets/stoicbeans.png'
import GithubInfo from './Githubinfo.jsx';


function App() {
  const [count, setCount] = useState(false)
  const [open, setOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

 

   

  return (
     <div className=" bg-c1 w-full min-h-screen ">


   <header className="navigation-header sticky top-5 z-[100]">
  <nav>
    <div 
      className="bg-c4 bg-opacity-80 backdrop-blur-sm shadow-lg navigation-items mx-auto flex justify-evenly py-3 text-xl text-white rounded-2xl md:w-[50%]"
      id="navigation-items"
    >
      <a href="#Home" className="px-4 py-2 rounded-lg hover:bg-c1 hover:text-textPrimary transition-all">Home</a>
      <a href="#About" className="px-4 py-2 rounded-lg hover:bg-c1 hover:text-textPrimary transition-all">About</a>
      <a href="#Projects" className="px-4 py-2 rounded-lg hover:bg-c1 hover:text-textPrimary transition-all">Projects</a>
      <a href="#Services" className="px-4 py-2 rounded-lg hover:bg-c1 hover:text-textPrimary transition-all">Services</a>
      <a href="#Contact Me" className="px-4 py-2 rounded-lg hover:bg-c1 hover:text-textPrimary transition-all">Contact Me</a>
    </div>
  </nav>
</header>
    
 <section
  id="Home"
  className="relative bg-c1  text-textPrimary grid grid-cols-1 md:grid-cols-2 md:px-32 md:w-full md:mx-auto  md:py-16 items-center overflow-hidden"
>


  {/* DOT GRID BACKGROUND */}
  <div className="absolute inset-0 -z-9">
    <DotGrid
      dotSize={5}
      gap={15}
      baseColor="#F7C29A"
      activeColor="#5C352C"
      proximity={120}
      shockRadius={250}
      shockStrength={5}
      resistance={750}
      returnDuration={1.5}
    />


  </div>



  {/* LEFT: TEXT */}
  <div className="relative z-10 flex flex-col space-y-5 text-left">
    <h6 className="text-sm bg-c4 text-c1 max-w-fit px-4 py-1 rounded-full">
      You're Best Choice
    </h6>

    <div>

      <h4 className="text-3xl font-bold leading-tight mb-2 animate-bounce">
      Hi, I&apos;m Ed Emeruwa
    </h4>

    <p className="text-lg font-medium font-serif">
      <TextType className="font-semibold" cursorCharacter="▎" />
    </p>
    
    </div>

    <p className="text-justify text-base leading-relaxed max-w-prose">
      Full-stack Web Designer and Developer with experience in both front-end
      and back-end development. Skilled in building responsive, user-focused
      interfaces and supporting them with reliable server-side functionality.
      Possesses moderate proficiency in Python and SQL for backend logic and
      database management, and is actively developing cybersecurity skills.
    </p>
    <hr className="bg-c3 border-c3 h-0.5" />
    <span className=' md:space-x-3'><a className='md:py-1 border-2 rounded-md border-c3 px-1.5 hover:bg-c4 hover:text-c1 hover:border-c4 cursor-pointer shadow-xl'>Hire Me</a><a className='md:py-1 bg-c4 text-c1 border-solid border-2 rounded-md border-c3 px-1.5 hover:bg-c1 hover:text-textPrimary hover:border-c1 cursor-pointer shadow-xl hover:inset-shadow-sm'>Dowload CV</a></span>
  </div>

   {/* RIGHT: IMAGE */}
  <div className="relative z-10 md:bg-[url('./assets/test_hs.png')] md:bg-contain bg-no-repeat bg-center w-full h-full">
 <div className="bg-[url('./assets/test_hs.png')] bg-contain bg-no-repeat bg-center w-full h-full"></div>


  </div>
</section>

  <section className="w-full bg-white px-5 py-10 sm:flex-wrap " id="About">
  <h3 className="text-c2 mb-6 text-2xl font-semibold">About Me</h3>
 <div className='grid grid-cols-1 md:grid-cols-2 md:px-16 items-center'>
  <div>
  <p className="mb-4 max-w-3xl text-left">
    Full-stack Web Designer and Developer with experience in both front-end
    and back-end development. Skilled in building responsive, user-focused
    interfaces and supporting them with reliable server-side functionality.
  </p>

  <p className="mb-10 max-w-3xl ">
    Full-stack Web Designer and Developer with experience in both front-end
    and back-end development. Skilled in building responsive, user-focused
    interfaces and supporting them with reliable server-side functionality.
  </p>
{/* Cards / Columns */}
<div className="w-full pt-6 ">
  <div className="flex flex-row gap-3 ">

    {/* Education */}
    <div onClick={() => setActiveModal("education")} className="border-2 md:w-5/12 border-c2 rounded-xl p-6 hover:shadow-xl transition-all duration-300 bg-white">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        Education
      </h3>
      <hr className="border-c2 border-t-2 mb-4" />
      <p className="text-gray-600 text-sm leading-relaxed">
        Associate Degree in  Web & Mobile Development
      </p>
    </div>

    {/* Certification */}
    <div  onClick={() => setActiveModal("certification")} className="border-2 md:w-4/12 border-c2 rounded-xl p-6 hover:shadow-xl transition-all duration-300 bg-white">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        Certification
      </h3>
      <hr className="border-c2 border-t-2 mb-4" />
      <p className="text-gray-600 text-sm leading-relaxed">
        Professional Certifications
      </p>
    </div>

    {/* Languages */}
    <div onClick={() => setActiveModal("languages")} className="border-2 md:w-3/12 border-c2 rounded-xl p-6 hover:shadow-xl transition-all duration-300 bg-white">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        Languages
      </h3>
      <hr className="border-c2 border-t-2 mb-4" />
      <p className="text-gray-600 text-sm leading-relaxed">
        JavaScript, Python, SQL, HTML/CSS


      
      </p>


    </div>
    <Modal 
        isOpen={activeModal}
        onClose={() => setActiveModal(null)}
        title = {activeModal== 'education' ? 'Education' : 
        activeModal== 'certification' ? 'Certification' :
        "Languages"}
      >

        {/* at && just mean iif the before statement us true render/ retun the model else falsd */}
        {activeModal === "education" && <EduModal />}
        {activeModal === "certification" && <CertModal />}
        {activeModal === "languages" && <LanModal />}

      </Modal>

    

  </div>
</div>


  </div>

  <div className="md: bg-[url('./assets/test_hs.png')] md:bg-stretch bg-no-repeat bg-center w-full h-full">

  </div>
  </div>

</section>


 
     <section className="Projects sm:space-y-32 py-12 bg-gradient-to-br from-c1  to-c2 space-y-4 text-left md:space-y-20 md:px-6">

          <div className="mx-auto max-w-5xl  ">
    <div className=" grid grid-cols-1 gap-12 text-center sm:grid-cols-3">

      {/* Stat 1 */}
      <div>
        <p
          className="mb-3 text-md font-medium uppercase tracking-widest text-textPrimary" 
         
        >
          Over
        </p>

        <span
          className="block text-5xl font-semibold leading-none"
          style={{ color: '#2B1815' }} // textPrimary
        >
          <CountUp
            from={0}
            to={15000}
            separator=","
            duration={1}
            startCounting={false}
          />+
        </span>

        <span
         className="mt-2 block text-md font-medium text-textPrimary"
        >
          lines of code
        </span>
      </div>

      {/* Stat 2 */}
      <div>
        <p
          className="mb-3 text-md font-medium uppercase tracking-widest text-textSecondary" 
         
        >
          About
        </p>

        <span
          className="block text-5xl font-semibold leading-none"
          style={{ color: '#2B1815' }}
        >
          <CountUp
            from={0}
            to={1200}
            separator=","
            duration={1}
            startCounting={false}
          />+
        </span>

        <span
         className="mt-2 block text-md font-medium text-textPrimary"
        >
          hours of work
        </span>
      </div>

      {/* Stat 3 */}
      <div>
        <p
          className="mb-3 text-md font-medium uppercase tracking-widest text-textSecondary" 
         
        >
          Approximately
        </p>

        <span
          className="block text-5xl font-semibold leading-none"
          style={{ color: '#2B1815' }}
        >
          <CountUp
            from={0}
            to={25}
            duration={0.5}
            startCounting={false}
          />+
        </span>

        <span
          className="mt-2 block text-md font-medium text-textPrimary"
          
        >
          projects built
        </span>
      </div>

    </div>
  </div>

      <h6 className="text-center text-4xl font-bold text-textPrimary" id="projects">My Projects</h6>

  <div className="flex flex-col md:flex-row items-center gap-8 ">

    
   
    <div className="flex flex-col w-full md:w-1/2 px-6">
      <h6 className=" text-lg bg-white text-c1 max-w-fit px-2 py-1 rounded-full font-semibold mb-2">
      M.E.R.N stack
    </h6>
      
      <h2 className="text-3xl font-bold mb-4 ">Taskflows</h2>
      <p className="text-xl leading-relaxed pr-0 md:pr-5 text-textPrimary">
        Streamline complex workflows with Taskflows’ powerful process automation platform. From task orchestration to performance tracking, we use intelligent systems to improve efficiency and clarity. Work with Taskflows to transform scattered operations into seamless, scalable flows. </p>
    </div>

    
     <a href="https://taskflows.org" className=" w-full md:w-1/2 flex justify-center  shadow-md transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl  hover:scale-105">
     <div >
      <img src={taskflowsimg} alt="Taskflows image" 
           className="w-full  object-cover rounded-lg shadow-lg" />
    </div>
     </a>
  </div>


  <div className="flex flex-col md:flex-row-reverse items-center gap-8">
    
    <div className="flex flex-col w-full md:w-1/2 px-6">
      <h6 className="text-lg bg-white text-c1 max-w-fit px-2 py-1 rounded-full font-semibold mb-2">
      HTML/CSS, JavaScript & Tailwind
    </h6>
      <h2 className="text-3xl font-bold mb-4">Vookst oil and gas</h2>
      <p className="text-xl leading-relaxed pr-0 md:pr-5 text-textPrimary">
       Build and maintain scalable energy platforms with Vookst.energy’s developer-driven solutions. From system architecture to data reliability, we focus on clean code, performance, and long-term maintainability. Developing with Vookst means turning complex energy data into stable, production-ready systems. </p> </div>

    
        <a href="https://vookst.energy" className="w-full md:w-1/2 flex justify-center  shadow-md transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl  hover:scale-105 ">
        <div >
      <img src={vookstimg} alt="Vookst energy" 
           className="w-full  object-contain rounded-lg shadow-lg" />
    </div>
        </a>

    
  </div>

  <div className="flex flex-col md:flex-row items-center gap-8">

    <div className="flex flex-col w-full md:w-1/2 px-6">
      <h6 className="text-lg bg-white text-c1 max-w-fit px-2 py-1 rounded-full font-semibold mb-2">
      HTML, CSS & React Js
    </h6>
      <h2 className="text-3xl font-bold mb-4">Stoic Beans</h2>
      <p className="text-xl leading-relaxed pr-0 md:pr-5 text-textPrimary">
  Developed a scalable energy platform using modern web technologies, with modular architecture and robust data pipelines. Implemented reliable APIs and clean, maintainable code to handle complex energy data, ensuring high performance, accuracy, and long-term stability. </p>
    </div>
      

      <a href="https://ed-emeruwa.github.io/StoicBeans/StoicBeans.html" className="w-full md:w-1/2 flex justify-center  shadow-md transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl  hover:scale-105">
        <div >
      <img src={stoicbeansimg} alt="Subsurface Services" 
           className="w-full  object-contain rounded-lg shadow-lg" />
    </div>
      </a>
    </div>
</section>

  

  <section className ="mb-64  bg-white" id="Services">
      <GithubInfo />
  </section>
  <section className ="mb-64 v" id="Contact Me">
    <div>Contact Me</div>
  </section>

   <footer className="bg-c4 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Ed Emeruwa</h3>
            <p className="text-gray-300 leading-relaxed">
              Full-stack developer crafting beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-c1">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#Home" className="text-gray-300 hover:text-c1 transition-colors">Home</a></li>
              <li><a href="#About" className="text-gray-300 hover:text-c1 transition-colors">About</a></li>
              <li><a href="#Projects" className="text-gray-300 hover:text-c1 transition-colors">Projects</a></li>
              <li><a href="#Services" className="text-gray-300 hover:text-c1 transition-colors">Services</a></li>
            </ul>
          </div>

       
         
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-c3 pt-6 text-center text-gray-400">
          <p>&copy; 2026 Ed Emeruwa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  
    
   
    </div>
  )
}

export default App
