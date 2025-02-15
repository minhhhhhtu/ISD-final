import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class HomeStory extends React.Component<{}> {
  render(): React.ReactNode {
    return (
      <div>
        {/* Preload LCP image */}
        <link
          rel="preload"
          as="image"
          href="https://i.pinimg.com/736x/73/19/81/731981112ed00704cdeae414e9d3026a.jpg"
          fetchPriority="high"
        />

        <div className="story mt-24 lg:mt-40 lg:mb-40 pb-5">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-4 w-[95%] lg:w-[73%] mx-auto mb-10">
            <div className="content flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
              {/* Hình ảnh tối ưu */}
              <div className="basis-1/2">
                <picture>
                  <source
                    srcSet="https://i.pinimg.com/736x/73/19/81/731981112ed00704cdeae414e9d3026a.webp"
                    type="image/webp"
                  />
                  <img
                    src="https://i.pinimg.com/736x/73/19/81/731981112ed00704cdeae414e9d3026a.jpg"
                    alt="Fashion"
                    className="w-[300px] h-[100px] lg:w-full lg:h-full object-cover min-h-[350px] rounded-lg"
                    width="600"
                    height="400"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
              </div>

              {/* Nội dung */}
              <div className="basis-1/2 mt-12 lg:mt-0 text-center lg:text-left lg:pl-6">
                <div className="mb-6 text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-7 sm:leading-8 md:leading-9 lg:leading-10 text-pinky-600 font-semibold">
                  Discover and Find Your Own Fashion!
                </div>
                <div className="mb-6 leading-7 text-pinky-400">
                  Explore our curated collection of stylish clothing and
                  accessories tailored to your unique taste.
                </div>

                {/* Nút điều hướng */}
                <div className="flex flex-row justify-center items-center gap-8">
                  <NavLink
                    to="/login"
                    className="basis-1/2 max-w-[200px] w-full h-10 flex justify-center bg-[#FFF] border-2 border-pinky-600 rounded-full text-center items-center text-pinky-600 shadow-2xl cursor-pointer hover:bg-pinky-600 hover:text-[#FFF] duration-500"
                  >
                    Đăng nhập
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="basis-1/2 max-w-[200px] w-full h-10 flex justify-center bg-pinky-600 rounded-full text-center items-center text-white shadow-2xl cursor-pointer hover:bg-[#FFF] hover:border-2 hover:border-pinky-600 hover:text-pink-600 duration-500"
                  >
                    Đăng ký
                    <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeStory;
