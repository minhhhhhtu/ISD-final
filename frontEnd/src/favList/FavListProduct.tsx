import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface Product {
  id: number;
  name: string;
  url: string;
  price: number;
  viewer: string;
  onSale?: boolean;
  priceOnSale: number;
}

interface State {
  products: Product[];
  showMore: boolean;
}

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}

function FavListProduct() {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Image 1",
      url: "https://4kwallpapers.com/images/walls/thumbs_3t/548.jpg",
      price: 60.0,
      viewer: "(4.1k) Customer Reviews",
      onSale: true,
      priceOnSale: 70.0,
    },
    {
      id: 2,
      name: "Image 2",
      url: "https://4kwallpapers.com/images/walls/thumbs_3t/15250.jpg",
      price: 50.0,
      viewer: "(4.1k) Customer Reviews",
      onSale: false,
      priceOnSale: 0,
    },
    {
      id: 3,
      name: "Image 3",
      url: "https://4kwallpapers.com/images/walls/thumbs_3t/6629.jpeg",
      price: 50.0,
      viewer: "(4.1k) Customer Reviews",
      onSale: false,
      priceOnSale: 0,
    },
    {
      id: 4,
      name: "Image 4",
      url: "https://4kwallpapers.com/images/walls/thumbs_2t/5391.jpeg",
      price: 80.0,
      viewer: "(4.1k) Customer Reviews",
      onSale: true,
      priceOnSale: 70.0,
    },
    {
      id: 5,
      name: "Image 4",
      url: "https://4kwallpapers.com/images/walls/thumbs_2t/5391.jpeg",
      price: 80.0,
      viewer: "(4.1k) Customer Reviews",
      onSale: false,
      priceOnSale: 70.0,
    },
    {
      id: 6,
      name: "Image 4",
      url: "https://4kwallpapers.com/images/walls/thumbs_2t/5391.jpeg",
      price: 80.0,
      viewer: "(4.1k) Customer Reviews",
      onSale: true,
      priceOnSale: 70.0,
    },
    {
      id: 7,
      name: "Image 4",
      url: "https://4kwallpapers.com/images/walls/thumbs_2t/5391.jpeg",
      price: 80.0,
      viewer: "(4.1k) Customer Reviews",
      onSale: false,
      priceOnSale: 70.0,
    },
    {
      id: 8,
      name: "Image 4",
      url: "https://4kwallpapers.com/images/walls/thumbs_2t/5391.jpeg",
      price: 80.0,
      viewer: "(4.1k) Customer Reviews",
      onSale: false,
      priceOnSale: 70.0,
    },
    {
      id: 9,
      name: "Image 4",
      url: "https://4kwallpapers.com/images/walls/thumbs_2t/5391.jpeg",
      price: 80.0,
      viewer: "(4.1k) Customer Reviews",
      onSale: false,
      priceOnSale: 70.0,
    },
  ]);

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleToggleMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const buttonProducts = document.querySelectorAll(".lmt-breadcumbers");
    buttonProducts.forEach((buttonProduct) => {
      if (buttonProduct.contains(target)) {
        buttonProduct.classList.toggle("lmt-breadcumbers-active");
      } else {
        buttonProduct.classList.remove("lmt-breadcumbers-active");
      }
    });
  };

  const displayProducts = showMore ? products : products.slice(0, 8);

  const formatPrice = function (price: number) {
    return (
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      }).format(price) + " VND"
    );
  }

  return (
    <>
      {/* <!-- START TITLE --> */}
      <div className="title">
        <div className="flex flex-col justify-center items-center w-[95%] lg:w-[65%] mx-auto mb-2">
          <div className="page-headline mt-[100px] mb-[40px] leading-[4rem]">
            <div className="w-full my-3 text-[#D94B4B] text-4xl font-normal leading-5 text-center">
              Danh sách yêu thích
            </div>
            <div className="text-[18px] text-slate-500 mb-4 text-center">
              Các sản phẩm được các khách hàng mua nhiều với đa số đều có phản
              hồi tốt{" "}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END TITLE --> */}

      {/* MORE PRODUCTS */}
      <div className="feature-mugs w-[90%] lg:w-[80%] mx-auto mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 h-auto">
            {displayProducts.map((product) => (
              <div
                key={product.id}
                className="product-card w-full h-[370px] lg:h-[420px] px-3 pt-5 bg-white shadow-md rounded-md mb-10"
              >
                <div
                  className="w-full h-[150px] sm:h-[200px] rounded-md bg-cover bg-no-repeat bg-center mb-5"
                  style={{ backgroundImage: `url(${product.url})` }}
                ></div>

                <div className="flex flex-row justify-between">
                  <div className="basic-1/2">
                    <h1 className=" text-l lg:text-xl text-[#000] mb-5">
                      {" "}
                      {product.name}{" "}
                    </h1>
                    <h1 className=" text-xs text-[#000] mb-8">
                      {" "}
                      {product.viewer}{" "}
                    </h1>
                    <h1 className=" text-l lg:text-xl text-[#000]">
                      {" "}
                      {formatPrice(product.price)}
                    </h1>
                  </div>
                  <div className="basic-1/2 flex flex-col justify-between items-center">
                    <div>{<StarRating />}</div>
                    <div className="text-s text-pinky-600 font-semibold">
                      {" "}
                      Out of stock{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {products.length > 8 && (
            <div className="flex justify-center items-center mt-8">
              <button
                onClick={toggleShowMore}
                className="button bg-white text-pinky-600"
              >
                {showMore ? "Show Less" : "Show More Products"}
              </button>
            </div>
          )}
        </div>
      {/* END MORE PRODUCTS */}
    </>
  );
}

export default FavListProduct;
