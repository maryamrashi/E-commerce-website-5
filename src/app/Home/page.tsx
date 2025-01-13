import Image from 'next/image'; 
import { LuClock3 } from "react-icons/lu";
import { GoGraph } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

 // Import Image component from Next.js

const  Home = () => {
    return (
      <main className="relative">  {/* Use relative positioning for the main container */}
                  {/* Content with specific height, width, padding, and gap */}
                  <div className="relative">
  {/* Image */}
  <Image 
    src="/1stpic.jpg" 
    width={2440} 
    height={716} 
    alt="girl-pic" 
    className="w-full h-auto object-cover"
  />

  {/* Content with specific height, width, padding, and gap */}
  <div className="absolute top-[46%] left-[16%] transform -translate-y-1/2 p-t-[112px] p-b-[112px] gap-[80px] text-left ">
    <p className="text-lg text-white mb-7 font-bold">SUMMER 2020</p>
    <h1 className="text-6xl font-bold text-white mb-9 whitespace-nowrap">NEW COLLECTION</h1>
    <p className="text-lg text-white mb-9 whitespace-nowrap font-bold">
      We know how large objects will act,
      <br />but things on a small scale.
    </p>
    <button className="bg-green-500 text-white py-3 px-8 rounded-md hover:bg-green-800 font-bold text-2xl">
      SHOP NOW
    </button>
  </div>
</div>

                  <div className="text-center mt-8">
                              <h2 className="text-2xl font-bold text-gray-900 mt-12">EDITOR'S PICK</h2>
                              <p className="text-1xl text-gray-600 mt-4 font-bold">Problems trying to resolve the conflict between</p>
                  
                              {/* Flex container to hold all images */}
                              <div className="flex flex-wrap justify-center mt-8 space-x-8 space-y-8">
                                  
                                  {/* First Image */}
                                  <div className="relative w-[509px] h-[500px] bottom-10" style={{ left: "90px" }}>
                                      <Image 
                                          src="/2ndpic.jpg" 
                                          width={509} 
                                          height={500} 
                                          alt="boy-pic" 
                                          style={{ height: '520px', objectFit: 'cover' }}
                                          className=" object-cover mt-8 left-36 bottom-20" 
                                      />
                                      <button className="absolute left-11 bottom-0 bg-white text-gray-800 py-3 px-20 font-bold text-1xl z-10">
                                          MEN
                                      </button>
                                  </div>
                  
                                  {/* Second Image */}
                                  <div className="relative w-[459px] h-[500px] bottom-10"style={{ left: "90px" }}>
                                      <Image 
                                          src="/3rdpic.jpg" 
                                          width={240} 
                                          height={500}
                                          alt="girl-pic" 
                                          //for increasing height
                                          style={{ height: '520px', objectFit: 'cover' }}
                                          className=" object-cover " 
                                      />
                                      <button className="absolute left-6 bottom-2 bg-white text-gray-800 py-3 px-8 font-bold text-1xl z-10">
                                          WOMEN
                                      </button>
                                  </div>
                                  
                                  {/* New Flex Container for Third, Fourth, and Fifth Images */}
                                  <div className="flex flex-col items-center ">
                                      {/* Third Image */}
                                      <div className="relative bottom-10" style={{ right: "120px" }}>
                                          <Image src="/4thpic.jpg" width={239} height={242} alt="girl-pic" className="" />
                                          <button className="absolute left-2 bottom-6 bg-white text-gray-800 py-3 px-8 font-bold text-1xl z-10">
                                              ACCESSORIES
                                          </button>
                                      </div>
                  
                                      {/* Fourth Image placed below the third */}
                                      <div className="relative mt-4 bottom-10" style={{ right: "120px" }}>
                                          <Image src="/5thpic.jpg" width={239} height={242} alt="girl-pic" className="" />
                                          <button className="absolute left-2 bottom-6 bg-white text-gray-800 py-3 px-8 font-bold text-1xl z-10">
                                              KIDS
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="text-center mt-8">
                                      <p className="text-2xl text-gray-600 mt-2">Featured Products</p>
                                      <h2 className="text-2xl font-bold text-gray-900 mt-3">BESTSELLER PRODUCTS</h2>
                                      <p className="text-1xl text-gray-600 mt-2 font-bold">Problems trying to resolve the conflict between</p>
                          
                                      {/* Flex container to hold all images horizontally */}
                                      <div className="flex justify-center mt-8 space-x-8 space-y-8">
                          
                                          {/* First Image */}
                                          <div className="relative w-[239px] h-[615px] left-8 mt-8">
                                              <Image
                                                  src="/6thpic.jpg"
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
                                                  src="/7thpic.jpg"
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
                           src="/8thpic.jpg"
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
                           src="/9thpic.jpg"
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
                        src="/10thpic.jpg"
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
                        src="/11thpic.jpg"
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
 src="/12thpic.jpg"
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
 src="/13thpic.jpg"
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
        <div className="relative mt-20" style={{ backgroundColor: 'rgb(35, 133, 109)', height: '100vh' }}>  {/* Use relative positioning for the main container */}
                    {/* Content with specific height, width, padding, and gap */}
                    <div className="absolute top-[30%] left-[197.5px] transform -translate-y-1/2 p-t-[112px] p-b-[112px] gap-[80px] h-[48px] w-[197.5px]">
                        <p className="text-2xl text-white mb-7 font-semibold">SUMMER 2020</p>
                        <h1 className="text-6xl font-bold text-white mb-9 mr-9 -scroll-mt-4 whitespace-nowrap">Vita Classic <br />Product </h1>
                        <p className="text-lg text-white mb-9 mr-9 whitespace-nowrap ">
                            We know how large objects will act,
                            <br />but things on a small scale, We know
                        </p>
                        
                        {/* Align price and button horizontally */}
        <div className="flex items-center mt-4 space-x-6">
            <p className="text-2xl font-bold text-white" style={{ margin: 0 }}>$16.48</p>
            <Link href="/cart"> {/* Change "/cart" to your target page path */}
      <button className="bg-green-500 text-white py-2 px-7 rounded-md hover:bg-green-900 font-bold text-lg whitespace-nowrap">
        ADD TO CART
      </button>
    </Link>
        </div>
        
                    </div>
        
                    {/* Image with resizing and positioning */}
                    <div className="absolute  right-32 bottom-0">
                        <Image 
                            src="/14thpic.png" 
                            width={470}  // Reduced width for resizing the image
                            height={520}  // Adjusted height to maintain the aspect ratio
                            alt="girl-pic" 
                            style={{ objectFit: 'cover' }} 
                             // Ensures the image is properly resized and cropped if necessary
                        />
                    </div>
                </div>
        <div className="relative mt-20 bg-white" style={{ height: '100vh' }}>  {/* Use relative positioning for the main container */}
                    {/* Content with specific height, width, padding, and gap */}
                    <div className="absolute top-[30%] right-[297.5px] transform -translate-y-1/2 p-t-[112px] p-b-[112px] gap-[80px] h-[48px] w-[197.5px]">
                        <p className="text-1xl text-gray-400 mb-7 font-bold">SUMMER 2020</p>
                        <h1 className="text-5xl font-bold text-gray-800 mb-9 mr-9 -scroll-mt-3 whitespace-nowrap">Part of Neural  <br />Universe</h1>
                        <p className="text-lg text-gray-600 mb-9 mr-9 whitespace-nowrap ">
                            We know how large objects will act,
                            <br />but things on a small scale.
                        </p>
                        
                        {/* Align price and button horizontally */}
        <div className="flex items-center mt-4 space-x-6">
        <button className="bg-green-500 text-white py-3 px-8 rounded-md hover:bg-red-700 font-bold text-lg whitespace-nowrap">
                BUY NOW
            </button>
            <button className="bg-white text-green-500 border-2 border-green-500 hover:border-green-800  py-3 px-8 rounded-md hover:bg-green-900 font-bold text-lg whitespace-nowrap">
                READ MORE
            </button>
        </div>
        
                    </div>
        
        {/* Image with resizing and positioning */}
        <div className="absolute top-211px  bottom-1 w-[725px] h-[774px]  mt-8">
            <Image 
                src="/15thpic.png" 
                width={725} 
                height={1150} 
                alt="girl-pic" 
                style={{ height: '774px', objectFit: 'cover' }}
                                className="object-cover  "
            />
        </div>
        
                    {/* <div className="absolute top-211px  bottom-1 left-8 ">
                        <Image src="/15thpic.png" width={1100} height={1150} alt="girl-pic" />
                    </div> */}
                </div>
                <div className="text-center mt-8">
                      <p className="text-1xl text-blue-400 mt-2 font-bold"> Practice Advice</p>
                      <h2 className="text-5xl font-bold text-gray-800 mt-3">Featured Posts</h2>
                      <p className="text-1xl text-gray-500 mt-3 font-bold">
                        Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics: Newtonian mechanics
                      </p>
                
                      {/* Flex container to hold all images horizontally */}
                      <div className="flex justify-center mt-8 space-x-8 space-y-8">
                
                        {/* First Image Box */}
                        <div className="relative w-[348px] bg-white shadow-[0_0_4px_#888888] rounded-lg mt-8">
                          <div className="relative">
                            <Image
                              src="/16thpic.jpg"
                              alt="girl-pic"
                              width={348}  // Fixed width
                              height={300} // Fixed height
                              style={{ height: '300px', objectFit: 'cover' }}
                              className="object-cover w-full"
                            />
                            <button className="absolute left-5 bottom-64 bg-red-600 text-white py-0 px-4 font-bold text-1xl z-10 rounded-md">
                              NEW
                            </button>
                          </div>
                          <div className="p-4">
                          <div className="flex justify-start mt-1 space-x-3 space-y-4">
                            <p className="mt-4 text-1xl text-blue-400">Google</p>
                             <p className="mt-6 text-1xl text-gray-500">Trending</p>             <p className="mt-6 text-1xl text-gray-500">New</p>
                        </div>
                        <p className="mt-5 flex justify-start text-gray-800">Loudest a la Madison #1</p>
                          <p className="mt-1 flex justify-start text-gray-800">(L'integral)</p>
                           <p className="mt-3 flex justify-start text-gray-500">We focus on ergonomics and meeting</p>
                           <p className="mt-1 flex justify-start text-gray-500">you where you work. it's only a</p>
                          <p className="mt-1 flex justify-start text-gray-500">keystroke away.</p>
                            <div className="flex justify-between items-center mt-4">
                              <div className="flex items-center">
                                <LuClock3 className="text-blue-400 text-xl cursor-pointer hover:text-blue-900 mr-2" />
                                <p className=" text-gray-500">22 April 2021</p>
                              </div>
                              <div className="flex items-center">
                                <GoGraph className="text-green-700 text-xl cursor-pointer hover:text-blue-900 mr-2" />
                                <p className=" text-gray-500">10 comments</p>
                              </div>
                            </div>
                            <div className="flex justify-start mt-4 font-bold text-xl">
                              <p className="text-gray-600 font-semibold">Learn More</p>
                              <IoIosArrowForward className="text-cyan-500 text-2xl" />
                            </div>
                          </div>
                        </div>
                
                        {/* Second Image Box */}
                        <div className="relative w-[348px] bg-white shadow-[0_0_4px_#888888] rounded-lg">
                          <div className="relative">
                            <Image
                              src="/17thpic.jpg"
                              alt="girl-pic"
                              width={348}  // Fixed width
                              height={300} // Fixed height
                              style={{ height: '300px', objectFit: 'cover' }}
                              className="object-cover w-full"
                            />
                            <button className="absolute left-5 bottom-64 bg-red-600 text-white py-0 px-4 font-bold text-1xl z-10 rounded-md">
                              NEW
                            </button>
                          </div>
                          <div className="p-4">
                          <div className="flex justify-start mt-1 space-x-3 space-y-4">
                          <p className="mt-4 text-1xl text-blue-400">Google</p>
                          <p className="mt-6 text-1xl text-gray-500">Trending</p>
                             <p className="mt-6 text-1xl text-gray-500">New</p>
                          </div>
                          <p className="mt-5 flex justify-start text-gray-800">Loudest a la Madison #1</p>
                           <p className="mt-1 flex justify-start text-gray-800">(L'integral)</p>
                          <p className="mt-3 flex justify-start text-gray-500">We focus on ergonomics and meeting</p>
                           <p className="mt-1 flex justify-start text-gray-500">you where you work. it's only a</p>
                         <p className="mt-1 flex justify-start text-gray-500">keystroke away.</p>
                            <div className="flex justify-between items-center mt-4">
                              <div className="flex items-center">
                                <LuClock3 className="text-blue-400 text-xl cursor-pointer hover:text-blue-900 mr-2" />
                                <p className=" text-gray-500">22 April 2021</p>
                              </div>
                              <div className="flex items-center">
                                <GoGraph className="text-green-700 text-xl cursor-pointer hover:text-blue-900 mr-2" />
                                <p className=" text-gray-500">10 comments</p>
                              </div>
                            </div>
                            <div className="flex justify-start mt-4 font-bold text-xl">
                              <p className="text-gray-600 font-semibold">Learn More</p>
                              <IoIosArrowForward className="text-cyan-500 text-2xl" />
                            </div>
                          </div>
                        </div>
                
                        {/* Third Image Box */}
                        <div className="relative w-[348px] bg-white shadow-[0_0_4px_#888888] rounded-lg">
                          <div className="relative">
                            <Image
                              src="/18thpic.jpg"
                              alt="girl-pic"
                              width={348}  // Fixed width
                              height={300} // Fixed height
                              style={{ height: '300px', objectFit: 'cover' }}
                              className="object-cover w-full"
                            />
                            <button className="absolute left-5 bottom-64 bg-red-600 text-white py-0 px-4 font-bold text-1xl z-10 rounded-md">
                              NEW
                            </button>
                          </div>
                          <div className="p-4">
                          <div className="flex justify-start mt-1 space-x-3 space-y-4">
                            <p className="mt-4 text-1xl text-blue-400">Google</p>
                            <p className="mt-6 text-1xl text-gray-500">Trending</p>
                            <p className="mt-6 text-1xl text-gray-500">New</p>
                          </div>
                          <p className="mt-5 flex justify-start text-gray-800">Loudest a la Madison #1</p>
                          <p className="mt-1 flex justify-start text-gray-800">(L'integral)</p>
                          <p className="mt-3 flex justify-start text-gray-500">We focus on ergonomics and meeting</p>
                          <p className="mt-1 flex justify-start text-gray-500">you where you work. it's only a</p>
                           <p className="mt-1 flex justify-start text-gray-500">keystroke away.</p>
                            <div className="flex justify-between items-center mt-4">
                              <div className="flex items-center">
                                <LuClock3 className="text-blue-400 text-xl cursor-pointer hover:text-blue-900 mr-2" />
                                <p className=" text-gray-500">22 April 2021</p>
                              </div>
                              <div className="flex items-center">
                                <GoGraph className="text-green-700 text-xl cursor-pointer hover:text-blue-900 mr-2" />
                                <p className=" text-gray-500">10 comments</p>
                              </div>
                            </div>
                            <div className="flex justify-start mt-4 font-bold text-xl">
                              <p className="text-gray-600 font-semibold">Learn More</p>
                              <IoIosArrowForward className="text-cyan-500 text-2xl" />
                            </div>
                          </div>
                        </div>
                
                      </div>
                    </div>
                
              </main>  
    );
};

export default Home;
