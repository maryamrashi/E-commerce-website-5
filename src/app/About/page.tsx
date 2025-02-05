

// export default About;

'use client'; 
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 
import React from 'react';
import Image from 'next/image';
import styles from './style.module.css'; // Import the CSS module
import Link from 'next/link';

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
      <Image
  className={styles.image}
  src="/Video card.png"  // Replace with the correct path to your image
  alt="Centered Image"
  width={100}  // Specify the width of the image
  height={800} // Specify the height of the image
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
          <Image
            className={styles.image}
            src="/newgpic1.jpg"  // Replace with the path to your image
            alt="Image 1"
            width={100}  // Specify the width of the image
  height={800} // Specify the height of the image
          />
          <h3 className={styles.imageHeading}>Username</h3>
          <p className={styles.imageDescription}>Profession</p>
          <div className={styles.socialLinks}>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </Link>
          </div>
        </div>
        <div className={styles.imageItem}>
          <Image
            className={styles.image}
            src="/newgpic2.jpg"  // Replace with the path to your image
            alt="Image 2"
            width={100}  // Specify the width of the image
  height={800} // Specify the height of the image
          />
          <h3 className={styles.imageHeading}>Username</h3>
          <p className={styles.imageDescription}>Profession</p>
          <div className={styles.socialLinks}>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </Link>
          </div>
        </div>
      
        <div className={styles.imageItem}>
          <Image
            className={styles.image}
            src="/newbpic.jpg"  // Replace with the path to your image
            alt="Image 3"
            width={100}  // Specify the width of the image
  height={800} // Specify the height of the image
          />
          <h3 className={styles.imageHeading}>Username</h3>
          <p className={styles.imageDescription}>Profession</p>
          <div className={styles.socialLinks}>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </Link>
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
    

    <div className='mt-24 ml-32 mr-10  px-5 bg-white'>
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-16 ml-26 mr-24'>
    {/* Image 2 */}
    <Image 
      src="/fa-brands-1.png" 
      alt="Image 2" 
      width={153}  // Specify width for aspect ratio
      height={34}  // Specify height for aspect ratio
      layout="responsive"  // Makes the image take 100% width and adjusts the height automatically
      className='object-cover mr-6' 
    />
    {/* Image 3 */}
    <Image 
      src="/fa-brands-2.png" 
      alt="Image 3" 
      width={83}  
      height={59} 
      layout="responsive" 
      className='object-cover' 
    />
    {/* Image 4 */}
    <Image 
      src="/fa-brands-3.png" 
      alt="Image 4" 
      width={102}  
      height={75} 
      layout="responsive" 
      className='object-cover' 
    />
    {/* Image 5 */}
    <Image 
      src="/fa-brands-4.png" 
      alt="Image 5" 
      width={151}  
      height={42} 
      layout="responsive" 
      className='object-cover' 
    />
    {/* Image 6 */}
    <Image 
      src="/fa-brands-5.png" 
      alt="Image 5" 
      width={103.68}  
      height={61.75} 
      layout="responsive" 
      className='object-cover' 
    />
    {/* Image 1 */}
    <Image 
      src="/Vector.png" 
      alt="Image 1" 
      width={75.75}  
      height={71.86} 
      layout="responsive" 
      className='object-cover' 
    />
  </div>
</div>


      <div className="flex h-screen mt-32">
      {/* Left Container */}
      <div className="w-1/2 bg-blue-500 p-8 flex flex-col justify-center">
        {/* Heading and Text Section */}
        <p className="text-1xl text-white font-bold">WORK WITH US</p>
        <h1 className="text-4xl font-bold text-white my-4">Now Let&apos;s grow Yours</h1>
        <p className="font-semibold text-white mb-6">
          The gradual accomulation of information about atomic and<br/>small-scale behaviour during the first quarter of the 20th
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 mt-5 rounded-md hover:bg-blue-800 font-bold text-base border-2 border-white">
  Button
</button>

      </div>

      {/* Right Container with Image */}
      <div className="w-1/2">
        <Image
          src="/pinkg.jpg" // Replace with the path to your image
          alt="Picture"
          width={1200}  // Specify the width of the image
  height={800} // Specify the height of the image
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    </main>
  );
};

export default About;
