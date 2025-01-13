
import React from 'react'
import Link from 'next/link'; 
import { MdArrowForwardIos } from "react-icons/md"; 
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; 
import styles from './style.module.css'; // This line is causing the error
 // Import the CSS module
const Pages = () => {
  return (
    <main>
     <div className="mt-8 flex justify-end items-center space-x-4 text-1xl font-bold text-pink-500">
      <span className="font-bold text-slate-600 mr-96 mb-5 ">WHAT WE DO</span>
      <span className="font-bold text-white mr-96 ">Companyyyyyyyyyyyyyyyyyyyyyy</span>
    </div>
    <div className=" flex items-center justify-center mt-3">
      <h1 className="text-6xl font-bold">Innovation tailored for you</h1>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '160px' , paddingTop:"32px", fontWeight:"bold" ,backgroundColor:""}}>
  {/* Link to homepage */}
  <Link href="/" style={{ textDecoration: 'none', marginRight: '0px' ,alignItems:"center",marginLeft:"96px",color:"white"}}>
    Homeeeeeeeeeeeeeeeeeeee
  </Link>
  <Link href="/" style={{ textDecoration: 'none', marginRight: '0px' ,alignItems:"center",marginLeft:"96px"}}>
    Home
  </Link>
  <MdArrowForwardIos className='text-gray-500 ml-2'/>
  {/* Link to shop page */}
  <Link href="/Team" style={{ textDecoration: 'none', marginLeft: '8px', color:"gray",alignItems:"center" }}>
    Team
  </Link>
</div>

<div className="flex space-x-1 h-screen mt-14">
      {/* First container (larger width) */}
      <div className="flex-1 bg-white p-4">
        <img
          src="/pagespic1.jpg"
          alt="Image 1"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Second container (two images stacked vertically) */}
      <div className="flex flex-col bg-white p-4 w-1/4">
        <img
          src="/pagespic2.jpg"
          alt="Image 2"
          className="w-full h-1/2 object-cover mb-4"
        />
        <img
          src="/pagespic4.jpg"
          alt="Image 3"
          className="w-full h-1/2 object-cover"
        />
      </div>

      {/* Third container (same as second container) */}
      <div className="flex flex-col bg-white p-4 w-1/4 ">
        <img
          src="/pagespic3.jpg"
          alt="Image 4"
          className="w-full h-1/2 object-cover mb-4"
        />
        <img
          src="/pagespic5.jpg"
          alt="Image 5"
          className="w-full h-1/2 object-cover"
        />
      </div>
    </div>
    <div className="flex justify-center items-center mt-24">
      {/* Heading and Text Section */}
      <div className="text-center">
        <h3 className="text-5xl mb-4 font-bold text-gray-700">Meet Our Team</h3>
        
      </div>
    </div>






    <div className={styles.coontainer}>
      {/* Three Images Container */}
      <div className={styles.imagesCoontainer}>
        <div className={styles.imageItem}>
          <img
            className={styles.image}
            src="/pagespic6.jpg"  // Replace with the path to your image
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
            src="/pagespic7.jpg"  // Replace with the path to your image
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
            src="/pagespic8.jpg"  // Replace with the path to your image
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
    <div className={styles.coontainer}>
      {/* Three Images Container */}
      <div className={styles.imagesCoontainer}>
        <div className={styles.imageItem}>
          <img
            className={styles.image}
            src="/pagespic11.jpg"  // Replace with the path to your image
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
            src="/pagespic9.jpg"  // Replace with the path to your image
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
            src="/pagespic10.jpg"  // Replace with the path to your image
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
    <div className={styles.coontainer}>
      {/* Three Images Container */}
      <div className={styles.imagesCoontainer}>
        <div className={styles.imageItem}>
          <img
            className={styles.image}
            src="/pagespic12.jpg"  // Replace with the path to your image
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
            src="/pagespic13.jpg"  // Replace with the path to your image
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
            src="/pagespic14.jpg"  // Replace with the path to your image
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

    <div className=" flex items-center justify-center mt-32">
      <h1 className="text-4xl font-bold">Start your 14 days free trial</h1>
    </div>
    <div className=" flex items-center justify-center mt-10">
      <p className="text-1xl font-bold text-slate-500">Met minim Mollie non desert Alamo est sit cliquey dolor </p>
      
    </div>
    <div className=" flex items-center justify-center ">
      <p className="text-1xl font-bold text-slate-500">   do met sent. RELIT official consequent.</p>
    </div>


    <div className="flex items-center justify-center mb-8">
      <div className="p-1 bg-gray-200 rounded-lg shadow-lg mb-auto mt-8">
        <Link href="/Shop">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Try it free now
          </button>
        </Link>
      </div>
    </div>
    <div className=" space-x-6 flex items-center justify-center mb-20">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 mb-auto"
      >
        <FaFacebook size={30} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700 mb-auto"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600 mb-auto"
      >
        <FaTwitter size={30} />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900 mb-auto"
      >
        <FaLinkedin size={30} />
      </a>
    </div>
    </main>
  )
}

export default Pages