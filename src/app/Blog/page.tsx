
// 'use client'; 
// import Image from 'next/image';
// import { IoIosArrowForward } from 'react-icons/io';
// import React from 'react';
// import Link from 'next/link'; // Correct Link from Next.js
// import { MdArrowForwardIos } from "react-icons/md"; 
// import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';

// const Blog = () => {
//   return (
//     <main>
//     <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '160px' , paddingTop:"32px", fontWeight:"bold" ,backgroundColor:""}}>
//   {/* Link to homepage */}
//   <Link href="/" style={{ textDecoration: 'none', marginRight: '8px' }}>
//     Home
//   </Link>
//   <MdArrowForwardIos className='text-gray-500'/>
//   {/* Link to shop page */}
//   <Link href="/Shop" style={{ textDecoration: 'none', marginLeft: '8px', color:"gray" }}>
//     Shop
//   </Link>
// </div>
// <div className="mt-8 flex justify-end items-center space-x-4 text-3xl font-bold text-pink-500">
//       <span className="font-bold text-slate-900 mr-96 mb-5">ABOUT BLOG</span>
//       <span className="font-bold text-white mr-96 ">COMPANY</span>
      
//     </div>
// <div className="flex items-center pl-5">
//       {/* Left side: Image */}
//       <div className="mr-1 mt-14 pl-36">
//         <Image

//           src="blogpic1.jpg" 
//           alt="Your Image" 
//           width={506}  // Specify width for aspect ratio
//       height={450}
//           className="w-[506px] h-[450px] object-cover" 
//         />
//       </div>

//       {/* Right side: Content */}
//       <div className='pl-36 mt-10 '>
//         {/* Heading */}
//         <h2 className="text-2xl font-semibold">Floating Phones</h2>

//         {/* Five stars */}
//         <div className="flex items-center mt-2 text-2xl">
//           {[...Array(5)].map((_, index) => (
//             <span key={index} className="mr-1">
//               {index < 5? (
//                 <span className="text-yellow-500">★</span> // Yellow filled star
//               ) : (
//                 <span className="text-transparent border-2 border-yellow-500">★</span> // Empty star with yellow border
//               )}
//             </span>
//           ))}
//           <h6 className='text-sm ml-1 mt-1 font-bold text-slate-500'>10 Reveiws</h6>
//         </div>
//         <p className="text-gray-900 mt-10 font-bold text-3xl">$1,139.33</p>

        

//         {/* Text under second heading */}
//         <p className="text-gray-600 font-bold mt-2">Availibility : In Stock</p>

//         {/* Third text */}
//         <p className="text-gray-600 mt-10 font-bold text-sm">Met minim Mollie non desert Alamo est sit cliquey dolor <br/>
// do met sent. RELIT official consequent door ENIM RELIT Mollie. <br/>
// Excitation venial consequent sent nostrum met.</p>

//         {/* Gray line */}
//         <hr className="border-gray-500 my-5" />

