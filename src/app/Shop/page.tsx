"use client"; // Add this line at the top
import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import { MdFormatListBulleted } from "react-icons/md";
import { useState } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';
const Shop = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <div className='bg-white '>
        <div className='ml-5 mt-5'>
          <div className='flex items-center justify-between'>
            {/* Shop Heading */}
            <h1 className='font-bold text-gray-800 mt-9 text-3xl ml-32'>Shop</h1>
            <div className='flex items-center space-x-4 mr-20 mt-16'>
              <Link href="/" className='text-gray-800 font-bold hover:text-blue-600 text-1xl '>Home</Link>
              < MdArrowForwardIos className='text-gray-400' />
              <Link href="/Shop" className='text-gray-400 font-bold hover:text-blue-500 text-1xl ml-10 mr-20'>Shop</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10 px-5 bg-white'>
  <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 ml-24 mr-24'>
    {/* Image 1 */}
    <Image 
      src="/col-md-4.png" 
      alt="Image 1" 
      width={205} 
      height={223} 
      className='object-cover' 
    />
    {/* Image 2 */}
    <Image 
      src="/col-md-4 (1).png" 
      alt="Image 2" 
      width={205} 
      height={223} 
      className='object-cover' 
    />
    {/* Image 3 */}
    <Image 
      src="/col-md-4 (2).png" 
      alt="Image 3" 
      width={205} 
      height={223} 
      className='object-cover' 
    />
    {/* Image 4 */}
    <Image 
      src="/col-md-4 (3).png" 
      alt="Image 4" 
      width={205} 
      height={223} 
      className='object-cover' 
    />
    {/* Image 5 */}
    <Image 
      src="/col-md-4 (4).png" 
      alt="Image 5" 
      width={205} 
      height={223} 
      className='object-cover' 
    />
  </div>
</div>


      {/* New Heading and Buttons */}
      <div className="flex items-center justify-between mt-20 px-5 ">
        <h2 className="font-bold text-gray-500 ml-28">Showing all 12 results</h2>
        {/* Views and Icon Section */}
      <div className="ml-5 mt-5">
      <div className="flex items-center text-gray-500 mb-5 font-bold">
          Views: 
          <button className="ml-8 p-2 border  border-gray-500 rounded-lg hover:bg-gray-300">
            <IoGrid className="text-gray-800" />
          </button>




          <div className="relative"> {/* Make the parent container relative */}
      <button
        onClick={toggleDropdown}
        className="ml-8 p-2 border border-gray-500 rounded-lg hover:bg-gray-400"
      >
        <MdFormatListBulleted className="text-gray-800" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul>
            <li>
              <Link href="/men" className="block px-4 py-2 text-gray-800 font-black hover:bg-slate-500 bg-sky-500">
                MEN
              </Link>
            </li>
            <li>
              <Link href="/women" className="block px-4 py-2 text-gray-800 font-black hover:bg-fuchsia-800 bg-fuchsia-500">
                WOMEN
              </Link>
            </li>
            <li>
              <Link href="/kids" className="block px-4 py-2 text-gray-800 font-black hover:bg-orange-600 bg-orange-400">
                KIDS
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
        
        





        </div>
      </div>
        
        <div className="flex space-x-4 mr-10">
          {/* Popularity Button with Icon */}
          <button className="flex items-center text-black font-semibold bg-slate-100 hover:text-blue-500 px-4 py-2 border border-gray-400 rounded-lg">
            Popularity
            <IoIosArrowDown className="ml-2 font-bold" />
          </button>
             
          {/* FILTER Button */}
          <button className="text-white font-semibold bg-sky-500 hover:text-black px-4 py-3   rounded-lg">
            FILTER
          </button>
        </div>
      </div>



      <div className='mt-24 ml-10 mr-10 px-5 bg-white'>
  <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-16 ml-24 mr-24'>
    {/* Image 2 */}
    <Image 
      src="/fa-brands-1.png" 
      alt="Image 2" 
      width={153} 
      height={34} 
      className='object-cover' 
    />
    {/* Image 3 */}
    <Image 
      src="/fa-brands-2.png" 
      alt="Image 3" 
      width={83} 
      height={59} 
      className='object-cover' 
    />
    {/* Image 4 */}
    <Image 
      src="/fa-brands-3.png" 
      alt="Image 4" 
      width={102} 
      height={75} 
      className='object-cover' 
    />
    {/* Image 5 */}
    <Image 
      src="/fa-brands-4.png" 
      alt="Image 5" 
      width={151} 
      height={42} 
      className='object-cover' 
    />
    {/* Image 6 */}
    <Image 
      src="/fa-brands-5.png" 
      alt="Image 5" 
      width={103.68} 
      height={61.75} 
      className='object-cover' 
    />
    {/* Image 1 */}
    <Image 
      src="/Vector.png" 
      alt="Image 1" 
      width={75.75} 
      height={71.86} 
      className='object-cover' 
    />
  </div>
