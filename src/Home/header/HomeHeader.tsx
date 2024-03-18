import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class HomeHeader extends React.Component {
  render() {
    return (
      <>
        <header className="p-6 mx-auto">
          <nav className="flex flex-row relative justify-between items-center">
            <div className="logo basis-2/6 text-center text-xl font-semibold cursor-pointer">
              Melina Fashion
            </div>

            <ul
              id="top-menu"
              className="basis-3/6 hidden lg:flex lg:items-center lg:justify-end lg:gap-8 uppercase text-sm text-pinky-600 font-medium"
            >
              <li className="ct-menu-top-header">
                <a href="#">Home</a>
              </li>
              <li className="ct-menu-top-header">
                <a href="#">Women</a>
              </li>
              <li className="ct-menu-top-header">
                <a href="#">Women</a>
              </li>
              <li className="ct-menu-top-header">
                <a href="#">Women</a>
              </li>
              <li className="ct-menu-top-header">
                <a href="#">Women</a>
              </li>
              <li className="ct-menu-top-header">
                <a href="#">Women</a>
              </li>
            </ul>

            <ul className="basis-3/6  lg:basis-1/6 ct-menu-cart-header flex justify-end lg:justify-start items-center ml-16 uppercase text-sm text-pinky-600 font-medium">
              <li className="ct-menu-top-header">
                <a  onClick={() => {}} href="" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="lmt-icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>

                  <FontAwesomeIcon className="mr-2" icon={faShoppingCart} />
                  <span className="w-[150%] rounded-xl bg-[#FFE3E1] text-pinky-600 mr-2">
                    99+
                  </span>
                </a>
              </li>
            </ul>

            <div className="basis-1/6 lg:hidden flex items-center cursor-pointer px-3 sm:px-8">
              <svg
                id="toggle-top-menu-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="lmt-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default HomeHeader;
