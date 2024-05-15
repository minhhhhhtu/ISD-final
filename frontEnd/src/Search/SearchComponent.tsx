import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useProductContext } from "../ProductContext/ProductContext.tsx";
import HeaderLogin from "../HomeLoggedIn/HeaderLogin/HeaderLogin.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const StarRating = () => {
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
};

const SearchComponent = () => {
  const query = useQuery();
  const searchTerm = query.get("query");
  const { filteredProducts, loadStoredSearchResults } = useProductContext();
  const [favourites, setFavourites] = useState<number[]>([]);

  useEffect(() => {
    loadStoredSearchResults();
  }, [loadStoredSearchResults]);

  const getProductByNameOrId = (nameOrId: string | number) => {
    return filteredProducts.find(
      (product) => product.name === nameOrId || product.id === nameOrId
    );
  };

  const toggleFavourite = (nameOrId: string | number) => {
    const product = getProductByNameOrId(nameOrId);
    if (!product) {
      return; // Handle the case where the product isn't found
    }

    const productIndex = favourites.findIndex((fav) => fav.id === product.id);

    let updatedFavourites: any[];
    let isFavorited = false;

    if (productIndex >= 0) {
      // Product is already favorited, remove it
      updatedFavourites = favourites.filter((fav) => fav.id !== product.id);
      toast.warning("Đã xóa sản phẩm khỏi danh sách yêu thích");
    } else {
      // Product is not favorited, add it
      updatedFavourites = [...favourites, product];
      isFavorited = true;
      toast.success("Đã thêm sản phẩm vào danh sách yêu thích");
    }

    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));

    const heartIcon = document.getElementById(`heartIcon-${product.id}`);
    if (heartIcon) {
      if (isFavorited) {
        localStorage.setItem("activeHeartId", product.id.toString()); // Store active ID
        heartIcon.classList.add("text-red-600");
      } else {
        localStorage.removeItem("activeHeartId"); // Remove on unfavorite
        heartIcon.classList.remove("text-red-600");
      }
    }
  };

  const handClickBuyNow = (nameOrId: string | number) => {
    const product = getProductByNameOrId(nameOrId);
    if (!product) {
      return; // Handle the case where the product isn't found
    }

    // Save product details to localStorage
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  };

  const formatPrice = (price: number) => {
    return (
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      }).format(price) + " VND"
    );
  };

  useEffect(() => {
    const storedFavouritesJson = localStorage.getItem("favourites");
    const favoritedIdsJson = localStorage.getItem("favoritedIds");

    const favoritedIds = favoritedIdsJson ? JSON.parse(favoritedIdsJson) : [];

    if (storedFavouritesJson) {
      try {
        const storedFavourites = JSON.parse(storedFavouritesJson);
        setFavourites(storedFavourites);
      } catch (error) {
        console.error("Failed to parse stored favourites:", error);
      }
    } else {
      console.error("No stored favourites found");
    }

    favoritedIds.forEach((id: number) => {
      const heartIcon = document.getElementById(`heartIcon-${id}`);
      if (heartIcon) {
        heartIcon.classList.add("text-red-600");
      }
    });
  }, []);

  return (
    <div>
      <HeaderLogin />
      <div className="content-wrapper font-Karla max-w-screen-2xl text-base mx-auto mt-24">
        {/* Search Result */}
        <div className="line flex justify-center items-center w-full h-16 bg-gradient-to-r from-pinky-50 to-pinky-600 mb-10">
          <div className="box-container flex justify-center items-center w-[20%] h-12 bg-white rounded-full">
            <h1 className=" text-xl text-[#FF9894] font-semibold text-center">
              Search Results for "{searchTerm}"
            </h1>
          </div>
        </div>

        <div className="feature-mugs w-[90%] lg:w-[80%] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 h-auto">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card w-full h-[370px] lg:h-[450px] px-3 pt-5 bg-white shadow-md rounded-md mb-10"
              >
                <div
                  className="relative w-full h-[150px] sm:h-[200px] rounded-md bg-cover bg-no-repeat bg-center mb-5"
                  style={{ backgroundImage: `url(${product.url})` }}
                >
                  <div
                    id={`heartIcon-${product.id}`}
                    className={`absolute top-2 left-2 cursor-pointer drop-shadow-2xl ${
                      product.isFavorite ? "text-red-600" : ""
                    }`}
                    onClick={() => toggleFavourite(product.id)}
                  >
                    <FontAwesomeIcon
                      className=" hover:opacity-85 active:opacity-90"
                      icon={faHeart}
                    />
                  </div>
                </div>

                <div className="flex flex-row justify-between mb-5">
                  <div className="basic-1/2">
                    <h1 className=" text-l lg:text-xl text-[#000] mb-5">
                      {product.name}
                    </h1>
                    <h1 className=" text-xs text-[#000] mb-8">
                      {product.viewer}
                    </h1>
                    <h1 className=" text-l lg:text-xl text-[#000]">
                      {formatPrice(product.price)}
                    </h1>
                  </div>
                  <div className="basic-1/2 flex flex-col justify-between items-center">
                    <div>{<StarRating />}</div>
                    <div className="text-s text-pinky-600 font-semibold">
                      Out of stock
                    </div>
                  </div>
                </div>

                <NavLink
                  to={`/product/${product.name}`}
                  onClick={() => handClickBuyNow(product.id)}
                  className="buttonBuyNow flex justify-center items-center w-full h-12 rounded-xl bg-white border-2  border-red-600 text-pinky-600 hover:opacity-70 active:opacity-90 font-semibold cursor-pointer"
                >
                  MUA NGAY
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        {/* END MORE PRODUCTS */}
      </div>
    </div>
  );
};

export default SearchComponent;
