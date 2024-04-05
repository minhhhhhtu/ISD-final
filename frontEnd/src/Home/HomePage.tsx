// Trong file HomePage.tsx

import React from "react";
import "./HomePage.css";
import Header from "./header/HomeHeader.tsx";
import HomeStory from "./story/HomeStory.tsx";
import HomeSlider from "./slider/HomeSlider.tsx";
import FeatureProducts from "./special/FeatureProducts.tsx";
import Products from "./products/Products.tsx";
import Parallax from "./parallax/Parallax.tsx";
import Subcribe from "./subcribes/Subcribe.tsx";
import Footer from "./footer/Footer.tsx";
class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className="content-wrapper font-Karla max-w-screen-2xl text-base mx-auto">
          <div className=" bg-pinky-50">
            <Header />
            <HomeStory />
          </div>
          <HomeSlider />
          <FeatureProducts />
          <Products />
          <Parallax />
          <Subcribe />
          <Footer />
        </div>
      </>
    );
  }
}

export default HomePage;
