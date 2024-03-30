import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-speed=".1" className='w-full py-20 rounded-tr-3xl rounded-tl-3xl bg-teal-800 text-zinc-100  overflow-hidden'>
        <div className="text py-4  border-t-2 border-b-2 border-zinc-300 flex justify-start items-center">
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:15}} className="MarqueeText pr-10 text-[14rem] whitespace-nowrap font-semibold leading-none tracking-tighter uppercase">We Are Ochii Designes Company</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:15}} className="MarqueeText pr-10 text-[14rem] whitespace-nowrap font-semibold leading-none tracking-tighter uppercase">We Are Ochii Designes Company</motion.h1>
        </div>

    </div>
  )
}

export default Marquee