//         <div className="flex gap-3">
//   {[...Array(4)].map((_, index) => (
//     <div
//       key={index}
//       className={`w-8 h-8 rounded-full  ${index === 0 ? 'bg-blue-500' : ''} ${index === 1 ? 'bg-green-800' : ''} ${index === 2 ? 'bg-orange-400' : ''} ${index === 3 ? 'bg-blue-950' : ''}`}
//     ></div>
//   ))}
// </div>
//         {/* Icons in front of button */}
//         <div className=" flex items-center gap-4 mt-14">
//           {/* Button */}
//           <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 focus:outline-none font-semibold">
//               Select Options
//             </button>
//             {/* Heart Icon */}
//             <FaHeart className="text-red-500 text-2xl" />
//             {/* Shopping Cart Icon */}
//             <FaShoppingCart className="text-green-500 text-2xl" />
//             {/* Eye Icon */}
//             <FaEye className="text-blue-600 text-2xl" />

             
//           </div>
//       </div>
//     </div>
//      {/* Additional section for images */}
//      <div className="mt-7 pl-40 flex gap-5">
//         {/* First Small Image */}
//         <div className="w-44 h-44">
//           <Image 
//             src="/blogpic2.jpg" 
//             alt="Small Image 1" 
//             width={1200}  // Specify width for aspect ratio
//       height={800}
//             className="w-full h-full object-cover rounded-md"
//           />
//         </div>
//         {/* Second Small Image with 50% opacity */}
//         <div className="w-44 h-44">
//           <Image 
//             src="/blogpic3.jpg" 
//             alt="Small Image 2" 
//             width={1200}  // Specify width for aspect ratio
//       height={800}
//             className="w-full h-full object-cover rounded-md opacity-50"
//           />
//         </div>
//       </div>
//       <div className="flex items-center justify-center mt-32 space-x-10">
//       <h3 className="text-2xl font-semibold">Description</h3>
//       <h3 className="text-2xl font-semibold">Additional Information</h3>
//       <h3 className="text-2xl font-semibold">Reviews (0)</h3>
//     </div>
//     {/* Gray line */}
//     <hr className="border-gray-500 my-5 mt-5" />
//     <div className="flex justify-center min-h-screen space-x-4 p-4 mt-16">
//       {/* First Container (Image on the left) */}
//       <div className="flex-1 bg-gray-100 p-4 flex items-center ">
//         <Image
//           src="/bloggpic4.jpg" // Assuming your image is inside the public folder
//           alt="Blog Image"
//           width={316}          // Set the width of the image
//             height={372} 
//           className="w-full h-full object-cover"
          
//         />
//       </div>

//       {/* Second Container (Heading and Paragraphs) */}
//       <div className="flex-1 bg-gray-100 p-4 flex flex-col">
//         <h2 className="text-2xl font-semibold mb-4 mt-5">the quick fox jumps over </h2>
//         <p className="mb-4 mt-5">Met minim Mollie non desert Alamo est sit<br/> cliquey dolor do met sent. RELIT official <br/>consequent door ENIM RELIT Mollie.<br/> Excitation venial consequent sent nostrum <br/>met.</p>
//         <p className="mb-5">Met minim Mollie non desert Alamo est sit<br/> cliquey dolor do met sent. RELIT official <br/>consequent door ENIM RELIT Mollie.<br/> Excitation venial consequent sent nostrum <br/>met.</p>
        
//         <p className="mb-5">Met minim Mollie non desert Alamo est sit<br/> cliquey dolor do met sent. RELIT official <br/>consequent door ENIM RELIT Mollie.<br/> Excitation venial consequent sent nostrum <br/>met.</p>
//       </div>

//       {/* Third Container (Heading with 4 paragraphs and another Heading with 3 paragraphs) */}
//       <div className="flex-1 bg-gray-100 p-4 flex flex-col">
//         <h2 className="text-2xl font-semibold mb-4 mt-6">the quick fox jumps over </h2>
//          {/* Paragraphs with Icon */}
//          <div className="flex items-center mb-4 mt-6">
//           <IoIosArrowForward className="mr-2 text-xl" /> {/* Icon */}
//           <p className="font-semibold">The quick fox jumps over the lazy dog.</p>
//         </div>

//         <div className="flex items-center mb-4">
//           <IoIosArrowForward className="mr-2 text-xl" /> {/* Icon */}
//           <p className="font-semibold">The quick fox jumps over the lazy dog.</p>
//         </div>

//         <div className="flex items-center mb-4">
//           <IoIosArrowForward className="mr-2 text-xl" /> {/* Icon */}
//           <p className="font-semibold">The quick fox jumps over the lazy dog.</p>
//         </div>

//         <div className="flex items-center mb-4">
//           <IoIosArrowForward className="mr-2 text-xl" /> {/* Icon */}
//           <p className="font-semibold">The quick fox jumps over the lazy dog.</p>
//         </div>

//         <h2 className="text-2xl font-medium mt-7 mb-4">The quick fox jumps over</h2>

//         <div className="flex items-center mb-4 mt-6">
//           <IoIosArrowForward className="mr-2 text-xl" /> {/* Icon */}
//           <p className="font-semibold">The quick fox jumps over the lazy dog.</p>
//         </div>

