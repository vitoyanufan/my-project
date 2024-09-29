import { div } from 'framer-motion/client';
import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black">
      <div className='px-6 md:px-0 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700
                        pt-4 flex justify-between items-center'>

            <h1 className='text-2x1 font-bold'>Vito Yanufan Ardi</h1>

            <div className='flex space-x-6 mt-4'>
                <a href="#" className='hover:text-gray-300'></a>
                    <FaLinkedin size={24} />
                <a href="#" className='hover:text-gray-300'></a>
                    <FaTwitter size={24} />
                <a href="#" className='hover:text-gray-300'></a>
                    <FaInstagram size={24} />
            </div>

        </div>
      </div>
  )
}

export default Footer