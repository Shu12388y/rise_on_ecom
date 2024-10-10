'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import cursor from "../assets/icon1.png"
import lightning from "../assets/icon2.png"
import profilepic from '../assets/profilepic.png'

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
        
        <div className='absolute rounded-[50%] w-[3000px] h-[1300px] bg-black top-[500px] left-[50%] -translate-x-1/2
        bg-[radial-gradient(closest-side,#000_80%,#2B1942)]'>

        </div>
        <div className='relative'>
            <div className='text-4xl font-bold text-center'>
                <h1 className='text-8xl text-[#98B4CE]'>Rise On Ecom</h1>
                <h1 className='text-[#E48A57]'>Simplifying commerce & Scaling beyond limits</h1>

            </div>
            <motion.div className="absolute left-[100px] top-[00px]" 
            drag>
                <Image src={cursor} height="190" width="190" alt="cursor" className="" draggable="false"/>
            </motion.div>

            <motion.div className="absolute right-[180px] top-[00px]" 
            drag>
                <Image src={lightning} height="100" width="100" alt="message" className="" draggable="false"/>
            </motion.div>
        
            <p className='text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80 '>
            To enable every seller to seamlessly transition and excel in the online marketplace, with scalable solutions that cater to their personalized e-commerce needs.

            </p>
            {/* <motion.div className="" drag> */}
                <Image src={profilepic} alt='my pic' className='h-auto w-auto mx-auto' />
            {/* </motion.div> */}
        </div>


    </div>
  )
}

export default Hero