//         <div className="flex items-center mb-4">
//           <IoIosArrowForward className="mr-2 text-xl" /> {/* Icon */}
//           <p className="font-semibold">The quick fox jumps over the lazy dog.</p>
//         </div>

//         <div className="flex items-center mb-4">
//           <IoIosArrowForward className="mr-2 text-xl" /> {/* Icon */}
//           <p className="font-semibold">The quick fox jumps over the lazy dog.</p>
//         </div>
//       </div>
//     </div>






//     {/* Bestselling Products Section */}
//     <div className="bg-gray-100 p-8 mt-10">
//         <h2 className="text-3xl font-bold text-center mb-4">BESTSELLER PRODUCTS</h2>
        
//         {/* Line below the heading */}
//         <div className="w-16 h-1 bg-black mx-auto mb-8"></div>

//         {/* Four Products in front of each other */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
//           {/* Product 1 */}
//           <div className="bg-white p-4 text-center rounded-lg shadow-md">
//             <Image
//               src="/bloggpic5.jpg"
//               alt="Product 1"
//               width={300}
//               height={300}
//               className="w-full h-64 object-cover mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
//             <p className="text-sm text-gray-600 mb-4">English Department</p>
//             <p className="flex space-x-4 ml-20">
//   <span className="text-sm text-gray-700">$16.48</span>
//   <span className="text-sm text-green-600">$16.48</span>
// </p>
//           </div>

//           {/* Product 2 */}
//           <div className="bg-white p-4 text-center rounded-lg shadow-md">
//             <Image
//               src="/bloggpic6.jpg"
//               alt="Product 2"
//               width={300}
//               height={300}
//               className="w-full h-64 object-cover mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
//             <p className="text-sm text-gray-600 mb-4">English Department</p>
//             <p className="flex space-x-4 ml-20">
//   <span className="text-sm text-gray-700">$16.48</span>
//   <span className="text-sm text-green-600">$16.48</span>
// </p>
       
//           </div>

//           {/* Product 3 */}
//           <div className="bg-white p-4 text-center rounded-lg shadow-md">
//             <Image
//               src="/blogpic7.jpg"
//               alt="Product 3"
//               width={300}
//               height={300}
//               className="w-full h-64 object-cover mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
//             <p className="text-sm text-gray-600 mb-4">English Department</p>
//             <p className="flex space-x-4 ml-20">
//   <span className="text-sm text-gray-700">$16.48</span>
//   <span className="text-sm text-green-600">$16.48</span>
// </p>
       
//           </div>

//           {/* Product 4 */}
//           <div className="bg-white p-4 text-center rounded-lg shadow-md">
//             <Image
//               src="/blogpic8.jpg"
//               alt="Product 4"
//               width={300}
//               height={300}
//               className="w-full h-64 object-cover mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
//             <p className="text-sm text-gray-600 mb-4">English Department</p>
//             <p className="flex space-x-4 ml-20">
//   <span className="text-sm text-gray-700">$16.48</span>
//   <span className="text-sm text-green-600">$16.48</span>
// </p>
       
//           </div>
//         </div>

//         {/* Another Set of Four Products */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
//           {/* Repeat similar structure for the next set of 4 products */}
//           {/* Product 1 */}
//           <div className="bg-white p-4 text-center rounded-lg shadow-md">
//             <Image
//               src="/blogpic9.jpg"
//               alt="Product 1"
//               width={300}
//               height={300}
//               className="w-full h-64 object-cover mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
//             <p className="text-sm text-gray-600 mb-4">English Department</p>
//             <p className="flex space-x-4 ml-20">
//   <span className="text-sm text-gray-700">$16.48</span>
//   <span className="text-sm text-green-600">$16.48</span>
// </p>
       
//           </div>

//           {/* Product 2 */}
//           <div className="bg-white p-4 text-center rounded-lg shadow-md">
//             <Image
//               src="/blogpic10.jpg"
//               alt="Product 2"
//               width={300}
//               height={300}
//               className="w-full h-64 object-cover mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
//             <p className="text-sm text-gray-600 mb-4">English Department</p>
//             <p className="flex space-x-4 ml-20">
//   <span className="text-sm text-gray-700">$16.48</span>
//   <span className="text-sm text-green-600">$16.48</span>
// </p>
       
