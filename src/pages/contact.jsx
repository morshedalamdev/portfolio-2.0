import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useRef } from 'react';


export default function Contact() {
     const form = useRef();
     const [show, setShow] = useState(false);
     const [response, setResponse] = useState(false);

     const sendEmail = (e) => {
          e.preventDefault();

          emailjs.sendForm('service_ikowjxz', 'template_oslmfgj', form.current, '-lnq7EZvFhuRWCBpO')
               .then(() => {
                    setShow(true);
                    setResponse(true);
                    e.target.reset();
               }, () => {
                    setShow(false);
                    setResponse(false);
               });
     };

     return (
          <section className="md:pt-28 xs:pt-20 py-14 md:px-6 sm:px-4 px-2">
               <h2 data-wow-duration="3s" className="wow fadeIn text-center font-bold md:text-4xl sm:text-3xl text-2xl mb-9">Let's Cook Something Together <span className="text-[#e31c25]">.</span></h2>
               <div className="lg:w-1/2 md:w-3/4 w-full mx-auto">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-wrap">
                         <div className="sm:w-1/2 w-full sm:pr-3 xl:mb-6 mb-4">
                              <label htmlFor="name">Name</label>
                              <input name="sender_name" id="name" type="text" className="bg-neutral-800 rounded xl:px-6 md:px-4 px-2 xl:py-4 md:py-2 py-1.5 mt-2 border border-neutral-700 hover:border-[#e31c25] focus:border-[#e31c25] sl-animated" required />
                         </div>
                         <div className="sm:w-1/2 w-full sm:pl-3 xl:mb-6 mb-4">
                              <label htmlFor="mail">Email</label>
                              <input name="sender_email" id="mail" type="text" className="bg-neutral-800 rounded xl:px-6 md:px-4 px-2 xl:py-4 md:py-2 py-1.5 mt-2 border border-neutral-700 hover:border-[#e31c25] focus:border-[#e31c25] sl-animated" required />
                         </div>
                         <div className="w-full xl:mb-6 mb-4">
                              <label htmlFor="message">Message</label>
                              <textarea name="sender_message" id="message" className="bg-neutral-800 rounded xl:px-6 md:px-4 px-2 xl:py-4 md:py-2 py-1.5 md:h-40 h-32 mt-2 border border-neutral-700 hover:border-[#e31c25] focus:border-[#e31c25] sl-animated" required></textarea>
                         </div>
                         <div className="w-full text-right">
                              <button className="xl:px-6 px-4 xl:py-3 py-2 rounded border-2 border-sky-50 hover:text-[#e31c25] hover:border-[#e31c25] sl-animated-xl">Send Message</button>
                         </div>
                    </form>
               </div>
               <div id="successMessage" onClick={() => { setShow(false) }} className={`${show ? "block" : "hidden"} fixed inset-0 w-full h-full flex justify-center items-center z-50`}>
                    <div className="max-w-md w-[95%] h-fit text-center bg-neutral-800 rounded border border-neutral-700 sm:py-6 py-4 sm:px-9 px-6">
                         <h2 className="lg:text-2xl sm:text-xl text-lg font-semibold tracking-widest uppercase sm:mb-2">{response ? <span className="text-[#e31c25]">Message send</span> : <span className="text-red-500">Message not send</span>}</h2>
                         <p>I will reply you as soon as possible.<br />Thank you!</p>
                    </div>
               </div>
          </section>
     )
}