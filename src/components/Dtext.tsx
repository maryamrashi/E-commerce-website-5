
import Image from 'next/image';  // Import Image component from Next.js

const Dtext = () => {
    return (
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
    <button className="bg-green-500 text-white py-2 px-7 rounded-md hover:bg-green-900 font-bold text-lg whitespace-nowrap">
        ADD TO CART
    </button>
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
        
    );
};

export default Dtext;
