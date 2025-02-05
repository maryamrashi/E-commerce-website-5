import React from "react";

import Link from 'next/link';


const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#fff", // Set the background color to white
        color: "black", // Set the text color to black
        padding: "40px 20px",
      }}
    >
      <div
        className="footer-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {/* Company Info Section */}
<div className="footer-column" style={{ flex: 1, padding: "2px" }}>
  <h3 style={{ color: "white", fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
    C
  </h3> {/* Ensure heading is black */}
  <ul style={{ listStyleType: "none", padding: 0 }}>
    <li>
      <Link href="#" style={{ color: "white", textDecoration: "none", marginBottom: "8px" }}>
        A
      </Link>
    </li>
    <li>
      <Link href="#" style={{ color: "white", textDecoration: "none", marginBottom: "8px" }}>
        C
      </Link>
    </li>
    <li>
      <Link href="#" style={{ color: "white", textDecoration: "none", marginBottom: "8px" }}>
        W 
      </Link>
    </li>
    <li>
      <Link href="#" style={{ color: "white", textDecoration: "none", marginBottom: "8px" }}>
        B
      </Link>
    </li>
  </ul>
</div>
        
        {/* Company Info Section */}
<div className="footer-column" style={{ flex: 1, padding: "20px" ,marginLeft:"20px" }}>
  <h3 style={{ color: "black", fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>
    Company Info
  </h3> {/* Ensure heading is black */}
  <ul style={{ listStyleType: "none", padding: 0 }}>
    <li>
      <Link href="#" style={{ color: "black", textDecoration: "none", marginBottom: "8px" }}>
        About Us
      </Link>
    </li>
    <li>
      <Link href="#" style={{ color: "black", textDecoration: "none", marginBottom: "8px" }}>
        Careers
      </Link>
    </li>
    <li>
      <Link href="#" style={{ color: "black", textDecoration: "none", marginBottom: "8px" }}>
        We are hiring
      </Link>
    </li>
    <li>
      <Link href="#" style={{ color: "black", textDecoration: "none", marginBottom: "8px" }}>
        Blog
      </Link>
    </li>
  </ul>
</div>


        {/* Legal Section */}
        <div className="footer-column" style={{ flex: 1, padding: "20px" }}>
          <h3 style={{ color: "black" , fontSize:"16px", fontWeight:"bold" , marginBottom:"10px"}}>Legal</h3> {/* Ensure heading is black */}
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link href="#" style={{ color: "black", textDecoration: "none" }}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" style={{ color: "black", textDecoration: "none" }}>
                Carrier
              </Link>
            </li>
            <li>
              <Link href="#" style={{ color: "black", textDecoration: "none" }}>
                We are hiring
              </Link>
            </li>
            <li>
              <Link href="#" style={{ color: "black", textDecoration: "none" }}>
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Features Section */}
        <div className="footer-column" style={{ flex: 1, padding: "20px" }}>
          <h3 style={{ color: "black" , fontSize:"16px", fontWeight:"bold", marginBottom:"10px" }}>Features</h3> {/* Ensure heading is black */}
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link href="#" style={{ color: "black", textDecoration: "none" }}>
            Business Marketing 
              </Link>
            </li>
            <li>
              <Link href="#" style={{ color: "black", textDecoration: "none" }}>
                User Analytic
              </Link>
            </li>
            <li>
              <Link href="#" style={{ color: "black", textDecoration: "none" }}>
                Live Chat
              </Link>
            </li>
            <li>
              <Link href="#" style={{ color: "black", textDecoration: "none" }}>
                Unlimited Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="footer-column" style={{ flex: 1, padding: "20px" }}>
          <h3 style={{ color: "black" , fontSize:"16px", fontWeight:"bold", marginBottom:"10px" }}>Resources</h3> {/* Ensure heading is black */}
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link href="#" style={{ color: "black", textDecoration: "none" }}>
                IOS & Android
              </Link>
            </li>
            <li>
              <Link href="#" style={{ color: "black", textDecoration: "none" }}>
                Watch a Demo
              </Link>
            </li>
            <li>
              <Link href="#" style={{ color: "black", textDecoration: "none" }}>
                Customers
              </Link>
            </li>
            <li>
              <Link href="#" style={{ color: "black", textDecoration: "none" }}>
                API
              </Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch Section with Subscribe Button */}
        <div className="footer-column" style={{ flex: 1, padding: "20px" ,marginRight:"20px"}}>
          <h3 style={{ color: "black" , fontSize:"16px", fontWeight:"bold", marginBottom:"20px"}}>Get in Touch</h3> {/* Ensure heading is black */}
          <form
            action="#"
            method="post"
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "300px",
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              style={{
                padding: "10px",
                marginBottom: "10px",
                border: "1px solid #ddd",
                color: "black", // Set input text color to black
                backgroundColor: "#fff", // White background for input
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px",
                backgroundColor:"#29CEEB",
                color: "white", // Button text color remains white
                fontWeight:"bold",
                border: "none",
                cursor: "pointer",
                
              }}
            >
              Subscribe
            </button>
          </form>
          <p style={{ marginTop: "5px", color: "gray", fontWeight:"normal" }}>
            Lore imp sum dolor Amit
          </p>
        </div>
        {/* Get in Touch Section with Subscribe Button */}
        <div className="footer-column" style={{ flex: 1, padding: "20px" ,marginRight:"20px"}}>
          <h3 style={{ color: "white" , fontSize:"20px", fontWeight:"bold", marginBottom:"20px"}}>Get in Touch</h3> {/* Ensure heading is black */}
          <form
            action="#"
            method="post"
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "300px",
            }}
          >
            
            <button
              type="submit"
              style={{
                padding: "10px",
                backgroundColor:"white",
                color: "white", // Button text color remains white
                fontWeight:"bold",
                border: "none",
                cursor: "pointer",
                
              }}
            >
              Subscribe
            </button>
          </form>
          
        </div>
      </div>


      {/* Footer Bottom */}
      <div
        style={{
          
          marginTop: "40px",
          paddingTop: "20px",
          borderTop: "1px solid #444",
          paddingLeft:"42px"
        }}
      >
        <p style={{ fontSize: "18px", color: "gray", fontWeight:"bold", }}>
        Made With Love By Finland All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

