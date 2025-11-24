import locationIcon from "/icons/location.svg";
import globeIcon from "/icons/globe.svg";
import { useState } from "react";


export default function Collapse({ obj }) {
     const [show, setShow] = useState(false)


     return (
          <div className="wow fadeInUp overflow-hidden">
               <div onClick={() => { show ? setShow(false) : setShow(true) }} className="flex flex-wrap justify-between items-center bg-neutral-700 rounded font-semibold md:text-xl py-3 md:px-6 px-4 mb-4">
                    <h3>{obj.designation} @ {obj.company}</h3>
                    <p className="flex items-center">{obj.duration} <button className="xl:text-2xl text-xl xl:ml-6 md:ml-4 xs:ml-2 ml-1 hover:text-orange-400">+</button></p>
               </div>
               <div className={`${show ? "h-auto md:px-9 xs:px-6 px-4 md:py-6 py-4 md:mb-9 mb-6" : "h-0"} bg-neutral-800 rounded sm:space-y-4 space-y-2 sl-animated-xl`}>
                    <div className="flex items-center">
                         <img src={locationIcon} alt="" className="xs:h-4 h-3 w-fit xs:mr-2 mr-1" />
                         <span className="opacity-70 mr-6">{obj.location}</span>
                         <img src={globeIcon} alt="" className="xs:h-4 h-3 w-fit xs:mr-2 mr-1" />
                         <a href={`https://${obj.website}`} className="opacity-70" target="_blank">{obj.website}</a>
                    </div>
                    <p>{obj.description}</p>
                    {obj.keyword && <ul className="flex flex-wrap items-center sm:text-base">
                         {obj.keyword.map((word, index)=>(<li key={index} className="rounded-full bg-neutral-950/70 px-4 py-1 mr-2 mb-2">{word}</li>))}
                    </ul>}
               </div>
          </div>
     )
}