</div>





<div className="text-center mt-8">
                                      <p className="text-2xl text-white mt-2">Featured Products</p>
                                      <h2 className="text-2xl font-bold text-white mt-3">BESTSELLER PRODUCTS</h2>
                                      {/* Flex container to hold all images horizontally */}
                                      <div className="flex justify-center mt-8 space-x-8 space-y-8">
                          
                                          {/* First Image */}
                                          <div className="relative w-[239px] h-[615px] left-8 mt-8">
                                              <Image
                                                  src="/next1.jpg"
                                                  alt="girl-pic"
                                                  width={239}  // Fixed width
                                                  height={300} // Fixed height
                                                  style={{ height: '440px', objectFit: 'cover' }}
                                                  className="object-cover left-32 "
                                              />
                                              <h1 className='mt-5 text-1xl font-bold text-gray-700' > Graphic Design</h1>
                                              <p className='mt-2  font-bold text-gray-500'>English Department</p>
                                              <div className='flex justify-center mt-1 space-x-2 space-y-4 font-bold'>
                                              <p className='mt-4 text-1xl font-bold text-gray-400'>$16.48 </p>
                                              <p className='mt-4 text-1xl font-bold'style={{ color: 'rgb(35, 133, 109,1)' }}> $6.48</p>
                                              </div>
                                              {/* Container for circles */}
                          <div className="flex justify-center mt-4 space-x-2">
                            {/* Circle 1 */}
                            <div className='w-5 h-5 rounded-full 'style={{ backgroundColor: 'rgb(35, 166, 240,1)' }}></div>
                          
                            {/* Circle 2 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(35, 133, 109,1)' }}></div>
                          
                            {/* Circle 3 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(231, 124, 64,1)' }}></div>
                          
                            {/* Circle 4 */}
                            <div className='w-5 h-5 rounded-full' style={{ backgroundColor: 'rgb(37, 43, 66,1)' }}></div>
                          </div>
                                          </div>
                          
                                          {/* Second Image */}
                                          <div className="relative w-[239px] h-[427px] mt-4 left-8">
                                              <Image
                                                  src="/next2.jpg"
                                                  alt="girl-pic"
                                                  width={239}  // Fixed width
                                                  height={300} // Fixed height
                                                  style={{ height: '440px',objectFit: 'cover' }}
                                                  className="object-cover left-32" 
                                              />
                                              <h1 className='mt-5 text-1xl font-bold text-gray-700' > Graphic Design</h1>
                                              <p className='mt-2  font-bold text-gray-500'>English Department</p>
                                              <div className='flex justify-center mt-1 space-x-2 space-y-4 font-bold'>
                                              <p className='mt-4 text-1xl font-bold text-gray-400'>$16.48 </p>
                                              <p className='mt-4 text-1xl font-bold'style={{ color: 'rgb(35, 133, 109,1)' }}> $6.48</p>
                                              </div>
                                              {/* Container for circles */}
                          <div className="flex justify-center mt-4 space-x-2">
                            {/* Circle 1 */}
                            <div className='w-5 h-5 rounded-full 'style={{ backgroundColor: 'rgb(35, 166, 240,1)' }}></div>
                          
                            {/* Circle 2 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(35, 133, 109,1)' }}></div>
                          
                            {/* Circle 3 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(231, 124, 64,1)' }}></div>
                          
                            {/* Circle 4 */}
                            <div className='w-5 h-5 rounded-full' style={{ backgroundColor: 'rgb(37, 43, 66,1)' }}></div>
                          </div>
                                          </div>
                          
                                          {/* Fourth Image */}
                           <div className="relative w-[239px] h-[427px] mt-4" style={{ left: "32px" }}>
                           <Image
                           src="/next3.jpg"
                             alt="girl-pic"
                            width={239}  // Fixed width
                            height={300} // Fixed height
                           style={{ height: '440px',objectFit: 'cover' }}
                            className="object-cover "
                             />
                           <h1 className='mt-5 text-1xl font-bold text-gray-700' > Graphic Design</h1>
                             <p className='mt-2  font-bold text-gray-500'>English Department</p>
                            <div className='flex justify-center mt-1 space-x-2 space-y-4 font-bold'>
                              <p className='mt-4 text-1xl font-bold text-gray-400'>$16.48 </p>
                             <p className='mt-4 text-1xl font-bold'style={{ color: 'rgb(35, 133, 109,1)' }}> $6.48</p>
                            </div>
                                              {/* Container for circles */}
                          <div className="flex justify-center mt-4 space-x-2">
                            {/* Circle 1 */}
                            <div className='w-5 h-5 rounded-full 'style={{ backgroundColor: 'rgb(35, 166, 240,1)' }}></div>
                          
                            {/* Circle 2 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(35, 133, 109,1)' }}></div>
                          
                            {/* Circle 3 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(231, 124, 64,1)' }}></div>
                          
                            {/* Circle 4 */}
                            <div className='w-5 h-5 rounded-full' style={{ backgroundColor: 'rgb(37, 43, 66,1)' }}></div>
                          </div>
                                          
                                          </div>
                          
                          
                           {/* Fourth Image */}
                           <div className="relative w-[239px] h-[427px] mt-4" style={{ left: "32px" }}>
                           <Image
                           src="/next4.jpg"
                             alt="girl-pic"
                            width={239}  // Fixed width
                            height={300} // Fixed height
                           style={{ height: '440px',objectFit: 'cover' }}
                            className="object-cover "
                             />
                           <h1 className='mt-5 text-1xl font-bold text-gray-700' > Graphic Design</h1>
                             <p className='mt-2  font-bold text-gray-500'>English Department</p>
                            <div className='flex justify-center mt-1 space-x-2 space-y-4 font-bold'>
                              <p className='mt-4 text-1xl font-bold text-gray-400'>$16.48 </p>
                             <p className='mt-4 text-1xl font-bold'style={{ color: 'rgb(35, 133, 109,1)' }}> $6.48</p>
                            </div>
                                              {/* Container for circles */}
                          <div className="flex justify-center mt-4 space-x-2">
                            {/* Circle 1 */}
                            <div className='w-5 h-5 rounded-full 'style={{ backgroundColor: 'rgb(35, 166, 240,1)' }}></div>
                          
                            {/* Circle 2 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(35, 133, 109,1)' }}></div>
                          
                            {/* Circle 3 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(231, 124, 64,1)' }}></div>
                          
                            {/* Circle 4 */}
                            <div className='w-5 h-5 rounded-full' style={{ backgroundColor: 'rgb(37, 43, 66,1)' }}></div>
                          </div>
                                          
                                          </div>
                          
                                      </div>
                                  </div>
                                  <div className="text-center mt-8">
                                  <p className="text-2xl text-white mt-2">Featured Products</p>
                                  
                                      {/* Flex container to hold all images horizontally */}
                                      <div className="flex justify-center mt-8 space-x-8 space-y-8">
                          
                                          {/* First Image */}
                                          <div className="relative w-[239px] h-[615px] left-8 mt-8">
                                              <Image
                                                  src="/next5.jpg"
                                                  alt="girl-pic"
                                                  width={239}  // Fixed width
                                                  height={300} // Fixed height
                                                  style={{ height: '440px', objectFit: 'cover' }}
                                                  className="object-cover left-32 "
                                              />
                                              <h1 className='mt-5 text-1xl font-bold text-gray-700' > Graphic Design</h1>
                                              <p className='mt-2  font-bold text-gray-500'>English Department</p>
                                              <div className='flex justify-center mt-1 space-x-2 space-y-4 font-bold'>
                                              <p className='mt-4 text-1xl font-bold text-gray-400'>$16.48 </p>
                                              <p className='mt-4 text-1xl font-bold'style={{ color: 'rgb(35, 133, 109,1)' }}> $6.48</p>
                                              </div>
                                              {/* Container for circles */}
                          <div className="flex justify-center mt-4 space-x-2">
                            {/* Circle 1 */}
                            <div className='w-5 h-5 rounded-full 'style={{ backgroundColor: 'rgb(35, 166, 240,1)' }}></div>
                          
                            {/* Circle 2 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(35, 133, 109,1)' }}></div>
                          
                            {/* Circle 3 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(231, 124, 64,1)' }}></div>
                          
                            {/* Circle 4 */}
                            <div className='w-5 h-5 rounded-full' style={{ backgroundColor: 'rgb(37, 43, 66,1)' }}></div>
                          </div>
                                          </div>
                          
                                          {/* Second Image */}
                                          <div className="relative w-[239px] h-[427px] mt-4 left-8">
                                              <Image
                                                  src="/next6.jpg"
                                                  alt="girl-pic"
                                                  width={239}  // Fixed width
                                                  height={300} // Fixed height
                                                  style={{ height: '440px',objectFit: 'cover' }}
                                                  className="object-cover left-32" 
                                              />
                                              <h1 className='mt-5 text-1xl font-bold text-gray-700' > Graphic Design</h1>
                                              <p className='mt-2  font-bold text-gray-500'>English Department</p>
                                              <div className='flex justify-center mt-1 space-x-2 space-y-4 font-bold'>
                                              <p className='mt-4 text-1xl font-bold text-gray-400'>$16.48 </p>
                                              <p className='mt-4 text-1xl font-bold'style={{ color: 'rgb(35, 133, 109,1)' }}> $6.48</p>
                                              </div>
                                              {/* Container for circles */}
                          <div className="flex justify-center mt-4 space-x-2">
                            {/* Circle 1 */}
                            <div className='w-5 h-5 rounded-full 'style={{ backgroundColor: 'rgb(35, 166, 240,1)' }}></div>
                          
                            {/* Circle 2 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(35, 133, 109,1)' }}></div>
                          
                            {/* Circle 3 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(231, 124, 64,1)' }}></div>
                          
                            {/* Circle 4 */}
                            <div className='w-5 h-5 rounded-full' style={{ backgroundColor: 'rgb(37, 43, 66,1)' }}></div>
                          </div>
                                          </div>
                          
                                          {/* Fourth Image */}
                           <div className="relative w-[239px] h-[427px] mt-4" style={{ left: "32px" }}>
                           <Image
                           src="/next7.jpg"
                             alt="girl-pic"
                            width={239}  // Fixed width
                            height={300} // Fixed height
                           style={{ height: '440px',objectFit: 'cover' }}
                            className="object-cover "
                             />
                           <h1 className='mt-5 text-1xl font-bold text-gray-700' > Graphic Design</h1>
                             <p className='mt-2  font-bold text-gray-500'>English Department</p>
                            <div className='flex justify-center mt-1 space-x-2 space-y-4 font-bold'>
                              <p className='mt-4 text-1xl font-bold text-gray-400'>$16.48 </p>
                             <p className='mt-4 text-1xl font-bold'style={{ color: 'rgb(35, 133, 109,1)' }}> $6.48</p>
                            </div>
                                              {/* Container for circles */}
                          <div className="flex justify-center mt-4 space-x-2">
                            {/* Circle 1 */}
                            <div className='w-5 h-5 rounded-full 'style={{ backgroundColor: 'rgb(35, 166, 240,1)' }}></div>
                          
                            {/* Circle 2 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(35, 133, 109,1)' }}></div>
                          
                            {/* Circle 3 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(231, 124, 64,1)' }}></div>
                          
                            {/* Circle 4 */}
                            <div className='w-5 h-5 rounded-full' style={{ backgroundColor: 'rgb(37, 43, 66,1)' }}></div>
                          </div>
                                          
                                          </div>
                          
                          
                           {/* Fourth Image */}
                           <div className="relative w-[239px] h-[427px] mt-4" style={{ left: "32px" }}>
                           <Image
                           src="/next8.jpg"
                             alt="girl-pic"
                            width={239}  // Fixed width
                            height={300} // Fixed height
                           style={{ height: '440px',objectFit: 'cover' }}
                            className="object-cover "
                             />
                           <h1 className='mt-5 text-1xl font-bold text-gray-700' > Graphic Design</h1>
                             <p className='mt-2  font-bold text-gray-500'>English Department</p>
                            <div className='flex justify-center mt-1 space-x-2 space-y-4 font-bold'>
                              <p className='mt-4 text-1xl font-bold text-gray-400'>$16.48 </p>
                             <p className='mt-4 text-1xl font-bold'style={{ color: 'rgb(35, 133, 109,1)' }}> $6.48</p>
                            </div>
                                              {/* Container for circles */}
                          <div className="flex justify-center mt-4 space-x-2">
                            {/* Circle 1 */}
                            <div className='w-5 h-5 rounded-full 'style={{ backgroundColor: 'rgb(35, 166, 240,1)' }}></div>
                          
                            {/* Circle 2 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(35, 133, 109,1)' }}></div>
                          
                            {/* Circle 3 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(231, 124, 64,1)' }}></div>
                          
                            {/* Circle 4 */}
                            <div className='w-5 h-5 rounded-full' style={{ backgroundColor: 'rgb(37, 43, 66,1)' }}></div>
                          </div>
                                          
                                          </div>
                          
                                      </div>
                                  </div>
                                  <div className="text-center mt-8">
                                  <p className="text-2xl text-white mt-2">Featured Products</p>
                                  
                                      {/* Flex container to hold all images horizontally */}
                                      <div className="flex justify-center mt-8 space-x-8 space-y-8">
                          
                                          {/* First Image */}
                                          <div className="relative w-[239px] h-[615px] left-8 mt-8">
                                              <Image
                                                  src="/next9.jpg"
                                                  alt="girl-pic"
                                                  width={239}  // Fixed width
                                                  height={300} // Fixed height
                                                  style={{ height: '440px', objectFit: 'cover' }}
                                                  className="object-cover left-32 "
                                              />
                                              <h1 className='mt-5 text-1xl font-bold text-gray-700' > Graphic Design</h1>
                                              <p className='mt-2  font-bold text-gray-500'>English Department</p>
                                              <div className='flex justify-center mt-1 space-x-2 space-y-4 font-bold'>
                                              <p className='mt-4 text-1xl font-bold text-gray-400'>$16.48 </p>
                                              <p className='mt-4 text-1xl font-bold'style={{ color: 'rgb(35, 133, 109,1)' }}> $6.48</p>
                                              </div>
                                              {/* Container for circles */}
                          <div className="flex justify-center mt-4 space-x-2">
                            {/* Circle 1 */}
                            <div className='w-5 h-5 rounded-full 'style={{ backgroundColor: 'rgb(35, 166, 240,1)' }}></div>
                          
                            {/* Circle 2 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(35, 133, 109,1)' }}></div>
                          
                            {/* Circle 3 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(231, 124, 64,1)' }}></div>
                          
                            {/* Circle 4 */}
                            <div className='w-5 h-5 rounded-full' style={{ backgroundColor: 'rgb(37, 43, 66,1)' }}></div>
                          </div>
                                          </div>
                          
                                          {/* Second Image */}
                                          <div className="relative w-[239px] h-[427px] mt-4 left-8">
                                              <Image
                                                  src="/next10.jpg"
                                                  alt="girl-pic"
                                                  width={239}  // Fixed width
                                                  height={300} // Fixed height
                                                  style={{ height: '440px',objectFit: 'cover' }}
                                                  className="object-cover left-32" 
                                              />
                                              <h1 className='mt-5 text-1xl font-bold text-gray-700' > Graphic Design</h1>
                                              <p className='mt-2  font-bold text-gray-500'>English Department</p>
                                              <div className='flex justify-center mt-1 space-x-2 space-y-4 font-bold'>
                                              <p className='mt-4 text-1xl font-bold text-gray-400'>$16.48 </p>
                                              <p className='mt-4 text-1xl font-bold'style={{ color: 'rgb(35, 133, 109,1)' }}> $6.48</p>
                                              </div>
                                              {/* Container for circles */}
                          <div className="flex justify-center mt-4 space-x-2">
                            {/* Circle 1 */}
                            <div className='w-5 h-5 rounded-full 'style={{ backgroundColor: 'rgb(35, 166, 240,1)' }}></div>
                          
                            {/* Circle 2 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(35, 133, 109,1)' }}></div>
                          
                            {/* Circle 3 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(231, 124, 64,1)' }}></div>
                          
                            {/* Circle 4 */}
                            <div className='w-5 h-5 rounded-full' style={{ backgroundColor: 'rgb(37, 43, 66,1)' }}></div>
                          </div>
                                          </div>
                          
                                          {/* Fourth Image */}
                           <div className="relative w-[239px] h-[427px] mt-4" style={{ left: "32px" }}>
                           <Image
                           src="/next11.jpg"
                             alt="girl-pic"
                            width={239}  // Fixed width
                            height={300} // Fixed height
                           style={{ height: '440px',objectFit: 'cover' }}
                            className="object-cover "
                             />
                           <h1 className='mt-5 text-1xl font-bold text-gray-700' > Graphic Design</h1>
                             <p className='mt-2  font-bold text-gray-500'>English Department</p>
                            <div className='flex justify-center mt-1 space-x-2 space-y-4 font-bold'>
                              <p className='mt-4 text-1xl font-bold text-gray-400'>$16.48 </p>
                             <p className='mt-4 text-1xl font-bold'style={{ color: 'rgb(35, 133, 109,1)' }}> $6.48</p>
                            </div>
                                              {/* Container for circles */}
                          <div className="flex justify-center mt-4 space-x-2">
                            {/* Circle 1 */}
                            <div className='w-5 h-5 rounded-full 'style={{ backgroundColor: 'rgb(35, 166, 240,1)' }}></div>
                          
                            {/* Circle 2 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(35, 133, 109,1)' }}></div>
                          
                            {/* Circle 3 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(231, 124, 64,1)' }}></div>
                          
                            {/* Circle 4 */}
                            <div className='w-5 h-5 rounded-full' style={{ backgroundColor: 'rgb(37, 43, 66,1)' }}></div>
                          </div>
                                          
                                          </div>
                          
                          
                           {/* Fourth Image */}
                           <div className="relative w-[239px] h-[427px] mt-4" style={{ left: "32px" }}>
                           <Image
                           src="/next12.jpg"
                             alt="girl-pic"
                            width={239}  // Fixed width
                            height={300} // Fixed height
                           style={{ height: '440px',objectFit: 'cover' }}
                            className="object-cover "
                             />
                           <h1 className='mt-5 text-1xl font-bold text-gray-700' > Graphic Design</h1>
                             <p className='mt-2  font-bold text-gray-500'>English Department</p>
                            <div className='flex justify-center mt-1 space-x-2 space-y-4 font-bold'>
                              <p className='mt-4 text-1xl font-bold text-gray-400'>$16.48 </p>
                             <p className='mt-4 text-1xl font-bold'style={{ color: 'rgb(35, 133, 109,1)' }}> $6.48</p>
                            </div>
                                              {/* Container for circles */}
                          <div className="flex justify-center mt-4 space-x-2">
                            {/* Circle 1 */}
                            <div className='w-5 h-5 rounded-full 'style={{ backgroundColor: 'rgb(35, 166, 240,1)' }}></div>
                          
                            {/* Circle 2 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(35, 133, 109,1)' }}></div>
                          
                            {/* Circle 3 */}
                            <div className='w-5 h-5 rounded-full ' style={{ backgroundColor: 'rgb(231, 124, 64,1)' }}></div>
                          
                            {/* Circle 4 */}
                            <div className='w-5 h-5 rounded-full' style={{ backgroundColor: 'rgb(37, 43, 66,1)' }}></div>
                          </div>
                                          
                                          </div>
                          
                                      </div>
                                  </div>
    </main>
  )
}

export default Shop
