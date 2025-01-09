import Image from 'next/image';
import { LuClock3 } from "react-icons/lu";
import { GoGraph } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

const Ftext = () => {
  return (
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
  );
};

export default Ftext;
