import React from 'react'
import bgphoto from '../assets/main.png'
import { Heart } from 'lucide-react'

const Main = () => {
    return (
        <div
            style={{ backgroundImage: `url(${bgphoto})` }}
            className='w-full min-h-[calc(100vh-68px)] 
            bg-cover bg-[60%_center] lg:bg-center bg-no-repeat flex items-center justify-center'
        >
            <div className='flex flex-col items-start text-left  max-w-2xl px-4 py-12 lg:py-16 text-white'>
                <p className='text-sm font-semibold text-white/80'>
                    बे-सहारों का सहारा,
                </p>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3'>
                    AASRA Foundation  <span className='text-blue-400'>Baghaura</span>
                </h1>
                <p className='text-sm font-semibold leading-relaxed mb-3 '>
                    AASRA Foundation is a non-profit organization dedicated to providing support and assistance to the homeless and underprivileged individuals in our community. We strive to create a safe and nurturing environment where those in need can find shelter, food, and hope for a better future.
                </p>
                <button
                    className="relative flex items-center gap-2 bg-[#0A5C36] hover:bg-[#199058] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                >
                    <Heart size={14} fill="white" />
                    Donate Now
                </button>

            </div>
        </div>
    )
}

export default Main