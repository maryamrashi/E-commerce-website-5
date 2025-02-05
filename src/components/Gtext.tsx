
import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'; // Import the social media icons
import Link from 'next/link';


const Gtext = () => {
  return (
    <main className="bg-slate-100 text-slate-900 p-10 flex justify-between items-center w-1440px h-142px mt-20">
      {/* Logo or Title */}
      <div>
        <h1 className="text-3xl font-bold ml-20 ">Bandage</h1>
      </div>

      {/* Social Media Icons on the right side */}
      <div className="flex space-x-4 mr-28">
      <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className=" text-blue-500 text-2xl cursor-pointer hover:text-blue-900" />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className=" text-blue-500 text-2xl cursor-pointer hover:text-pink-700" />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className=" text-blue-500 text-2xl cursor-pointer hover:text-blue-900" />
        </Link>
        
      </div>
    </main>
  );
};

export default Gtext;



