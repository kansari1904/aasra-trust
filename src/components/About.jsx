import React from 'react'
import img2 from '../assets/mariageMoney.jpeg'
import { Heart } from 'lucide-react'

const About = () => {
  return (
      <div className='w-full min-h-[calc(100vh-64px)]'>
          <div className="w-full bg-white flex flex-wrap items-center justify-center gap-2 mt-7 px-2 overflow-hidden">

              {/* Left Shape */}
              <div className="w-20 h-36 sm:w-24 sm:h-44 rounded-full overflow-hidden rotate-[25deg]">
                  <img
                      src={img2}
                      alt=""
                      className="w-full h-full object-cover -rotate-[25deg] scale-150"
                  />
              </div>

              {/* Middle Shape */}
              <div className="w-24 h-44 sm:w-28 sm:h-52 rounded-full overflow-hidden rotate-[25deg] z-10">
                  <img
                      src={img2}
                      alt=""
                      className="w-full h-full object-cover -rotate-[25deg] scale-150"
                  />
              </div>

              {/* Right Shape */}
              <div className="w-20 h-36 sm:w-24 sm:h-44 rounded-full overflow-hidden rotate-[25deg]">
                  <img
                      src={img2}
                      alt=""
                      className="w-full h-full object-cover -rotate-[25deg] scale-150"
                  />
              </div>

          </div>
          <div className='flex flex-col items-center'>
            <h1 className='mt-3 font-bold text-2xl'>Who we are?</h1>
            <p className='text-center text-slate-600 mt-3'>
                 laborum tenetur blanditiis eos iusto nulla adipisci?
                Repellendus quia aperiam eum, cum doloremque, sapiente necessitatibus vel reiciendis nemo in tempora! A facilis voluptatibus, aut repudiandae quam eum mollitia praesentium nulla laboriosam quod minus, culpa molestias saepe!
            </p> 
              <button
                  className="relative flex items-center gap-2 bg-[#0A5C36] hover:bg-[#199058] text-white text-sm lg:text-lg font-semibold px-5 py-2.5 rounded-full hover:translate-x-3 transition-all duration-300 shadow-sm hover:shadow-md hover:cursor-pointer mt-5"
              >
                  <Heart
                      className='lg:w-4 lg:h-4'
                      size={14} fill="white" />
                  Contact us
              </button>
              <p className='mt-3 text-slate-600'>
                +91 8936866389
              </p>
              <p className='mt-1 text-slate-600'>
                  +91 8936866389
              </p>
          </div>
          

        {/* <div className='  bg-amber-500 flex justify-center items-center'>
           <img className='w-100 h-75' src={img2} alt="img" />
        </div> */}

    </div>
  )
}

export default About