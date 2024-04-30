import React, { useEffect, useRef, useState } from "react";
import HomeHeader from "../HomeLoggedIn/HeaderLogin/HeaderLogin.tsx";
import Footer from "../Home/footer/Footer.tsx";
import { faHeart, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Product {
  id: number;
  name: string;
  url: string;
  price: number;
  viewer: string;
  onSale?: boolean;
  priceOnSale: number;
  isFavorite?: boolean;
}

function DetailProduct() {
  const [product, setProduct] = useState<Product | null>(null); // State to store product details

  /*handle get Item from LocalStorage*/

  useEffect(() => {
    // This function will be called when the component mounts
    const productFromStorage = localStorage.getItem("selectedProduct");
    if (productFromStorage) {
      setProduct(JSON.parse(productFromStorage)); // Set product if found in localStorage
    } else {
      // Handle case where no product is found in localStorage
      console.log("No product found in localStorage.");
    }
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount
  const style = {
    backgroundImage: `url(${product?.url})`,
  };

  function formatPrice(price) {
    return (
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      }).format(price) + " VND"
    );
  }

  const imgRef = useRef<HTMLDivElement>(null);

  const handleClickZoomIn = () => {
    const img = imgRef.current;
    if (img) {
      const isZoomed = img.style.transform === "scale(1.5) translate(30%, 0%)";
      img.style.transform = isZoomed ? "scale(1) translate(0, 0)" : "scale(1.5) translate(30%, 0%)";
    }
  };

  return (
    <>
      <div className="content-wrapper font-Karla max-w-screen-2xl text-base mx-auto">
        <HomeHeader />
        {product ? (
          <div className=" max-w-full my-24">
            {/*SLIDER*/}
            <div className="Slider flex justify-center items-center w-full h-12 shadow-md bg-pinky-200 text-xl text-[#FF9494] italic font-bold uppercase mb-5">
              Buy more pay less, áp dụng khi mua 2 sản phẩm
            </div>

            {/*Detail*/}
            <div className="flex flex-col justify-center items-start w-[95%] lg:w-[70%] mx-auto">
              {/*BREADCUMBS*/}
              <div className="flex flex-row justify-start items-start text-[#FF9494] text-l italic mb-2">
                <p>Home ||</p>
                <p className="ml-3">Product ||</p>
                <p className="font-bold ml-3"> {product.name}</p>
              </div>
              {/*LINE*/}
              <div className="w-full h-[2px] bg-gradient-to-r from-pinky-50 to-pinky-600 mb-10"></div>
              {/*IMAGE && PRICE && INFORMATION*/}

              <div className="flex flex-row w-full h-[625px] gap-x-10 uppercase">
                {/*IMAGE*/}
                <div
                  ref={imgRef}
                  className="basis-4/6 relative w-full h-full bg-black bg-cover bg-center shadow-2xl"
                  style={{ transition: "transform 0.3s ease", backgroundImage: `url(${product.url})`}}
                >
                  <div
                    onClick={handleClickZoomIn}
                    className="iconZoomIn hidden lg:block absolute text-[#FF9494] text-3xl bottom-5 right-5 cursor-pointer hover:opacity-90"
                  >
                    <FontAwesomeIcon icon={faSearchPlus} />
                  </div>
                </div>
                {/*PRICE && INFORMATION*/}
                <div className="basis-3/6 flex flex-col w-full text-[#FF9494]">
                  <div className="productName  text-2xl font-bold my-3">
                    {product.name}
                  </div>

                  <div className="flex flex-row justify-between items-center  my-3">
                    <div className="eCode text-l">
                      Mã sản phẩm:{" "}
                      <span className="text-xl font-semibold ml-2">
                        {product.id}
                      </span>
                    </div>
                    <div className="condition text-l">
                      Tình Trạng:{" "}
                      <span className="text-xl font-semibold ml-2">
                        Like New
                      </span>
                    </div>
                  </div>

                  <div className="text-2xl text-[#FF9494] font-bold my-3">
                    {formatPrice(product.price)}
                  </div>

                  {/*SIZE*/}
                  <div
                    className="flex flex-col my-3 cursor-pointer"
                    aria-required
                  >
                    <div className="w-full h-[2px] bg-gradient-to-r from-pinky-50 to-pinky-600 mb-8"></div>
                    <ul className="outline-none flex flex-row justify-start text-center gap-5">
                      <li className="size-s w-[40px] h-[40px] border-2 border-red-400 pt-1 text-[#FF9494] uppercase">
                        s
                      </li>
                      <li className="size-m w-[40px] h-[40px] border-2 border-red-400 pt-1 text-[#FF9494] uppercase">
                        m
                      </li>
                      <li className="size-l w-[40px] h-[40px] border-2 border-red-400 pt-1 text-[#FF9494] uppercase">
                        l
                      </li>
                    </ul>
                    <div className="w-full h-[2px] bg-gradient-to-r from-pinky-50 to-pinky-600 mt-8"></div>
                  </div>

                  {/*QUANTITY*/}
                  <div className="flex flex-col gap-5 my-3">
                    <label htmlFor="products" className="text-xl font-bold">
                      Số lượng
                    </label>
                    <select
                      className="border-2 border-[#FF9494] p-3 rounded-l outline-none hover:opacity-80 active:opacity-90"
                      name="quantity"
                      id="quantity"
                      required
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>

                  {/*BUTTON ADD TO CART AND FAVOURITE*/}
                  <div className="flex flex-row justify-between my-3">
                    <button
                      type="submit"
                      className="border-2 border-solid bg-pinky-600 text-white px-10 py-5 hover:opacity-80 active:opacity-90"
                    >
                      Thêm vào giỏ hàng
                    </button>

                    <button
                      type="submit"
                      className="favourite border-2 border-solid bg-pinky-600 text-white px-10 py-5 hover:opacity-80 active:opacity-90"
                    >
                      <FontAwesomeIcon className="text-3xl" icon={faHeart} />
                    </button>
                  </div>

                  {/*BUTTON PAY*/}
                  <button
                    type="submit"
                    className="border-2 border-solid bg-pinky-600 text-white px-10 py-5 hover:opacity-80 active:opacity-90 mt-3"
                  >
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>No product details available.</p>
        )}
        <Footer />
      </div>
    </>
  );
}

export default DetailProduct;
