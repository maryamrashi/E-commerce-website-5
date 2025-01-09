// import React from 'react'
// import Image from 'next/image';
// import styles from './style.module.css'; // Import the CSS module

// const About = () => {
//   return (
//     <main>
//       <div className={styles.container}>
//         <div className={styles.text}>
//           <h1>Your Text Here</h1>
//           <p>Additional text content here.</p>
//         </div>
        
//         <div className={styles.imageContainer}>
//           <div className={styles.circle}></div>
//           <Image
//             src="/girlypic.png" // Update with the correct image path
//             alt="Girl with shopping bags"
//             width={999} // Increased image width
//             height={850} // Increased image height
//             className={styles.image}
//           />
//         </div>
//       </div>
//     </main>
//   )
// }

// export default About;

// import React from 'react';
// import Image from 'next/image';
// import styles from './style.module.css'; // Import the CSS module

// const About = () => {
//   return (
//     <main>
//       <div className={styles.container}>
//         <div className={styles.text}>
//           <h1>Your Text Here</h1>
//           <p>Additional text content here.</p>
//         </div>
        
//         <div className={styles.imageContainer}>
//           <div className={styles.circle}></div>
//           <div className={styles.smallCircle}></div> {/* Small circle added here */}
//           <Image
//             src="/girlypic.png" // Update with the correct image path
//             alt="Girl with shopping bags"
//             width={999} // Increased image width
//             height={850} // Increased image height
//             className={styles.image}
//           />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default About;

