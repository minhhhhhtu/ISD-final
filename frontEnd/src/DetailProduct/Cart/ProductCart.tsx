import React from "react";
import BreadCrumb from "../../Breadcumbs/Breadcumbs.tsx";
import TotalCart from "../TotalCart/TotalCart.tsx";

class ProductCart extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <BreadCrumb />
        <TotalCart />
      </>
    );
  }
}

export default ProductCart;
