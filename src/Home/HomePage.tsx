import React from "react";
import "./HomePage.css";
import Header from "./header/HomeHeader.tsx";

class HomePage extends React.Component {
  state: [
    {},
  ];

  render() {
    return (
      <>
        <div className="content-wrapper font-Karla max-w-screen-2xl text-base mx-auto px-8">
          <Header/>
        </div>
      </>
    );
  }
}
export default HomePage;
