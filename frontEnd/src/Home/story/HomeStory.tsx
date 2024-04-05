import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeStory.css";


class HomeStory extends React.Component<{}> {
  render(): React.ReactNode {
    return (
      <div>
        <div className="story bg-pinky-50 mt-12 mb-24 pb-5">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-4 w-[95%] lg:w-[73%] mx-auto mb-10">
            <div className="content flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
              <div className="basis-1/2">
                <div
                  className="w-full h-full object-cover min-h-[350px]
              bg-[url('https://i.pinimg.com/736x/73/19/81/731981112ed00704cdeae414e9d3026a.jpg')]
              bg-cover bg-no-repeat"
                ></div>
              </div>

              <div className="basis-1/2 text-center lg:text-left lg:pl-6">
                <div className="mb-6 text-5xl leading-10 text-pinky-600 font-semibold">
                  Discover and Find Your Own Fashion!
                </div>
                <div className="mb-6 leading-7 text-pinky-400">
                  Explore our curated collection of stylish clothing and
                  accessories tailored to your unique taste.
                </div>

                <div className=" w-[50%] h-10 flex justify-center bg-pinky-600 rounded-full text-center items-center text-white shadow-2xl cursor-pointer hover:bg-pinky-400 hover:text-pink-400 duration-500">
                  Read the full Story
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
