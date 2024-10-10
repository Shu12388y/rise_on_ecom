import React from 'react'
import Image from 'next/image'
import book from '../assets/book.png'
import finance from '../assets/finance.png'

const Services = () => {
  return (
    <div className='max-w-[1200px] mx-auto' id='about'>
        <h1 className='text-white text-6xl max-w-[320px] font-semibold mx-auto text-center mb-4 p-4'>
             <span className="text-orange-400">Services</span>
        </h1>
        <div className='grid grid-cols-8 gap-6 place-items-center' >

            <div className='w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-105 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={book} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>E-Commerce Platform Registration</h2>
                        <p className='text-lg text-white/70 mt-2'> We handle registrations on all major e-commerce platforms for you, hassle-free.</p>
                    </div>
                </div>
            </div>

            <div className='w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-110 duration-300'>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                <div className='flex flex-row p-6'>
                    <Image src={book} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Multi-Category Product Listings</h2>
                        <p className='text-lg text-white/70 mt-2'> Get your products listed in multiple categories, across all e-commerce channels.</p>
                    </div>
                    
                </div>
            </div>

            <div className='w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-110 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={book} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Product Photography & Visual Design</h2>
                        <p className='text-lg text-white/70 mt-2'> High-quality shoots and custom graphics to make your listings stand out.</p>
                    </div>
                </div>
            </div>

            <div className='w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-105 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={book} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Ratings & Reviews Management</h2>
                        <p className='text-lg text-white/70 mt-2'>Generate, track, and manage reviews to build customer trust and loyalty.</p>
                    </div>
                </div>
            </div>

            <div className='w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-105 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div> 
                <div className='flex flex-row p-6'>
                    <Image src={book} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Inventory & Warehouse Optimization</h2>
                        <p className='text-lg text-white/70 mt-2'>  Set up and manage your inventory with efficient, scalable warehouse options.</p>
                    </div>
                </div>
            </div>

            <div className='w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-110 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={finance} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>GST & Financial Management</h2>
                        <p className='text-lg text-white/70 mt-2'> Seamless management of GST filings, accounts, and financial compliance.</p>
                    </div>
                </div>
            </div>
            <div className='w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-110 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={book} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Social Media & Storefront Management</h2>
                        <p className='text-lg text-white/70 mt-2'> Launch and manage your social media pages and online stores with ease.</p>
                    </div>
                </div>
            </div>
            <div className='w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-105 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={book} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Custom ECommerce Website Development</h2>
                        <p className='text-lg text-white/70 mt-2'> Build and maintain a branded e-commerce site tailored to your needs.</p>
                    </div>
                </div>
            </div>
            <div className='w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-110 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={book} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Food Vendor Onboarding & Management</h2>
                        <p className='text-lg text-white/70 mt-2'> Complete onboarding and management for food vendors on delivery platforms.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Services