//           </div>

//           {/* Product 3 */}
//           <div className="bg-white p-4 text-center rounded-lg shadow-md">
//             <Image
//               src="/bloggpic5.jpg"
//               alt="Product 3"
//               width={300}
//               height={300}
//               className="w-full h-64 object-cover mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
//             <p className="text-sm text-gray-600 mb-4">English Department</p>
//             <p className="flex space-x-4 ml-20">
//   <span className="text-sm text-gray-700">$16.48</span>
//   <span className="text-sm text-green-600">$16.48</span>
// </p>
       
//           </div>

//           {/* Product 4 */}
//           <div className="bg-white p-4 text-center rounded-lg shadow-md">
//             <Image
//               src="/bloggpic6.jpg"
//               alt="Product 4"
//               width={300}
//               height={300}
//               className="w-full h-64 object-cover mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
//             <p className="text-sm text-gray-600 mb-4">English Department</p>
//             <p className="flex space-x-4 ml-20">
//   <span className="text-sm text-gray-700">$16.48</span>
//   <span className="text-sm text-green-600">$16.48</span>
// </p>
       
//           </div>
//         </div>
//       </div>
//       <div className='mt-24 ml-32 mr-10 px-5 bg-white'>
//   <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 ml-24 mr-24'>
//     {/* Image 2 */}
//     <Image 
//       src="/fa-brands-1.png" 
//       alt="Image 2" 
//       width={153}  // Specify width for aspect ratio
//       height={34}  // Specify height for aspect ratio
//       layout="intrinsic"  // Maintains aspect ratio
//       className="object-cover" 
//     />
//     {/* Image 3 */}
//     <Image 
//       src="/fa-brands-2.png" 
//       alt="Image 3" 
//       width={83} 
//       height={59} 
//       layout="intrinsic" 
//       className="object-cover" 
//     />
//     {/* Image 4 */}
//     <Image 
//       src="/fa-brands-3.png" 
//       alt="Image 4" 
//       width={102} 
//       height={75} 
//       layout="intrinsic" 
//       className="object-cover" 
//     />
//     {/* Image 5 */}
//     <Image 
//       src="/fa-brands-4.png" 
//       alt="Image 5" 
//       width={151} 
//       height={42} 
//       layout="intrinsic" 
//       className="object-cover" 
//     />
//     {/* Image 6 */}
//     <Image 
//       src="/fa-brands-5.png" 
//       alt="Image 5" 
//       width={103.68} 
//       height={61.75} 
//       layout="intrinsic" 
//       className="object-cover" 
//     />
//     {/* Image 1 */}
//     <Image 
//       src="/Vector.png" 
//       alt="Image 1" 
//       width={75.75} 
//       height={71.86} 
//       layout="intrinsic" 
//       className="object-cover" 
//     />
//   </div>
// </div>

// </main>

//   );
// }

// export default Blog;
























// pages/blog.js
'use client'; 
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import React from 'react';
import Link from 'next/link'; 
import { MdArrowForwardIos } from "react-icons/md"; 
import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';

