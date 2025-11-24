import { Link, Outlet, useLocation } from "react-router-dom";
import logoIcon from "/icons/logo.png"
import linkedinIcon from "/icons/linkedin.svg";
import githubIcon from "/icons/github.svg";
import mailIcon from "/icons/mail.svg";
import menuIcon from "/icons/menu.svg";
import weChatImg from "/images/weChat.jpg";
import whatsappImg from "/images/whatsapp.jpg";
import { useEffect, useState } from "react";
import WOW from "wow.js";


export default function RootLayout() {
     const { pathname } = useLocation();
     const [show, setShow] = useState(false);

     useEffect(() => { // Top in Render
          if (pathname != "/") window.scrollTo(0, 0);
     }, [pathname]);

     useEffect(() => {
          new WOW().init();
     }, [])

     return (
          <>
               <header className={`${show ? "bg-neutral-800" : "bg-transparent"} wow fadeInDown fixed flex flex-wrap justify-between items-center w-full backdrop-blur-sm xl:px-12 sm:px-6 px-4 xs:py-4 py-2 z-50 transition-all duration-700`}>
                    <Link to={`/`} className="flex items-center gap-1.5 uppercase font-bold tracking-wider xs:text-2xl text-xl"><img className="h-7 w-auto" src={logoIcon} alt="icon" /> morshed alam</Link>
                    <nav className={`${show ? "opacity-100 visible" : "opacity-0 invisible"} lg:relative absolute left-0 top-full lg:bg-transparent bg-neutral-800/50 lg:opacity-100 lg:visible lg:w-auto w-full lg:h-auto h-screen font-semibold xs:text-lg text-base z-40 sl-animated-xl`}>
                         <div onClick={() => { show ? setShow(false) : setShow(true) }} className="absolute inset-0 lg:hidden block w-full h-full z-20"></div>
                         <ul className={`${show ? "w-1/2" : "w-0"} sl-nav relative flex lg:flex-row flex-col item-center lg:w-auto lg:h-auto h-screen lg:bg-transparent bg-neutral-800 xl:gap-9 sm:gap-6 xs:gap-4 gap-3 lg:px-0 sm:px-6 px-4 lg:py-0 sm:py-4 z-30`}>
                              <li><Link to={`/`}><span className="font-black tracking-widest text-[#e31c25]">//</span>home</Link></li>
                              <li><a href={`/#about`}><span className="font-black tracking-widest text-[#e31c25]">//</span>about</a></li>
                              <li><a href={`/#expertise`}><span className="font-black tracking-widest text-[#e31c25]">//</span>expertise</a></li>
                              <li><a href={`/#work`}><span className="font-black tracking-widest text-[#e31c25]">//</span>work</a></li>
                              <li><a href={`/#experience`}><span className="font-black tracking-widest text-[#e31c25]">//</span>experience</a></li>
                              <li><Link to={`/contact`}><span className="font-black tracking-widest text-[#e31c25]">//</span>contact</Link></li>
                         </ul>
                    </nav>
                    <button onClick={() => { show ? setShow(false) : setShow(true) }} className="lg:hidden block"><img src={menuIcon} alt="" className="xs:scale-100 scale-90" /></button>
               </header>
ß
               <main className="relative">
                    <Outlet />
               </main>

               <footer className="sl-container text-center md:pb-10 xs:pb-6 pb-4">
                    <ul className="wow fadeIn flex flex-wrap justify-center sm:gap-4 gap-3 xs:mb-5 mb-3">
                         <li><a href="https://www.linkedin.com/in/morshedalamdev" className="block xs:w-10 w-8 xs:h-10 h-8 rounded-full border-2 border-sky-50 xs:p-2.5 p-1.5 hover:bg-neutral-700 hover:border-neutral-700 sl-animated-xl" target="_blank"><img src={linkedinIcon} alt="" className="h-full" /></a></li>
                         <li><a href="https://github.com/morshedalamdev" className="block xs:w-10 w-8 xs:h-10 h-8 rounded-full border-2 border-sky-50 xs:p-2.5 p-1.5 hover:bg-neutral-700 hover:border-neutral-700 sl-animated-xl" target="_blank"><img src={githubIcon} alt="" className="h-full" /></a></li>
                         <li><a href="mailto:morshedalamdev@outlook.com" className="block xs:w-10 w-8 xs:h-10 h-8 rounded-full border-2 border-sky-50 xs:p-2.5 p-1.5 hover:bg-neutral-700 hover:border-neutral-700 sl-animated-xl" target="_blank"><img src={mailIcon} alt="" className="h-full" /></a></li>
                    </ul>
                    <a href="/morshed_alam_resume.pdf" className="opacity-70 capitalize xs:mb-2 mb-1 hover:text-[#e31c25] sl-animated-xl">download resume</a>
                    <div className="wow fadeIn flex flex-wrap justify-center gap-3">
                         <img src={weChatImg} alt="" className="xs:w-20 w-16 rounded" />
                         <img src={whatsappImg} alt="" className="xs:w-20 w-16 rounded" />
                    </div>
               </footer>
          </>
     )
} 