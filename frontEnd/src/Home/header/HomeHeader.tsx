import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import "./HomeHeader.css";

interface Product {
  id: number;
  name: string;
  url: string;
  price: number;
  onSale?: boolean;
  priceOnSale: number;
}

interface State {
  products: Product[];
  showMore: boolean;
}

const HomeHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const topMenuRef = useRef<HTMLUListElement | null>(null);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isActive &&
        topMenuRef.current &&
        !topMenuRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };
    const handleTouchOutside = (event: TouchEvent) => {
      if (
        isActive &&
        topMenuRef.current &&
        !topMenuRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("touchstart", handleTouchOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchstart", handleTouchOutside);
    };
  }, [isActive]);

  const handleToggleMenu = (e) => {
    const topMenu = document.getElementById("top-menu");
    const toggleTopMenuIcon = document.getElementById("toggle-top-menu-icon");
    if (toggleTopMenuIcon?.contains(e.target)) {
      topMenu?.classList.toggle("hidden");
      topMenu?.classList.toggle("ct-menu-top-header-expanded");
      toggleTopMenuIcon.classList.toggle("ct-menu-top-header-expanded");
    } else {
      if (topMenu?.classList.contains("ct-menu-top-header-expanded")) {
        topMenu.classList.remove("ct-menu-top-header-expanded");
        topMenu.classList.add("hidden");
        toggleTopMenuIcon?.classList.remove("ct-menu-top-header-expanded");
      }
    }
  };

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item);
  };

  const ProductList = () => {
    const [products, setProducts] = useState([
      {
        id: 1,
        name: "Degrey Balo Simili Nap Basic - SNAP",
        imgUrl:
          "https://i.pinimg.com/564x/ae/3a/fb/ae3afb000d14aa416ea16a5560484473.jpg",
        price: 350000,
        onSale: true,
        priceSale: 400000,
      },
      {
        id: 2,
        name: "Degrey Balo Leather Quốc Dân - BQDL",
        imgUrl:
          "https://i.pinimg.com/564x/ae/3a/fb/ae3afb000d14aa416ea16a5560484473.jpg",
        price: 300000,
        onSale: true,
        priceSale: 350000,
      },
      {
        id: 3,
        name: "Degrey Balo Leather Quốc Dân - LMT",
        imgUrl:
          "https://i.pinimg.com/564x/ae/3a/fb/ae3afb000d14aa416ea16a5560484473.jpg",
        price: 300000,
        onSale: false,
        priceSale: 0,
      },
      {
        id: 4,
        name: "Degrey Balo Leather Quốc Dân - LMT",
        imgUrl:
          "https://i.pinimg.com/564x/ae/3a/fb/ae3afb000d14aa416ea16a5560484473.jpg",
        price: 300000,
        onSale: false,
        priceSale: 0,
      },
    ]);

    return (
      <div>
        <ul id="myUl block w-full h-screen overflow-y-auto">
          {products.map((product) => {
            return (
              <>
                <li className="myLi block">
                  <a key={product.id} href="/product?key" className="products">
                    <div className="textContent">
                      <p className="name-product text-[16px]">{product.name}</p>
                      <div className="price flex flex-row">
                        {product.onSale ? (
                          <>
                            <p className="realPrice">{product.price} vnđ</p>
                            <p className="salePrice line-through text-slate-400 ml-5">
                              {product.priceSale} vnđ
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="realPrice">{product.price} vnđ </p>
                          </>
                        )}
                      </div>
                    </div>
                    <div
                      className="imgProduct w-[50px] h-[50px] ml-[15rem] bg-cover bg-black"
                      style={{ backgroundImage: `url(${product.imgUrl})` }}
                    ></div>
                  </a>
                </li>
              </>
            );
          })}
        </ul>

        <a
          href="/products"
          className="flex justify-center  mt-2 hover:text-pinky-400"
        >
          Product More
        </a>
      </div>
    );
  };

  const filterSearch = () => {
     var input, filter, ul, li, a, i, txtValue;
     input = document.getElementById("inputSearchAuto-3");
     filter = input.value.toUpperCase();
     ul = document.getElementById("myUl");
     li = document.getElementsByClassName("myLi");


     for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  };

  const [showProductList, setShowProductList] = useState(false);
  const toggleProductList = (e) => {
    e.preventDefault();
    setShowProductList(!showProductList);
  };

  return (
    <>
      <div className="fixed"></div>
      <header className="p-10 mx-auto my-[-10px]">
        <nav className="flex flex-row justify-between items-center fixed top-0 left-0 w-full h-[10%] z-50 bg-white">
          <div className="logo flex-1 basis-3/6 text-center text-xl font-semibold cursor-pointer">
            Melanie Fashion
          </div>
          <ul
            id="top-menu"
            ref={topMenuRef}
            className={`basis-3/6 ${
              isActive ? "" : "hidden"
            } lg:flex lg:items-center lg:justify-center lg:gap-8 uppercase text-sm text-pinky-600 font-medium`}
          >
            <li
              className={`ct-menu-top-header ${
                activeMenuItem === "home" ? "ct-menu-top-header-active" : ""
              }`}
            >
              <a href="/home" onClick={() => handleMenuItemClick("home")}>
                Home
              </a>
            </li>
            <li
              className={`ct-menu-top-header ${
                activeMenuItem === "women" ? "ct-menu-top-header-active" : ""
              }`}
            >
              <a href="#" onClick={() => handleMenuItemClick("dress")}>
                Dress
              </a>
            </li>
            <li
              className={`ct-menu-top-header ${
                activeMenuItem === "home" ? "ct-menu-top-header-active" : ""
              }`}
            >
              <a href="#" onClick={() => handleMenuItemClick("jackets")}>
                Jackets
              </a>
            </li>
            <li
              className={`ct-menu-top-header ${
                activeMenuItem === "home" ? "ct-menu-top-header-active" : ""
              }`}
            >
              <a href="#" onClick={() => handleMenuItemClick("jeans")}>
                Jeans
              </a>
            </li>
            <li
              className={`ct-menu-top-header ${
                activeMenuItem === "home" ? "ct-menu-top-header-active" : ""
              }`}
            >
              <a href="#" onClick={() => handleMenuItemClick("t-shirt")}>
                T-Shirt
              </a>
            </li>
          </ul>

          <div
            className="search-box flex basis-1/3"
            onClick={toggleProductList}
          >
            <form className="searchform-product relative w-[70%] h-10 border-2 rounded-full border-slate-500 border-solid">
              <button
                onClick={toggleProductList}
                className="iconSearch absolute padding-0 top-1 left-0 bottom-0 w-[55px] transition-opacity"
              >
                <FontAwesomeIcon
                  className="mr-5 p-1 "
                  icon={faMagnifyingGlass}
                />
              </button>
              <div className="search-inner ml-10">
                <input type="hidden" name="type" value={"product"} />
                <input
                  id="inputSearchAuto-3"
                  className="input-search outline-none absolute top-[6px]"
                  name="q"
                  autoComplete="off"
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  onKeyUp={filterSearch}
                />
              </div>
            </form>
          </div>
          <ul className="basis-3/6  lg:basis-1/6 ct-menu-cart-header flex justify-end lg:justify-start items-center ml-16 uppercase text-sm text-pinky-600 font-medium">
            <li className="ct-menu-top-header">
              <a href="/cart" className="flex items-center">
                <FontAwesomeIcon className="mr-2" icon={faShoppingCart} />
                <span className="w-[150%] rounded-xl bg-[#FFE3E1] text-pinky-600 mr-2">
                  99+
                </span>
              </a>
            </li>
          </ul>
          {/* MENU BAR */}
          <div
            className="basis-1/6 lg:hidden flex items-center cursor-pointer px-3 sm:px-8"
            onClick={handleToggleMenu}
          >
            <svg
              id="toggle-top-menu-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="lmt-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </nav>
      </header>
      {showProductList && (
        <div className="contentProduct animate-slideDown">
          <ProductList />
        </div>
      )}
    </>
  );
};

export default HomeHeader;
