import React from "react";
import "./HomePage.css";
import Header from "./header/HomeHeader.tsx";
import HomeSlider from "./slider/HomeSlider.tsx"

class HomePage extends React.Component {
  state: [
    {},
  ];

  render() {
    return (
      <>
        <div className="content-wrapper font-Karla max-w-screen-2xl text-base mx-auto px-8">
          <Header/>
          <HomeSlider/>
        </div>
      </>
    );
  }
}
export default HomePage;
