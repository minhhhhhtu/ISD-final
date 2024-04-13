import React from "react";

class BreadCrumb extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <div className="flex justify-start m-12 items-start text-black">
          <div className="">
            {" "}
            HOME || CART
          </div>
        </div>
      </>
    );
  }
}

export default BreadCrumb;
