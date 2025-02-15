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
        <div className="story mt-24 lg:mt-40 lg:mb-40 pb-5">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-4 w-[95%] lg:w-[73%] mx-auto mb-10">
            <div className="content flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
              {/* Hình ảnh tối ưu */}
              <div className="basis-1/2">
                <picture>
                  <source
                    srcSet="
                      https://i.pinimg.com/736x/73/19/81/731981112ed00704cdeae414e9d3026a_small.webp 300w,
                      https://i.pinimg.com/736x/73/19/81/731981112ed00704cdeae414e9d3026a_medium.webp 600w,
                      https://i.pinimg.com/736x/73/19/81/731981112ed00704cdeae414e9d3026a.webp 1200w
                    "
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 600px, 1200px"
                    type="image/webp"
                  />
                  <img
                    src="https://i.pinimg.com/736x/73/19/81/731981112ed00704cdeae414e9d3026a.jpg"
                    srcSet="
                      https://i.pinimg.com/736x/73/19/81/731981112ed00704cdeae414e9d3026a_small.jpg 300w,
                      https://i.pinimg.com/736x/73/19/81/731981112ed00704cdeae414e9d3026a_medium.jpg 600w,
                      https://i.pinimg.com/736x/73/19/81/731981112ed00704cdeae414e9d3026a.jpg 1200w
                    "
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 600px, 1200px"
                    alt="Fashion"
                    className="w-[300px] h-[100px] lg:w-full lg:h-full object-cover min-h-[350px] rounded-lg"
                    width="600" // Sử dụng chiều rộng lớn nhất của hình ảnh ở đây
                    height="400" // Sử dụng chiều cao lớn nhất của hình ảnh ở đây
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
              </div>

              {/* Nội dung */}
              <div className="basis-1/2 mt-12 lg:mt-0 text-center lg:text-left lg:pl-6">
                {/* ... (Nội dung không thay đổi) */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeStory;