'use client'; 
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 
import React from 'react';
import Image from 'next/image';
import styles from './style.module.css'; // Import the CSS module
const About = () => {
  return (
    <main>
      <div className="mt-8 flex justify-end items-center space-x-4 text-3xl font-bold text-pink-500">
      <span className="font-bold text-slate-900 mr-96 ">ABOUT OUR COMPANY</span>
      <span className="font-bold text-white mr-96 ">COMPANY</span>
      
    </div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.firstheading}>ABOUT COMPANY</p>
          <h1 className={styles.heading}>About Us:</h1>
          <p className={styles.text}>We know how large objects will act,but things on a small scale</p>
          
        {/* Button added here */}
        <button className={styles.button}>Get Now</button>
        </div>
        
        <div className={styles.imageContainer}>
          <div className={styles.circle}></div> {/* Large circle */}
          <div className={styles.smallCircle}></div> {/* Small circle */}
          <div className={styles.blueCircle}></div> {/* Blue circle */}
          <div className={styles.tinyCircle}></div> {/* Tiny circle */}
          <div className={styles.additionalCircle}></div> {/* New circle below tiny circle */}
          <Image
            src="/girlypic.png" // Update with the correct image path
            alt="Girl with shopping bags"
            width={999} // Increased image width
            height={850} // Increased image height
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.containerr}>
      <div className={styles.leftSide}>
        <div className={styles.leftTextAbove}>Problems trying</div>
        <div className={styles.leftText}>Met minim Mollie non desert<br/>Alamo est sit caliquey dolor do <br/>met sent</div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.rightText}>Problems trying to resolve the conflict between the two major realms of <br/> Classical physics: Newtonian mechanics</div>
      </div>
    </div>
    <div className={styles.containerrr}>
      {/* Four Headings with Text Below in Separate Containers */}
      <div className={styles.headingsContainerrr}>
        <div className={styles.headings}>
          <h2>15K</h2>
          <p>Happy Customers</p>
        </div>
        <div className={"text-white"}>
          <h2>15</h2>
          <p>Countr</p>
        </div>
        <div className={styles.headings}>
          <h2>150K</h2>
          <p>Monthly Visitors</p>
        </div>
        <div className={"text-white"}>
          <h2>1</h2>
          <p>Countr</p>
        </div>
        <div className={styles.headings}>
          <h2>15</h2>
          <p>Countries WorldWide</p>
        </div>
        <div className={"text-white"}>
          <h2>15</h2>
          <p>Countr</p>
        </div>
        <div className={styles.headings}>
          <h2>100+</h2>
          <p>Top Partners</p>
        </div>
      </div>
    </div>
    <div className={styles.containner}>
      {/* Centered Image Container */}
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="/Video card.png"  // Replace with the path to your image
          alt="Centered Image"
        />
      </div>
    </div>
  
    <div className="flex justify-center items-center mt-24">
      {/* Heading and Text Section */}
      <div className="text-center">
        <h3 className="text-5xl mb-4 font-bold text-gray-700">Meet Our Team</h3>
        <p className="mb-10 font-semibold text-gray-600">
        Problems trying to resolve the conflict between <br/>the two major realms of  Classical physics: Newtonian mechanics
        </p>
      </div>
    </div>
    




    <div className={styles.coontainer}>
      {/* Three Images Container */}
      <div className={styles.imagesCoontainer}>
        <div className={styles.imageItem}>
          <img
            className={styles.image}
            src="/newgpic1.jpg"  // Replace with the path to your image
            alt="Image 1"
          />
          <h3 className={styles.imageHeading}>Username</h3>
          <p className={styles.imageDescription}>Profession</p>
          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
        <div className={styles.imageItem}>
          <img
            className={styles.image}
            src="/newgpic2.jpg"  // Replace with the path to your image
            alt="Image 2"
          />
          <h3 className={styles.imageHeading}>Username</h3>
          <p className={styles.imageDescription}>Profession</p>
          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
      
        <div className={styles.imageItem}>
          <img
            className={styles.image}
            src="/newbpic.jpg"  // Replace with the path to your image
            alt="Image 3"
          />
          <h3 className={styles.imageHeading}>Username</h3>
          <p className={styles.imageDescription}>Profession</p>
          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>


    <div className="flex justify-center items-center mt-24">
      {/* Heading and Text Section */}
      <div className="text-center">
        <h3 className="text-5xl  font-bold text-gray-700 mb-10">Big Companies Are Here</h3>
        <p className="mb-1 font-semibold text-gray-600">
        Problems trying to resolve the conflict between <br/>the two major realms of  Classical physics: Newtonian mechanics
        </p>
      </div>
    </div>
    

    {/* Add images below this content */}
    <div className='mt-24 ml-32 mr-10 px-5 bg-white'>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 ml-24 mr-24'>
          {/* Image 2 */}
          <img src="fa-brands-1.png" alt="Image 2" className='w-153 h-34 object-cover ' />
          {/* Image 3 */}
          <img src="fa-brands-2.png" alt="Image 3" className='w-83 h-59 object-cover ' />
          {/* Image 4 */}
          <img src="fa-brands-3.png" alt="Image 4" className='w-102 h-75 object-cover ' />
          {/* Image 5 */}
          <img src="fa-brands-4.png" alt="Image 5" className='w-151 h-42 object-cover' />
          {/* Image 6 */}
          <img src="fa-brands-5.png" alt="Image 5" className='w-103.68 h-61.75 object-cover' />
          {/* Image 1 */}
          <img src="/Vector.png" alt="Image 1" className='w-75.75 h-71.86 object-cover' />
        </div>
      </div>


      <div className="flex h-screen mt-32">
      {/* Left Container */}
      <div className="w-1/2 bg-blue-500 p-8 flex flex-col justify-center">
        {/* Heading and Text Section */}
        <p className="text-1xl text-white font-bold">WORK WITH US</p>
        <h1 className="text-4xl font-bold text-white my-4">Now Let's grow Yours</h1>
        <p className="font-semibold text-white mb-6">
          The gradual accomulation of information about atomic and<br/>small-scale behaviour during the first quarter of the 20th
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 mt-5 rounded-md hover:bg-blue-800 font-bold text-base border-2 border-white">
  Button
</button>

      </div>

      {/* Right Container with Image */}
      <div className="w-1/2">
        <img
          src="/pinkg.jpg" // Replace with the path to your image
          alt="Picture"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    </main>
  );
};

export default About;
