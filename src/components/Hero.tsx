
import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa'; // Import the social media icons
import { MdEmail } from 'react-icons/md'; // Import Material Design email icon
import { IoCall } from 'react-icons/io5'; // Import Call Icon

const Hero = () => {
  return (
    <main className="bg-[#252B42] w-full h-[66px] flex items-center px-10">
      <div className="flex w-full justify-between items-center ">
        {/* Left Section: Phone Number with Call Icon */}
        <h3 className="text-white flex items-center ">
          <IoCall className="mr-1 text-white  hover:text-green-500" /> {/* Call Icon */}
          (225) 555-0118
        </h3>

        {/* Left Section: Email with Envelope Icon */}
        <h3 className="text-white flex items-center text-1xl space-x-4">
          <MdEmail className="mr-1 text-white  hover:text-blue-100" /> {/* Envelope Icon */}
          michelle.rivera@example.com
        </h3>

        
      {/* Centered Section: Special Offer */}
      <h3 className="text-[#252B42] text-center flex justify-center items-center ">
          Follow Us and get a 
        </h3>



        {/* Centered Section: Special Offer */}
        <h3 className="text-white text-center flex justify-center items-center ">
          Follow Us and get a chance to win 80% off
        </h3>


{/* Centered Section: Special Offer */}
<h3 className="text-[#252B42] text-center flex justify-center items-center ">
          Follow Us hgfdsskjhgfjhgf 
        </h3>

        {/* Right Section: Follow Us Label and Social Media Icons */}
        <h3 className="text-white text-right flex items-center  ">
          Follow Us  : 
          <div className="flex space-x-2 ml-2">
            {/* Instagram Icon */}
            <FaInstagram className="text-white text-2xl cursor-pointer hover:text-pink-500" />
            {/* YouTube Icon */}
            <FaYoutube className="text-white text-2xl cursor-pointer hover:text-red-600" />
            {/* Facebook Icon */}
            <FaFacebook className="text-white text-2xl cursor-pointer hover:text-blue-700" />
            {/* Twitter Icon */}
            <FaTwitter className="text-white text-2xl cursor-pointer hover:text-blue-400" />
          </div>
        </h3>
      </div>
    </main>
  );
};

export default Hero;
   



