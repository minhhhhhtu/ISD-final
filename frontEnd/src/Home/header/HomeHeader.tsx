import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const HomeHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const topMenuRef = useRef<HTMLUListElement | null>(null);
  
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

  return (
    <>
      <header className="p-6 mx-auto">
        <nav className="flex flex-row relative justify-between items-center">

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

          <div className="search-box flex basis-1/3">
            <form action="/search" className="searchform-product relative w-[70%] h-10 border-2 rounded-full border-slate-500 border-solid">
              <button className="iconSearch absolute padding-0 top-1 left-0 bottom-0 w-[55px] transition-opacity">
                <FontAwesomeIcon className="mr-5 p-1 " icon={faMagnifyingGlass} />
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
    </>
  );
};

export default HomeHeader;
