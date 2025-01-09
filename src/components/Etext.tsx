import Image from 'next/image';  // Import Image component from Next.js

const Etext = () => {
    return (
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
        
    );
};

export default Etext;
