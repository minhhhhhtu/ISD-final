import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeSlider.css";

interface State {
  currentSlide: number;
  images: { id: number; name: string; url: string }[];
}

class HomeSlider extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentSlide: 0,
      images: [
        {
          id: 1,
          name: "Image 1",
          url: "https://4kwallpapers.com/images/walls/thumbs_3t/548.jpg",
        },
        {
          id: 2,
          name: "Image 2",
          url: "https://4kwallpapers.com/images/walls/thumbs_3t/15250.jpg",
        },
        {
          id: 3,
          name: "Image 3",
          url: "https://4kwallpapers.com/images/walls/thumbs_3t/6629.jpeg",
        },
      ],
    };
  }

  render() {
    const { images } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="slider w-[100%] h-[530px] mx-auto mb-24">
        <Slider {...settings}>
          {images.map((image) => (
            <div
              key={image.id}
            >
              <img
                className="h-[400px] sm:h-[540px] mx-auto"
                src={image.url}
                alt={image.name}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default HomeSlider;
