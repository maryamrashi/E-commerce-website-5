import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <main>
      <div className="text-center mt-8">
                  
                  {/* Flex container to hold all images horizontally */}
                  <div className="flex justify-center mt-8 space-x-8 space-y-8">
      
                      {/* First Image */}
                      <div className="relative w-[239px] h-[615px] left-8 mt-8">
                          <Image
                              src="/women1.jpg"
                              alt="girl-pic"
                              width={239}  // Fixed width
                              height={615} // Fixed height
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
                              src="/women2.jpg"
                              alt="girl-pic"
                              width={239}  // Fixed width
                              height={427} // Fixed height
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
       src="/women3.jpg"
         alt="girl-pic"
        width={239}  // Fixed width
        height={427} // Fixed height
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
       src="/women23.jpg"
         alt="girl-pic"
        width={239}  // Fixed width
        height={427} // Fixed height
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
                  
                  {/* Flex container to hold all images horizontally */}
                  <div className="flex justify-center mt-8 space-x-8 space-y-8">
      
                      {/* First Image */}
                      <div className="relative w-[239px] h-[615px] left-8 mt-8">
                          <Image
                              src="/womengeans4.jpg"
                              alt="girl-pic"
                              width={239}  // Fixed width
                              height={615} // Fixed height
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
                              src="/womengeans5.jpg"
                              alt="girl-pic"
                              width={239}  // Fixed width
                              height={427} // Fixed height
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
       src="/womengeans6.jpg"
         alt="girl-pic"
        width={239}  // Fixed width
        height={427} // Fixed height
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
       src="/womengeans45.jpg"
         alt="girl-pic"
        width={239}  // Fixed width
        height={427} // Fixed height
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
                  
                  {/* Flex container to hold all images horizontally */}
                  <div className="flex justify-center mt-8 space-x-8 space-y-8">
      
                      {/* First Image */}
                      <div className="relative w-[239px] h-[615px] left-8 mt-8">
                          <Image
                              src="/womenshirt7.jpg"
                              alt="girl-pic"
                              width={239}  // Fixed width
                              height={615} // Fixed height
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
                              src="/womenshirt8.jpg"
                              alt="girl-pic"
                              width={239}  // Fixed width
                              height={427} // Fixed height
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
       src="/womenshirt9.jpg"
         alt="girl-pic"
        width={239}  // Fixed width
        height={427} // Fixed height
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
       src="/womenshirt78.jpg"
         alt="girl-pic"
        width={239}  // Fixed width
        height={427} // Fixed height
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
                  
                  {/* Flex container to hold all images horizontally */}
                  <div className="flex justify-center mt-8 space-x-8 space-y-8">
      
                      {/* First Image */}
                      <div className="relative w-[239px] h-[615px] left-8 mt-8">
                          <Image
                              src="/womenjumpsuit10.jpg"
                              alt="girl-pic"
                              width={239}  // Fixed width
                              height={615} // Fixed height
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
                              src="/womenjumpsuit12.jpg"
                              alt="girl-pic"
                              width={239}  // Fixed width
                              height={427} // Fixed height
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
       src="/womenjumpsuit11.jpg"
         alt="girl-pic"
        width={239}  // Fixed width
        height={427} // Fixed height
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
       src="/womenjumpsuit1112.jpg"
         alt="girl-pic"
        width={239}  // Fixed width
        height={427} // Fixed height
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
                  
                  {/* Flex container to hold all images horizontally */}
                  <div className="flex justify-center mt-8 space-x-8 space-y-8">
      
                      {/* First Image */}
                      <div className="relative w-[239px] h-[615px] left-8 mt-8">
                          <Image
                              src="/womencardigon13.jpg"
                              alt="girl-pic"
                              width={239}  // Fixed width
                              height={615} // Fixed height
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
                              src="/womencardigon15.jpg"
                              alt="girl-pic"
                              width={239}  // Fixed width
                              height={427} // Fixed height
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
       src="/womencardigon14.jpg"
         alt="girl-pic"
        width={239}  // Fixed width
        height={427} // Fixed height
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
       src="/womencardigon1314.jpg"
         alt="girl-pic"
        width={239}  // Fixed width
        height={427} // Fixed height
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

export default page
