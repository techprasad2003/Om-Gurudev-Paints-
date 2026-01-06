import React, { useEffect, useRef } from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg"; // Import the image for the header
import Image1 from "../images/image1.jpg";
import Image2 from "../images/image2.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const images = [Image1, Image2]; // Array of image URLs
    let currentIndex = 0;

    const slide = () => {
      if (sliderRef.current) {
        // Set the current image
        sliderRef.current.src = images[currentIndex];

        // Increment the index for the next image
        currentIndex = (currentIndex + 1) % images.length;

        // Repeat the sliding after 3 seconds
        setTimeout(slide, 3000);
      }
    };

    slide(); // Start the sliding animation

    // Clear the timeout when component unmounts
    return () => clearTimeout(slide);
  }, []);

  return (
    <Layout>
      <div className="home">
        {/* Header section */}
        <header style={{ backgroundImage: `url(${Banner})` }}>
          <div className="headerContent">
            <h1>Om Gurudev Paints</h1>
            <p>Your Vision, Our Colors</p>
            <Link to="/menu">
              <button>Check Products</button>
            </Link>
          </div>
        </header>
        {/* Sliding image container */}
        <div className="sliding-image-container">
          <img ref={sliderRef} src={Image1} alt="Sliding Image" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
