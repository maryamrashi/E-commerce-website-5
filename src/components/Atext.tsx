
import Image from 'next/image';

const Atext = () => {
    return (
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
    );
};

export default Atext;
