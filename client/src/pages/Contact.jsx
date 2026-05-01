import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center gap-10 py-10 md:py-20'>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] rounded-lg shadow-md' src={assets.contact_img || 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop'} alt="contact" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our Store</p>
          <p className='text-gray-500'>507003 vdo's colony <br /> Telangana Khammam, India</p>
          <p className='text-gray-500'>Email: admin@grocerGo</p>
          <p className='font-semibold text-lg text-gray-600'>Customer Helpline (Orders & Support)</p>
          <p className='text-gray-500'>Having issues with your order? We're here to help!</p>
          <p className='text-gray-500 font-medium text-primary text-base'>Helpline: +91 098798653</p>
          <p className='text-gray-500'>Available: Mon-Sat (9:00 AM - 5:00 PM)</p>
          <button onClick={() => navigate('/jobs')} className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 rounded-md shadow-sm'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
