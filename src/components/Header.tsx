
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import React from 'react';
import Link from 'next/link';
import { BiColor } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
  return (
    <header className="bg-white text-black p-4 flex justify-between items-center w-1440px">
      {/* Logo or Title */}
      <div>
        <h1 className="text-3xl font-bold ">Bandage</h1>
      </div>
<p className="text-white">pj</p>

      {/* Navigation Links */}
      <div>
      <ul className="flex space-x-4 -mr-5"> {/* Added 'mr-auto' to pull it closer to the h1 */}
        <li>
          <Link href="/Home" className="hover:text-blue-500">Home</Link>
        </li>
        {/* Shop Link with Icon in Front */}
        <li>
            <Link href="/Shop" className="hover:text-blue-500 flex items-center">
              <IoIosArrowDown className="inline-block mr-2" />
              Shop
            </Link>
          </li>

        <li>
          <Link href="/About" className="hover:text-blue-500">About</Link>
        </li>
        <li>
          <Link href="/Blog" className="hover:text-blue-500">Blog</Link>
        </li>
        <li>
          <Link href="/Contact" className="hover:text-blue-500">Contact</Link>
        </li>
        <li>
          <Link href="/Pages" className="hover:text-blue-500">Pages</Link>
        </li>
        </ul>
        </div>

        <div className="flex space-x-1 ml-0">
            {/* person Icon */}
            <IoPersonOutline  className="text-white text-2xl cursor-pointer hover:text-white" />
      </div>

      <div className="flex space-x-1 ml-0">
            {/* person Icon */}
            <IoPersonOutline  className="text-white text-2xl cursor-pointer hover:text-white" />
      </div>
      
      <div className="flex space-x-1 ml-0">
            {/* person Icon */}
            <IoPersonOutline  className="text-white text-2xl cursor-pointer hover:text-white" />
      </div>
      
          <div className="flex space-x-1 ml-0">
            {/* person Icon */}
            <IoPersonOutline  className="text-blue-500 text-2xl cursor-pointer hover:text-blue-900" />
            
      {/* Login/Register Section */}
      
        <Link href="/login" className="text-lg text-blue-500 hover:text-blue-900">Login</Link>
        <p className="text-blue-500">/</p>
        <Link href="/register" className="text-lg text-blue-500 hover:text-blue-900">Register</Link>
      </div>
<div className="flex space-x-2 ml-0">
            {/* search Icon */}
            <IoSearch className="text-blue-500 text-2xl cursor-pointer hover:text-purple-700 mx-3" />
            {/* cart Icon */}
            <IoCartOutline  className="text-blue-500 text-2xl cursor-pointer hover:text-pink-400 mx-7" />
            <Link href="/1" className="text-lg text-blue-500 hover:text-blue-900">1</Link>
            {/* heart Icon */}
             < IoMdHeartEmpty  className="text-blue-500 text-2xl cursor-pointer hover:text-red-500 mr-0 mx-7" />
            <Link href="/1" className="text-lg text-blue-500 hover:text-blue-900">1</Link> 
          
          </div>
    </header>
  );
};

export default Header;

