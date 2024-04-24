import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
function About() {
  const [email,setEmail] = useState("");
  const handle = (e) =>{
    e.preventDefault();

    if(email ==="")
    {
        toast.error("Please Enter Your Email");
    }
    else if(!email.includes("@gmail.com") )
    {
      toast.error("Enter a valid Mail")
    }
    else{
      toast.success("Login Successfully! Welcome")
    }
  }


  return (
    <>
 <div>
  &lt;&gt;
  <div className="container my-24 mx-auto md:px-6">
    <section className="mb-32">
      <div className="container mx-auto text-center lg:text-left xl:px-32">
        <div className="flex grid items-center lg:grid-cols-2">
          <div className="mb-12 lg:mb-0">
            <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
              <h2 className="mb-8 text-3xl font-bold">Enjoy the moment</h2>
              <p className="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                soluta corporis voluptate ab error quam dolores doloremque,
                quae consectetur.
              </p>
              <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
                <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-2 h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Best team
                </p>
                <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-2 h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Best quality
                </p>
                <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-2 h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Best experience
                </p>
              </div>
              <p className="mb-0 text-neutral-500 dark:text-neutral-300">
                In ac turpis justo. Vivamus auctor quam vitae odio feugiat
                pulvinar. Sed semper ligula sed lorem tincidunt dignissim. Nam
                sed cursus lectus. Proin non rutrum magna. Proin gravida,
                justo et imperdiet tristique, turpis nisi viverra est, nec
                posuere ex arcu sit amet erat. Sed a dictum sem. Duis pretium
                condimentum nulla, ut aliquet erat auctor sed. Aenean
                facilisis neque id ligula maximus scelerisque. Nunc sed velit
                rhoncus, interdum dolor at, lacinia lacus. Proin eleifend
                viverra posuere. Ut commodo risus lacus, ac scelerisque quam
                aliquam dictum. Etiam dignissim pulvinar eros eget auctor.
                Quisque congue turpis quis libero ullamcorper imperdiet.
                Vivamus a orci maximus, dignissim ligula a, congue dui. Morbi
                et lectus sit amet neque luctus viverra.
              </p>
            </div>
          </div>
          <div>
            <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/117.jpg" className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
<div className="h-[400px] w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.479728130728!2d76.07337127421897!3d26.856495462506437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dbfd2559fcb53%3A0x754293780d50d808!2sHarimohan%20Rambabu%20Modi%20Utility%20Shop!5e0!3m2!1sen!2sin!4v1709941815047!5m2!1sen!2sin"
              className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none  lg:rounded-bl-lg" frameBorder="0"
              ></iframe>
          </div>



</>
  )
}

export default About