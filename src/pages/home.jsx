import heroBg from "/images/hero-bg.png";
import banner1 from "/images/banner-1.png";
import banner2 from "/images/banner-2.png";
import reactIcon from "/icons/react.svg";
import nextIcon from "/icons/nextjs.svg";
import nodeIcon from "/icons/node.svg";
import expressIcon from "/icons/express.svg";
import mongodbIcon from "/icons/mongodb.svg";
import firebaseIcon from "/icons/firebase.svg";
import alpineIcon from "/icons/alpine-js.svg";
import sanityIcon from "/icons/sanity.svg";
import tailwindIcon from "/icons/tailwind.svg";
import gitIcon from "/icons/git.svg";
import vsIcon from "/icons/vs.svg";
import netlifyIcon from "/icons/netlify.svg";
import figmaIcon from "/icons/figma.svg";
import chromeIcon from "/icons/chrome.svg";
import msIcon from "/icons/ms.svg";
import aiIcon from "/icons/ai.svg";
import psIcon from "/icons/ps.svg";
import lrIcon from "/icons/lr.svg";
import Collapse from "../components/collapse";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Home() {
     const [projects, setProjects] = useState([])
     const [filterArray, setFilterArray] = useState([]);
     const [count, setCount] = useState({
          frontEnd: 0,
          backEnd: 0,
          fullStack: 0
     })
     const programArray = [
          { name: "Next", icon: nextIcon },
          { name: "React", icon: reactIcon },
          { name: "Alpine", icon: alpineIcon },
          { name: "Node", icon: nodeIcon },
          { name: "Express", icon: expressIcon },
          { name: "MongoDB", icon: mongodbIcon },
          { name: "Sanity", icon: sanityIcon },
          { name: "Firebase", icon: firebaseIcon },
          { name: "TailwindCSS", icon: tailwindIcon }
     ];
     const toolArray = [
          { name: "Git", icon: gitIcon },
          { name: "VS Code", icon: vsIcon },
          { name: "Netlify", icon: netlifyIcon },
          { name: "Figma", icon: figmaIcon },
          { name: "Chrome Dev", icon: chromeIcon }
     ];
     const designArray = [
          { name: "MS Office", icon: msIcon },
          { name: "illustrator", icon: aiIcon },
          { name: "Photoshop", icon: psIcon },
          { name: "Lightroom", icon: lrIcon },
     ];
     const experience = [
          { designation: "Web Developer", company: "Fiverr", website: "fiverr.com/tech_infiny", duration: "2021 - Present", location: "Remote", keyword: ["JavaScript", "TypeScript", "Next", "React", "Alpine", "Node", "Firebase", "TailwindCSS", "MongoDB", "Sanity", "Figma"], description: "I have been working as a freelance developer since 2019 locally. After leaving Spinner Tech, I start working as a freelance developer on Fiverr. And get chance to work on various projects with various developers." },
          { designation: "Intern", company: "Bangladesh Railway", website: "railway.gov.bd", duration: "2021 - 2022", location: "Chattogram, Bangladesh", keyword: ["Networking", "CTC", "MS Office"], description: "It's part of my Diploma course. I learn how an organization works and manages manpower. I got the opportunity to lead a team during the training period. I also learn about communication networks and media over there." },
          { designation: "Web Designer", company: "Spinner Tech Ltd", website: "spinnertech.dev", duration: "2021 - 2021", location: "Chattogram, Bangladesh", keyword: ["JavaScript", "JQuery", "Bootstrap", "Photoshop"], description: "In Spinner Tech Ltd, I explore myself. And learn to work together in a team. I also learn to handle projects on an IT farm. I enjoyed my 3 months with some awesome projects and teammates." },
     ]

     useEffect(() => {
          fetch(`/JSON/projects.JSON`)
               .then(res => res.json())
               .then(data => {
                    setProjects(data);
                    setFilterArray(data);

                    for (const property in count) {
                         const value = data.filter(project => project.keyword == property).length;
                         setCount((prevCount) => {
                              return { ...prevCount, [property]: value }
                         })
                    }
               })
     }, [])

     const filterProject = (filterKey) => {
          if (filterKey == "all") {
               setFilterArray(projects);
          } else {
               const filterProjects = projects.filter((project) => project.keyword == filterKey)
               setFilterArray(filterProjects);
               console.log(count);
          }
     }

     return (
          <>
               <section className="text-center h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${heroBg})` }}>
                    <div className="sl-container h-full flex flex-col justify-center">
                         <h2 data-wow-duration="3s" className="wow fadeIn font-black uppercase tracking-wide xl:text-7xl sm:text-5xl xs:text-3xl text-2xl xl:mb-6 sm:mb-4 mb-2">Web developer</h2>
                         <p data-wow-delay="1s" className="wow fadeIn xl:text-2xl sm:text-xl text-[#e31c25]"><span className="text-sky-50 opacity-70">Love to Play with codes in the arena of</span> JavaScript</p>
                    </div>
               </section>

               <section id="about" className="xl:pt-40 md:pt-28 sm:pt-20 xs:pt-16 pt-10">
                    <div className="sl-container grid md:grid-cols-2 grid-cols-1 items-center xl:gap-6 xs:gap-4 gap-2">
                         <div className="wow fadeInLeft">
                              <h1 className="font-bold tracking-wide xl:text-6xl sm:text-4xl xs:text-3xl text-2xl sm:mb-4 mb-2">Hi, I'm Morshed Alam <br /> Web Developer</h1>
                              <p className="xl:text-xl sm:text-lg text-[#e31c25] cursor-pointer">// <span className="text-sky-50 opacity-70 hover:opacity-100">Full-Stack Developer</span> // <span className="text-sky-50 opacity-70 hover:opacity-100">Python Fan</span> // <span className="text-sky-50 opacity-70 hover:opacity-100">JavaScript/TypeScript Expert</span></p>
                         </div>
                         <div className="wow fadeInRight sm:space-y-4 space-y-2">
                              <p>I'm working as a Web Developer since 2019. I have developed a strong understanding of Web Development and related Technology. I always tried to think out of the box & bring something creative through Hard Work. And love working with Team.</p>
                              <p>My expertise in Web Develop Technologies also includes <i>responsive design, cross-browser compatibility, and SEO-optimised code.</i> I take pride in staying up-to-date with the latest trends and best practices in Web Development to ensure that I can deliver top-quality work to my Clients.</p>
                         </div>
                    </div>
               </section>

               <section id="expertise" className="xl:py-40 md:py-28 sm:py-20 xs:py-16 py-10 bg-cover bg-bottom" style={{ backgroundImage: `url(${banner1})` }}>
                    <div className="sl-container xl:space-y-9 sm:space-y-6 space-y-4">
                         <div className="wow fadeIn text-center">
                              <span className="xl:text-xl sm:text-lg opacity-70 uppercase">A PROBLEM IS A CHANCE FOR ME TO DO MY BEST.</span>
                              <h2 className="font-bold tracking-wide xl:text-7xl sm:text-5xl xs:text-4xl text-3xl">Skills & Expertise</h2>
                         </div>
                         <div className="wow fadeInUp sm:w-2/3 text-center mx-auto space-y-2">
                              <p>The main area of expertise is Website Development (Client/Server side).</p>
                              <p>I'm well-versed in JavaScript and TypeScript and worked extensively with popular frameworks such as Next/React and Alpine JS. I have also had a great deal of experience working with Node and used databases like MongoDB and Firebase.</p>
                              <p>Visit my <a href="https://www.linkedin.com/in/morshedalamdev" className="text-[#e31c25] hover:underline sl-animated-xl" target="_blank">Linkedin</a> for more details.</p>
                         </div>
                         <div className="md:space-y-6">
                              <ul className="wow fadeInLeft flex flex-wrap justify-center mb-4">
                                   {programArray && programArray.map((item, index) => (
                                        <li key={index} className="xl:w-32 md:w-24 w-20 cursor-pointer text-center font-semibold sm:space-y-2 mb-4">
                                             <img src={item.icon} alt={item.name} className="w-fit xl:h-20 sm:h-14 h-10 mx-auto hover:opacity-75" />
                                             <h3>{item.name}</h3>
                                        </li>))}
                              </ul>
                              <ul className="wow fadeInRight flex flex-wrap justify-center mb-4">
                                   {toolArray && toolArray.map((item, index) => (
                                        <li key={index} className="xl:w-32 md:w-24 w-20 cursor-pointer text-center font-semibold sm:space-y-2 mb-4">
                                             <img src={item.icon} alt={item.name} className="w-fit xl:h-20 sm:h-14 h-10 mx-auto hover:opacity-75" />
                                             <h3>{item.name}</h3>
                                        </li>))}
                              </ul>
                              <ul className="wow fadeInLeft flex flex-wrap justify-center">
                                   {designArray && designArray.map((item, index) => (
                                        <li key={index} className="xl:w-32 md:w-24 w-20 cursor-pointer text-center font-semibold sm:space-y-2 mb-4">
                                             <img src={item.icon} alt={item.name} className="w-fit xl:h-20 sm:h-14 h-10 mx-auto hover:opacity-75" />
                                             <h3>{item.name}</h3>
                                        </li>))}
                              </ul>
                         </div>
                    </div>
               </section>

               <section id="work" className="xl:py-20 md:py-16 sm:py-10 py-5">
                    <div className="sl-container xl:space-y-12 md:space-y-9 space-y-6">
                         <div className="wow fadeIn text-center">
                              <span className="xl:text-xl sm:text-lg opacity-70 uppercase">EVERY PROJECT IS A NEW CHALLENGE.</span>
                              <h2 className="font-bold tracking-wide xl:text-7xl sm:text-5xl xs:text-4xl text-3xl">Projects & Work</h2>
                         </div>
                         <ul className="wow fadeInLeft flex flex-wrap md:gap-6 xs:gap-3 gap-2 font-semibold">
                              <li className="">Filter by</li>
                              <li><button onClick={() => { filterProject("all") }} className="group relative text-[#e31c25] cursor-pointer"><span className="absolute -top-3 -right-3 text-sm text-[#e31c25] opacity-70  group-hover:opacity-100 sl-animated-xl">{projects && projects.length < 9 ? `0${projects.length}` : projects.length}</span>// <span className="text-sky-50 opacity-70 hover:opacity-100 sl-animated-xl">All</span></button></li>
                              <li><button onClick={() => { filterProject("frontEnd") }} className="group relative text-[#e31c25] cursor-pointer"><span className="absolute -top-3 -right-3 text-sm text-[#e31c25] opacity-70  group-hover:opacity-100 sl-animated-xl">{count.frontEnd && count.frontEnd < 9 ? `0${count.frontEnd}` : count.frontEnd}</span>// <span className="text-sky-50 opacity-70 group-hover:opacity-100 sl-animated-xl">Front-End</span></button></li>
                              <li><button onClick={() => { filterProject("backEnd") }} className="group relative text-[#e31c25] cursor-pointer"><span className="absolute -top-3 -right-3 text-sm text-[#e31c25] opacity-70  group-hover:opacity-100 sl-animated-xl">{count.backEnd && count.backEnd < 9 ? `0${count.backEnd}` : count.backEnd}</span>// <span className="text-sky-50 opacity-70 hover:opacity-100 sl-animated-xl">Back-End</span></button></li>
                              <li><button onClick={() => { filterProject("fullStack") }} className="group relative text-[#e31c25] cursor-pointer"><span className="absolute -top-3 -right-3 text-sm text-[#e31c25] opacity-70  group-hover:opacity-100 sl-animated-xl">{count.fullStack && count.fullStack < 9 ? `0${count.fullStack}` : count.fullStack}</span>// <span className="text-sky-50 opacity-70 hover:opacity-100 sl-animated-xl">Full-Stack</span></button></li>
                         </ul>
                         <div className="flex flex-wrap justify-center">
                              {filterArray && filterArray.map((project, index) => (
                                   <Link to={`project/${project.projectID}`} key={index} className="wow fadeInUp group lg:w-1/3 md:w-1/2 md:px-4 mb-6">
                                        <div className="overflow-hidden rounded-t">{project.category == "Web App" ? <img src={project.thumbnail} alt="" className="xl:h-60 lg:h-40 md:h-60 w-fit mx-auto group-hover:scale-110 sl-animated-xl" /> : <img src={project.thumbnail} alt="" className="xl:h-60 lg:h-40 md:h-60 w-full group-hover:scale-110 sl-animated-xl" />}</div>
                                        <div className="bg-neutral-800 rounded-b xl:px-9 sm:px-6 px-4 xl:py-6 sm:py-4 py-2">
                                             <h3 className="font-bold xl:text-2xl text-xl">{project.name}</h3>
                                             <div className="relative h-6">
                                                  <h4 className="absolute opacity-70 group-hover:top-0 group-hover:opacity-0 group-hover:invisible sl-animated-xl">{project.category}</h4>
                                                  <span className="absolute opacity-0 invisible group-hover:top-0 group-hover:opacity-70 group-hover:visible hover:opacity-100 hover:text-[#e31c25] sl-animated-xl">Show Project -</span>
                                             </div>
                                        </div>
                                   </Link>
                              ))}
                         </div>
                    </div>
               </section>

               <section id="experience" className="xl:py-40 md:py-28 sm:py-20 xs:py-16 py-10 bg-cover bg-bottom" style={{ backgroundImage: `url(${banner2})` }}>
                    <div className="sl-container">
                         <div className="wow fadeIn text-center">
                              <span className="xl:text-xl sm:text-lg opacity-70 uppercase">all places I go try to give my best.</span>
                              <h2 className="font-bold tracking-wide xl:text-7xl sm:text-5xl xs:text-4xl text-3xl">Experience & Education</h2>
                         </div>
                         <div className="xl:w-2/3 space-y-2 xl:mt-12 sm:mt-9 mt-6 mx-auto">{experience && experience.map((item, index) => (<Collapse key={index} obj={item} />))}</div>
                         <div className="flex flex-wrap justify-center mt-6">
                              <div className="wow fadeInUp lg:w-1/3 md:w-1/2 w-full font-semibold px-2 mb-6">
                                   <div className="bg-neutral-700 rounded space-y-2 py-3 sm:px-6 px-4">
                                        <h3 className="xl:text-xl md:text-lg">Computer Science & Technology</h3>
                                        <h4 className="text-[#e31c25]">// <span className="text-sky-50 opacity-70">Wuhan Institute of Technology, China</span></h4>
                                        <p className="flex justify-between opacity-70"><span>2023 - 2027</span><span>Running</span></p>
                                   </div>
                              </div>
                              <div className="wow fadeInUp lg:w-1/3 md:w-1/2 w-full font-semibold px-2 mb-6">
                                   <div className="bg-neutral-700 rounded space-y-2 py-3 sm:px-6 px-4">
                                        <h3 className="xl:text-xl md:text-lg">Computer Science</h3>
                                        <h4 className="text-[#e31c25]">// <span className="text-sky-50 opacity-70">Universiti Teknologi PETRONAS, Malaysia</span></h4>
                                        <p className="flex justify-between opacity-70"><span>2022 - 2023</span><span>Drop</span></p>
                                   </div>
                              </div>
                              <div className="wow fadeInUp lg:w-1/3 md:w-1/2 w-full font-semibold px-2 mb-6">
                                   <div className="bg-neutral-700 rounded space-y-2 py-3 sm:px-6 px-4">
                                        <h3 className="xl:text-xl md:text-lg">Computer Technology</h3>
                                        <h4 className="text-[#e31c25]">// <span className="text-sky-50 opacity-70">Chittagong Polytechnic Institute, Bangladesh</span></h4>
                                        <p className="flex justify-between opacity-70"><span>2017 - 2021</span><span>3.51</span></p>
                                   </div>
                              </div>
                         </div>
                         <div className="wow fadeInDown flex lg:w-2/3 justify-between items-center bg-neutral-800 xl:px-9 sm:px-6 px-4 xl:py-12 sm:py-9 py-6 rounded xl:mt-40 md:mt-28 sm:mt-20 xs:mt-16 mt-10 mx-auto">
                              <div>
                                   <h2 className="font-black tracking-wider xl:text-4xl md:text-3xl sm:text-2xl text-xl">Start a project</h2>
                                   <p>Interested in working together? We should queue up a time to chat.</p>
                              </div>
                              <Link to={"/contact"} className="min-w-fit rounded-full border border-sky-50 xs:px-4 px-2 xs:py-2 py-1 ml-2 hover:text-[#e31c25] hover:border-[#e31c25] sl-animated-xl">Let's do this</Link>
                         </div>
                    </div>
               </section>
          </>
     )
}