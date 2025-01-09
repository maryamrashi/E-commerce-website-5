


import Image from 'next/image';  // Import Image component from Next.js

const Picture = () => {
    return (
        <main className="relative">  {/* Use relative positioning for the main container */}
            {/* Content with specific height, width, padding, and gap */}
            <div className="absolute top-[30%] left-[197.5px] transform -translate-y-1/2 p-t-[112px] p-b-[112px] gap-[80px] h-[48px] w-[197.5px]">
            <p className="text-lg text-white mb-7 font-bold">SUMMER 2020</p>
                { /*<h1 className="text-6xl font-bold text-white mb-7 mr-7">NEW COLLECTION</h1> */}
                <h1 className="text-6xl font-bold text-white mb-9 mr-9 whitespace-nowrap">NEW COLLECTION</h1>

                <p className="text-lg text-white mb-9 mr-9 whitespace-nowrap font-bold">We know how large objects will act,
                <br />but things on a small scale.</p>
                <button className="bg-green-500 text-white py-3 px-8 rounded-md hover:bg-green-800 font-bold text-2xl">SHOP NOW</button>
            </div>

            {/* Image */}
            <div>
                <Image src="/1stpic.jpg" width={2440} height={716} alt="girl-pic" />
            </div>
        </main>
    );
};

export default Picture;

