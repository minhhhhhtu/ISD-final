import React from "react";
import "./HomePage.css";
import Header from "./header/HomeHeader.tsx";
import HomeSlider from "./slider/HomeSlider.tsx"
import FeatureProducts from "./special/FeatureProducts.tsx";
import Products from "./products/Products.tsx";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className="content-wrapper font-Karla max-w-screen-2xl text-base mx-auto px-8">
          <Header/>
          <HomeSlider/>
          <FeatureProducts/>
          <Products/>
        </div>
      </>
    );
  }
}
export default HomePage;
