import React, { useState } from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

class Products extends React.Component<{}, State> {
  constructor() {
    super({});
    this.state = {
      products: [
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
      ],
      showMore: false,
    };
  }

  toggleShowMore = () => {
    this.setState({
      showMore: !this.state.showMore,
    });
  };

  handleToggleMenu = (e) => {
    const buttonProducts = document.getElementsByClassName("lmt-breadcumbers");
    for (const buttonProduct of buttonProducts) {
      if (buttonProduct.contains(e.target)) {
        buttonProduct.classList.toggle("lmt-breadcumbers-active");
      } else {
        if (buttonProduct.classList.contains("lmt-breadcumbers-active")) {
          buttonProduct.classList.remove("lmt-breadcumbers-active");
        }
      }
    }
  };

  formatPrice(price) {
    return (
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      }).format(price) + " VND"
    );
  }

  render() {
    const { products, showMore } = this.state;
    const displayProducts = showMore ? products : products.slice(0, 8);

    return (
      <>
        {/* SUB HEADLINE */}
        <div className="subheadline flex">
          <div className="subheadline-deco-line"></div>
          <div className="subheadline-label">More Products</div>
          <div className="subheadline-deco-line"></div>
        </div>
        {/* END SUB HEADLINE */}

        {/* <!-- START TITLE --> */}
        <div className="title">
          <div className="flex flex-col justify-center items-center w-[95%] lg:w-[65%] mx-auto mb-16">
            <div className="page-headline mt-[100px] mb-[40px] leading-[2rem] lg:leading-[4rem]">
              <div className="w-full my-3 text-[#D94B4B] text-4xl font-normal leading-5 text-center">
                Hiện đang thịnh hành
              </div>
              <div className="text-[18px] text-slate-500 mb-4 text-center">
                Các sản phẩm được các khách hàng mua nhiều với đa số đều có phản
                hồi tốt
              </div>
            </div>
            <div className="lmt-subheadline flex">
              <div className="lmt-subheadline-label flex flex-row gap-2 lg:gap-8">
                <div
                  className="lmt-breadcumbers lmt-breadcumbers-active"
                  onClick={(e) => this.handleToggleMenu(e)}
                >
                  Đồ Bò
                </div>
                <div
                  className="lmt-breadcumbers"
                  onClick={(e) => this.handleToggleMenu(e)}
                >
                  Váy Đầm
                </div>
                <div
                  className="lmt-breadcumbers flex items-center"
                  onClick={(e) => this.handleToggleMenu(e)}
                >
                  Quần
                </div>
                <div
                  className="lmt-breadcumbers"
                  onClick={(e) => this.handleToggleMenu(e)}
                >
                  Trang sức
                </div>
                <div
                  className="lmt-breadcumbers"
                  onClick={(e) => this.handleToggleMenu(e)}
                >
                  Giảm giá
                </div>
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
                className="product-card w-full h-[370px] lg:h-[400px] px-3 pt-5 bg-white shadow-md rounded-md mb-10"
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
                      {this.formatPrice(product.price)}
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
                onClick={this.toggleShowMore}
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
}

export default Products;
