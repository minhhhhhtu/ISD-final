import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

interface Product {
  id: number;
  name: string;
  url: string;
  price: number;
  viewer: string;
  onSale?: boolean;
  priceOnSale: number;
}

type FavListProductProps = {
  products: Product[];
};

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const keyIndex = index + 1;
        return (
          <button
            type="button"
            key={keyIndex}
            className={keyIndex <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(keyIndex)}
            onMouseEnter={() => setHover(keyIndex)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}

const FavListProduct: React.FC<FavListProductProps> = () => {
  // Declare the type of the state as Product[]
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  useEffect(() => {
    const favProducts = JSON.parse(localStorage.getItem("favourites") || "[]");
    console.log(favProducts);
    setFavoriteProducts(favProducts);
  }, []);

  const handleDeleteFavoriteProduct = (product) => {
    const updatedFavProducts = favoriteProducts.filter(
      (favProduct) => favProduct.id !== product.id
    );
    setFavoriteProducts(updatedFavProducts);
    localStorage.setItem("favourites", JSON.stringify(updatedFavProducts));
    toast.warning("Đã xóa sản phẩm khỏi danh sách yêu thích")
  };

  const formatPrice = function (price: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  return (
    <>
      <div className="title pb-5">
        <div className="flex flex-col justify-center items-center w-[95%] lg:w-[65%] mx-auto mb-2">
          <div className="page-headline mt-[100px] mb-[40px] leading-[4rem]">
            <h1 className="w-full my-3 text-[#D94B4B] text-4xl font-normal leading-5 text-center">
              Danh sách yêu thích
            </h1>
            <p className="text-[18px] text-slate-500 mb-4 text-center">
              Các sản phẩm được các khách hàng mua nhiều với đa số đều có phản
              hồi tốt
            </p>
          </div>
        </div>
      </div>

      <div className="feature-mugs w-[90%] lg:w-[80%] mx-auto mb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 h-auto">
          {favoriteProducts.map((product) => (
            <div
              key={product.id}
              className="product-card w-full h-[370px] lg:h-[420px] px-3 pt-5 bg-white shadow-md rounded-md mb-10"
            >
              <div
                className="relative w-full h-[150px] sm:h-[200px] rounded-md bg-cover bg-no-repeat bg-center mb-5"
                style={{ backgroundImage: `url(${product.url})` }}
              >
                <div
                  className="absolute top-2 left-2 cursor-pointer"
                  onClick={() => handleDeleteFavoriteProduct(product)}
                >
                  <FontAwesomeIcon className="" icon={faHeart} />
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="basic-1/2">
                  <h1 className="text-l lg:text-xl text-[#000] mb-5">
                    {product.name}
                  </h1>
                  <h1 className="text-xs text-[#000] mb-8">{product.viewer}</h1>
                  <h1 className="text-l lg:text-xl text-[#000]">
                    {formatPrice(product.price)}
                  </h1>
                </div>
                <div className="basic-1/2 flex flex-col justify-between items-center">
                  <StarRating />
                  <div className="text-s text-pinky-600 font-semibold">
                    Out of stock
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FavListProduct;
