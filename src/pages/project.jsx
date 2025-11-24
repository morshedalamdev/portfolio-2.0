import { useNavigate, useParams } from "react-router-dom";
import leftArrow from "/icons/left.svg";
import { useEffect, useState } from "react";


export default function Project() {
     const navigate = useNavigate();
     const { projectID } = useParams()
     const [project, setProject] = useState({});

     useEffect(() => {
          fetch(`/JSON/projects.JSON`)
               .then(res => res.json())
               .then(data => {
                    const project = data.find(project => project.projectID == projectID);
                    setProject(project);
               })
     }, [])


     return (
          <section className="md:py-20 xs:py-16 py-12">
               <div className="sl-container">
                    <button onClick={() => { navigate(-1) }} className="flex items-center justify-center sm:w-10 w-8 sm:h-10 h-8 rounded-full bg-neutral-800 md:mb-6 mb-4 hover:bg-neutral-700 sl-animated-xl"><img src={leftArrow} alt="" className="sm:h-6 h-5" /></button>
                    <h3 data-wow-delay="1s" className="wow fadeIn text-[#e31c25] capitalize font-semibold">// <span className="text-sky-50 opacity-70">{project.category}</span></h3>
                    <h2 data-wow-duration="3s" className="wow fadeIn lg:w-1/2 lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-bold tracking-wide">{project.name}</h2>
                    <div className="flex flex-wrap items-end justify-between lg:my-20 sm:my-12 xs:my-8 my-5">
                         <div className="wow fadeInLeft md:w-3/6 md:space-y-6 space-y-4 xs:mb-6 mb-4">
                              <p>{project.contribution}</p>
                              <p className="opacity-70">{project.description}</p>
                         </div>
                         <div className="wow fadeInRight md:w-2/6">
                              <div className="flex flex-wrap">
                                   <div className="lg:w-1/2 w-full lg:pr-8 xs:mb-6 mb-4">
                                        <p className="font-bold sm:pt-4 pt-2 border-t border-sky-50/70">Client</p>
                                        <h4 className="opacity-70 md:text-base">{project.client}</h4>
                                   </div>
                                   <div className="lg:w-1/2 w-full lg:pl-8 xs:mb-6 mb-4">
                                        <p className="font-bold sm:pt-4 pt-2 border-t border-sky-50/70">Technologies</p>
                                        {project.technology && <h4 className="opacity-70 md:text-base">{project.technology.map((tech, index) => (<span key={index}>{tech}, </span>))}</h4>}
                                   </div>
                              </div>
                              {project.liveLink && <a href={project.liveLink} target="_blank" className="group flex items-center gap-3 mt-2"><span className="group-hover:text-[#e31c25] sl-animated-xl">Open Project</span> <svg className="w-4 fill-sky-50 group-hover:fill-[#e31c25] group-hover:ml-2 sl-animated-xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a>}
                              {project.sourceCode && <a href={project.sourceCode} target="_blank" className="group flex items-center gap-3 mt-2"><span className="group-hover:text-[#e31c25] sl-animated-xl">Source Code</span> <svg className="w-4 fill-sky-50 group-hover:fill-[#e31c25] group-hover:ml-2 sl-animated-xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a>}
                         </div>
                    </div>
                    {project.category == "Web App" ? <div className="md:grid grid-cols-2 md:gap-6 md:space-y-0 xs:space-y-6 space-y-4">
                         {project.screenshot && project.screenshot.map((img, index) => (<img className="wow fadeInUp w-max" src={img} key={index} />))}
                    </div> : <div className="md:space-y-9 xs:space-y-6 space-y-4">
                         {project.screenshot && project.screenshot.map((img, index) => (<img className="wow fadeInUp" src={img} key={index} />))}
                    </div>}
               </div>
          </section>
     )
}