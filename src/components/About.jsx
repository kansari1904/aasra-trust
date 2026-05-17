import React, { useState } from 'react'
import img2 from '../assets/mariageMoney.jpeg'
import { Heart } from 'lucide-react'

const About = () => {
    const [showMore, setShowMore] = useState(false);

    const text = `Aasra Foundation is a social welfare organization dedicated to supporting underprivileged and needy people through education, healthcare, environmental awareness, women empowerment, and community welfare initiatives. The foundation works with the vision of creating a compassionate and united society where every individual gets equal opportunities to live with dignity. Through various social campaigns, medical camps, awareness programs, and support activities for poor families and children, Aasra Foundation strives to bring positive change at the grassroots level.`;

  return (
      <div className='w-full min-h-[calc(100vh-64px)] flex flex-col  lg:flex-row justify-center items-center'>
          <div className="w-full lg:w-1/2 bg-white flex flex-wrap items-center justify-center gap-3 lg:gap-5 mt-7 px-2 overflow-hidden">

              {/* Left Shape */}
              <div className="w-20 h-36 sm:w-24 sm:h-44 lg:w-32 lg:h-80 rounded-full overflow-hidden rotate-[25deg]">
                  <img
                      src={img2}
                      alt=""
                      className="w-full h-full object-cover -rotate-[25deg] scale-150"
                  />
              </div>

              {/* Middle Shape */}
              <div className="w-24 h-44 sm:w-28 sm:h-52 lg:w-40 lg:h-95 rounded-full overflow-hidden rotate-[25deg] z-10">
                  <img
                      src={img2}
                      alt=""
                      className="w-full h-full object-cover -rotate-[25deg] scale-150"
                  />
              </div>

              {/* Right Shape */}
              <div className="w-20 h-36 sm:w-24 sm:h-44 lg:w-32 lg:h-80 rounded-full overflow-hidden rotate-[25deg]">
                  <img
                      src={img2}
                      alt=""
                      className="w-full h-full object-cover -rotate-[25deg] scale-150"
                  />
              </div>

          </div>
          <div className='w-full lg:w-1/2 flex flex-col items-center'>
            <h1 className='mt-3 font-bold text-2xl text-center'>Who we are?</h1>
              <p className='text-center text-slate-600 mt-3 px-4 max-w-xl'>
                  {showMore ? text : `${text.substring(0, 180)}...`}
              </p>

              <button
                  onClick={() => setShowMore(!showMore)}
                  className='text-[#0A5C36] font-semibold mt-2 hover:underline cursor-pointer'
              >
                  {showMore ? "Read Less" : "Read More"}
              </button> 
              <button
                  className="relative flex items-center gap-2 bg-[#0A5C36] hover:bg-[#199058] text-white text-sm lg:text-lg font-semibold px-5 py-2.5 rounded-full hover:translate-x-1 transition-all duration-300 shadow-sm hover:shadow-md hover:cursor-pointer mt-5"
              >
                  <Heart
                      className='lg:w-4 lg:h-4'
                      size={14} fill="white" />
                  Contact us
              </button>
              <div className='mt-3 text-slate-600 text-center'>
                  <p>+91 8936866389</p>
                  <p className='mt-1'>+91 8936866389</p>
              </div>
          </div>
          

        {/* <div className='  bg-amber-500 flex justify-center items-center'>
           <img className='w-100 h-75' src={img2} alt="img" />
        </div> */}

    </div>
  )
}

export default About