import React from "react";
import HomeHeader from "../Home/header/HomeHeader.tsx";
import ContentProduct from "./Content/ContentProduct.tsx";
import RelateProduct from "./RelateProduct/RelateProduct.tsx";
import SeenProduct from "./SeenProduct/SeenProduct.tsx";
import Footer from "../Home/footer/Footer.tsx";

class DetailProductPage extends React.Component {
  render() {
    return (
      <>
        <div className="content-wrapper font-Karla max-w-screen-2xl text-base mx-auto">
          <HomeHeader />
          <ContentProduct />
          <RelateProduct />
          <SeenProduct />
          <Footer />
        </div>
      </>
    );
  }
}

export default DetailProductPage;