const Blog = () => {
  return (
    <main>
      <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '160px', paddingTop:"32px", fontWeight:"bold" }}>
        {/* Link to homepage */}
        <Link href="/" style={{ textDecoration: 'none', marginRight: '8px' }}>
          Home
        </Link>
        <MdArrowForwardIos className='text-gray-500'/>
        {/* Link to shop page */}
        <Link href="/Shop" style={{ textDecoration: 'none', marginLeft: '8px', color:"gray" }}>
          Shop
        </Link>
      </div>

      <div className="mt-8 flex justify-end items-center space-x-4 text-3xl font-bold text-pink-500">
        <span className="font-bold text-slate-900 mr-96 mb-5">ABOUT BLOG</span>
        <span className="font-bold text-white mr-96 ">COMPANY</span>
      </div>

      <div className="flex items-center pl-5">
        {/* Left side: Image */}
        <div className="mr-1 mt-14 pl-36">
          <Image
            src="/blogpic1.jpg" // Ensure this path is correct
            alt="Your Image" 
            width={506}  
            height={450}
            className="w-[506px] h-[450px] object-cover" 
          />
        </div>

        {/* Right side: Content */}
        <div className='pl-36 mt-10'>
          {/* Heading */}
          <h2 className="text-2xl font-semibold">Floating Phones</h2>

          {/* Five stars */}
          <div className="flex items-center mt-2 text-2xl">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="mr-1">
                {index < 5 ? (
                  <span className="text-yellow-500">★</span> // Yellow filled star
                ) : (
                  <span className="text-transparent border-2 border-yellow-500">★</span> // Empty star with yellow border
                )}
              </span>
            ))}
            <h6 className='text-sm ml-1 mt-1 font-bold text-slate-500'>10 Reviews</h6>
          </div>
          
          <p className="text-gray-900 mt-10 font-bold text-3xl">$1,139.33</p>

          {/* Availability */}
          <p className="text-gray-600 font-bold mt-2">Availability: In Stock</p>

          {/* Description */}
          <p className="text-gray-600 mt-10 font-bold text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. <br/>
            RELIT official consequent door ENIM RELIT Mollie. <br/>
            Excitation venial consequent sent nostrum met.
          </p>

          {/* Gray line */}
          <hr className="border-gray-500 my-5" />

          {/* Color circles */}
          <div className="flex gap-3">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full  ${index === 0 ? 'bg-blue-500' : ''} ${index === 1 ? 'bg-green-800' : ''} ${index === 2 ? 'bg-orange-400' : ''} ${index === 3 ? 'bg-blue-950' : ''}`}
              ></div>
            ))}
          </div>

          {/* Icons in front of button */}
          <div className="flex items-center gap-4 mt-14">
            {/* Button */}
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 focus:outline-none font-semibold">
              Select Options
            </button>
            {/* Heart Icon */}
            <FaHeart className="text-red-500 text-2xl" />
            {/* Shopping Cart Icon */}
            <FaShoppingCart className="text-green-500 text-2xl" />
            {/* Eye Icon */}
            <FaEye className="text-blue-600 text-2xl" />
          </div>
        </div>
      </div>

      {/* Additional section for images */}
      <div className="mt-7 pl-40 flex gap-5">
        {/* First Small Image */}
        <div className="w-44 h-44">
          <Image 
            src="/blogpic2.jpg" // Ensure this path is correct
            alt="Small Image 1" 
            width={1200}  
            height={800}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        {/* Second Small Image with 50% opacity */}
        <div className="w-44 h-44">
          <Image 
            src="/blogpic3.jpg" // Ensure this path is correct
            alt="Small Image 2" 
            width={1200}  
            height={800}
            className="w-full h-full object-cover rounded-md opacity-50"
          />
        </div>
      </div>

      <div className="flex items-center justify-center mt-32 space-x-10">
        <h3 className="text-2xl font-semibold">Description</h3>
        <h3 className="text-2xl font-semibold">Additional Information</h3>
        <h3 className="text-2xl font-semibold">Reviews (0)</h3>
      </div>

      {/* Gray line */}
      <hr className="border-gray-500 my-5 mt-5" />
      
      <div className="flex justify-center min-h-screen space-x-4 p-4 mt-16">
        {/* First Container (Image on the left) */}
        <div className="flex-1 bg-gray-100 p-4 flex items-center">
          <Image
            src="/bloggpic4.jpg" // Ensure this path is correct
            alt="Blog Image"
            width={316}
            height={372} 
            className="w-full h-full object-cover"
          />
        </div>

        
 {/* Second Container (Heading and Paragraphs) */}
       <div className="flex-1 bg-gray-100 p-4 flex flex-col">
         <h2 className="text-2xl font-semibold mb-4 mt-5">the quick fox jumps over </h2>
         <p className="mb-4 mt-5">Met minim Mollie non desert Alamo est sit<br/> cliquey dolor do met sent. RELIT official <br/>consequent door ENIM RELIT Mollie.<br/> Excitation venial consequent sent nostrum <br/>met.</p>
         <p className="mb-5">Met minim Mollie non desert Alamo est sit<br/> cliquey dolor do met sent. RELIT official <br/>consequent door ENIM RELIT Mollie.<br/> Excitation venial consequent sent nostrum <br/>met.</p>
        
         <p className="mb-5">Met minim Mollie non desert Alamo est sit<br/> cliquey dolor do met sent. RELIT official <br/>consequent door ENIM RELIT Mollie.<br/> Excitation venial consequent sent nostrum <br/>met.</p>
       </div>

       {/* Third Container (Heading with 4 paragraphs and another Heading with 3 paragraphs) */}
       <div className="flex-1 bg-gray-100 p-4 flex flex-col">
         <h2 className="text-2xl font-semibold mb-4 mt-6">the quick fox jumps over </h2>
          {/* Paragraphs with Icon */}
          <div className="flex items-center mb-4 mt-6">
           <IoIosArrowForward className="mr-2 text-xl" /> {/* Icon */}
           <p className="font-semibold">The quick fox jumps over the lazy dog.</p>
         </div>

         <div className="flex items-center mb-4">
           <IoIosArrowForward className="mr-2 text-xl" /> {/* Icon */}
          <p className="font-semibold">The quick fox jumps over the lazy dog.</p>
         </div>

         <div className="flex items-center mb-4">
           <IoIosArrowForward className="mr-2 text-xl" /> {/* Icon */}
           <p className="font-semibold">The quick fox jumps over the lazy dog.</p>
         </div>

         <div className="flex items-center mb-4">
           <IoIosArrowForward className="mr-2 text-xl" /> {/* Icon */}
           <p className="font-semibold">The quick fox jumps over the lazy dog.</p>
         </div>

         <h2 className="text-2xl font-medium mt-7 mb-4">The quick fox jumps over</h2>

         <div className="flex items-center mb-4 mt-6">
           <IoIosArrowForward className="mr-2 text-xl" /> {/* Icon */}
           <p className="font-semibold">The quick fox jumps over the lazy dog.</p>
         </div>

         <div className="flex items-center mb-4">
           <IoIosArrowForward className="mr-2 text-xl" /> {/* Icon */}
           <p className="font-semibold">The quick fox jumps over the lazy dog.</p>
         </div>

        <div className="flex items-center mb-4">
          <IoIosArrowForward className="mr-2 text-xl" /> {/* Icon */}
          <p className="font-semibold">The quick fox jumps over the lazy dog.</p>
         </div>
       </div>
    </div>




    {/* Bestselling Products Section */}
    <div className="bg-gray-100 p-8 mt-10">
        <h2 className="text-3xl font-bold text-center mb-4">BESTSELLER PRODUCTS</h2>
        
        {/* Line below the heading */}
        <div className="w-16 h-1 bg-black mx-auto mb-8"></div>

        {/* Four Products in front of each other */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Product 1 */}
          <div className="bg-white p-4 text-center rounded-lg shadow-md">
            <Image
              src="/bloggpic5.jpg"
              alt="Product 1"
              width={300}
              height={300}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            <p className="text-sm text-gray-600 mb-4">English Department</p>
            <p className="flex space-x-4 ml-20">
  <span className="text-sm text-gray-700">$16.48</span>
  <span className="text-sm text-green-600">$16.48</span>
</p>
          </div>

          {/* Product 2 */}
          <div className="bg-white p-4 text-center rounded-lg shadow-md">
            <Image
              src="/bloggpic6.jpg"
              alt="Product 2"
              width={300}
              height={300}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            <p className="text-sm text-gray-600 mb-4">English Department</p>
            <p className="flex space-x-4 ml-20">
  <span className="text-sm text-gray-700">$16.48</span>
  <span className="text-sm text-green-600">$16.48</span>
</p>
       
          </div>

          {/* Product 3 */}
          <div className="bg-white p-4 text-center rounded-lg shadow-md">
            <Image
              src="/blogpic7.jpg"
              alt="Product 3"
              width={300}
              height={300}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            <p className="text-sm text-gray-600 mb-4">English Department</p>
            <p className="flex space-x-4 ml-20">
  <span className="text-sm text-gray-700">$16.48</span>
  <span className="text-sm text-green-600">$16.48</span>
</p>
       
          </div>

          {/* Product 4 */}
          <div className="bg-white p-4 text-center rounded-lg shadow-md">
            <Image
              src="/blogpic8.jpg"
              alt="Product 4"
              width={300}
              height={300}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            <p className="text-sm text-gray-600 mb-4">English Department</p>
            <p className="flex space-x-4 ml-20">
  <span className="text-sm text-gray-700">$16.48</span>
  <span className="text-sm text-green-600">$16.48</span>
</p>
       
          </div>
        </div>

        {/* Another Set of Four Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {/* Repeat similar structure for the next set of 4 products */}
          {/* Product 1 */}
          <div className="bg-white p-4 text-center rounded-lg shadow-md">
            <Image
              src="/blogpic9.jpg"
              alt="Product 1"
              width={300}
              height={300}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            <p className="text-sm text-gray-600 mb-4">English Department</p>
            <p className="flex space-x-4 ml-20">
  <span className="text-sm text-gray-700">$16.48</span>
  <span className="text-sm text-green-600">$16.48</span>
</p>
       
          </div>

          {/* Product 2 */}
          <div className="bg-white p-4 text-center rounded-lg shadow-md">
            <Image
              src="/blogpic10.jpg"
              alt="Product 2"
              width={300}
              height={300}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            <p className="text-sm text-gray-600 mb-4">English Department</p>
            <p className="flex space-x-4 ml-20">
  <span className="text-sm text-gray-700">$16.48</span>
  <span className="text-sm text-green-600">$16.48</span>
</p>
       
          </div>

          {/* Product 3 */}
          <div className="bg-white p-4 text-center rounded-lg shadow-md">
            <Image
              src="/bloggpic5.jpg"
              alt="Product 3"
              width={300}
              height={300}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            <p className="text-sm text-gray-600 mb-4">English Department</p>
            <p className="flex space-x-4 ml-20">
  <span className="text-sm text-gray-700">$16.48</span>
  <span className="text-sm text-green-600">$16.48</span>
</p>
       
          </div>

          {/* Product 4 */}
          <div className="bg-white p-4 text-center rounded-lg shadow-md">
            <Image
              src="/bloggpic6.jpg"
              alt="Product 4"
              width={300}
              height={300}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            <p className="text-sm text-gray-600 mb-4">English Department</p>
            <p className="flex space-x-4 ml-20">
  <span className="text-sm text-gray-700">$16.48</span>
  <span className="text-sm text-green-600">$16.48</span>
</p>
       
          </div>
        </div>
      </div>



      

      {/* Logo images section */}
      <div className='mt-24 ml-32 mr-10 px-5 bg-white'>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-16 ml-24 mr-24'>
          <Image 
            src="/fa-brands-1.png" // Ensure this path is correct
            alt="Image 2" 
            width={153}  
            height={34}  
            layout="intrinsic"
            className="object-cover" 
          />{/* Image 3 */}
              <Image 
                src="/fa-brands-2.png" 
                alt="Image 3" 
                width={83}  
                height={59} 
                layout="responsive" 
                className='object-cover' 
              />
              {/* Image 4 */}
              <Image 
                src="/fa-brands-3.png" 
                alt="Image 4" 
                width={102}  
                height={75} 
                layout="responsive" 
                className='object-cover' 
              />
              {/* Image 5 */}
              <Image 
                src="/fa-brands-4.png" 
                alt="Image 5" 
                width={151}  
                height={42} 
                layout="responsive" 
                className='object-cover' 
              />
              {/* Image 6 */}
              <Image 
                src="/fa-brands-5.png" 
                alt="Image 5" 
                width={103.68}  
                height={61.75} 
                layout="responsive" 
                className='object-cover' 
              />
              {/* Image 1 */}
              <Image 
                src="/Vector.png" 
                alt="Image 1" 
                width={75.75}  
                height={71.86} 
                layout="responsive" 
                className='object-cover' 
              />
          {/* Repeat for other images */}
        </div>
      </div>
    </main>
  );
}

export default Blog;
