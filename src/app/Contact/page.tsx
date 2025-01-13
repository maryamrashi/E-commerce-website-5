import React from 'react'
import Image from 'next/image';
import Link from 'next/link'; 
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import styles from './style.module.css'; 
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Use FaMapMarkerAlt
import { TfiEmail } from 'react-icons/tfi';
import { MdArrowDownward } from 'react-icons/md'
import { PiArrowBendRightDownLight } from "react-icons/pi";
const Contact = () => {
  return (
    <main>
    <div className="flex justify-between p-9 ">
    {/* Left Container */}
    <div className="w-1/2 pr-8 mt-10 ml-36">
      <h1 className="text-1xl font-bold mb-4">CONTACT US</h1>
      <h2 className="text-6xl font-semibold mb-6">Get in touch<br/>
      today!</h2>
      
      <p className="mb-1">
      We know how large objects will act,  
      </p>
      <p className="mb-4">
      but things on a small scale
      </p>

      <h3 className="text-xl font-bold mt-6 mb-2">Phone ; +451 215 215 </h3>
      <h3 className="text-xl font-bold mb-10">Fax : +451 215 215</h3>

      <div className="flex space-x-4">
        <FaTwitter className="text-2xl text-blue-500   hover:text-blue-900 cursor-pointer" />
        <FaFacebookF className="text-2xl text-blue-600  hover:text-blue-900 cursor-pointer" />
        <FaInstagram className="text-2xl text-pink-500   hover:text-pink-900 cursor-pointer" />
        <FaLinkedinIn className="text-2xl text-blue-700  hover:text-blue-900 cursor-pointer" />
      </div>
    </div>

    {/* Right Container */}
    <div className="w-3/4 relative mr-20">
      <div className="absolute inset-0 flex items-center justify-center ml-44 ">
        <div className="w-80 h-80 bg-pink-200 rounded-full absolute -z-10 mb-40"></div>
      </div>
      <div className="relative w-full ml-20 mt-5" >
        <Image
          src="/contactpic1.png"  // Replace with your image path
          alt="Image"
          width={1500}
          height={500}
          className="rounded-full"
          
          style={{ width: "1200px", height: "500px" }}
        />
      </div>
    </div>
</div>
<div className="flex justify-center">
      <h1 className="text-1xl text-slate-700 font-bold mb-5">VISIT OUR OFFICE</h1>
    </div>
    <div className="flex justify-center">
      <h1 className="text-4xl font-bold">We help small businesses </h1>
    </div>
    <div className="flex justify-center">
      <h1 className="text-4xl font-bold">with big ideas</h1>
    </div>


    
    <div className="flex justify-center items-center space-x-8 py-16">
      {/* First Container */}
      <div className="bg-white p-8 rounded-lg shadow-md w-96  border border-gray-500">
        <div className="flex justify-center mb-4">
          <FaPhoneAlt className="text-6xl text-blue-500 mt-14" />
        </div>
        <div className="text-center space-y-4 ">
          <p className='mt-10 mb-auto'>georgia.young@example.com</p>
          <p className='mt-auto'>georgia.young@ple.com</p>
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-semibold mt-10">Get Support</h2>
          <div className="flex items-center justify-center mb-8">
      <div className="p-1 bg-gray-100 rounded-lg shadow-lg mb-auto mt-8">
        <Link href="/Shop">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          Submit Request
          </button>
        </Link>
      </div>
    </div>
        </div>
      </div>

      {/* Second Container */}
      <div className="bg-black p-8 rounded-lg shadow-md w-96  border border-black">
        <div className="flex justify-center mb-5">
          <FaMapMarkerAlt className="text-6xl text-blue-500 mt-10 mb-6" />
        </div>
        <div className="text-center space-y-4">
          <p className='text-white '>georgia.young@example.com</p>
          <p className='text-white'>georgia.young@ple.com</p>
          <p >Second paragraph content goes here. This is an additional description.</p>
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-semibold text-white mt-5">Get Support</h2>
          <div className="flex items-center justify-center mb-8">
      <div className="p-1 bg-gray-950 rounded-lg shadow-lg mb-auto mt-8">
        <Link href="/Shop">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          Submit Request
          </button>
        </Link>
      </div>
    </div>
        </div>
      </div>

      {/* Third Container */}
      <div className="bg-white p-8 rounded-lg shadow-md w-96  border border-gray-500">
        <div className="flex justify-center mb-4">
          <TfiEmail className="text-6xl text-blue-500 mt-14" />
        </div>
        <div className="text-center space-y-4">
          <p className='mt-10'>georgia.young@example.com</p>
          <p>georgia.young@ple.com</p>
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-semibold mt-10">Get Support</h2>
          <div className="flex items-center justify-center mb-8">
      <div className="p-1 bg-gray-100 rounded-lg shadow-lg mb-auto mt-8">
        <Link href="/Shop">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          Submit Request
          </button>
        </Link>
      </div>
    </div>
        </div>
      </div>
    </div>
    


    <div className="flex flex-col items-center justify-center  bg-white">
      {/* Arrow Icon */}
      <div className="mb-4">
        <PiArrowBendRightDownLight className="w-28 h-28 mt-10 text-blue-500 transform " />
      </div>

      {/* Heading */}
      <h1 className="text-1xl mb-7 font-bold text-gray-700">WE Can't WAIT TO MEET YOU</h1>
      <h1 className="text-6xl font-bold text-gray-800">Let's Talk</h1>
    </div>
    <div className="flex items-center justify-center mb-8">
      <div className="p-1 bg-gray-200 rounded-lg shadow-lg mb-auto mt-8">
        <Link href="/Shop">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Try it free now
          </button>
        </Link>
      </div>
    </div>
</main>
  )
}

export default Contact
