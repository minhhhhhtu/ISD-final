import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './HomeSlider.css'

interface State {
  currentSlide: number;
  images: { id: number; name: string; url: string }[];
}

class HomeSlider extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      images: [
        { id: 1, name: "Image 1", url: "https://4kwallpapers.com/images/walls/thumbs_3t/548.jpg" }, 
        { id: 2, name: "Image 2", url: "https://4kwallpapers.com/images/walls/thumbs_3t/15250.jpg" },
        { id: 3, name: "Image 3", url: "https://4kwallpapers.com/images/walls/thumbs_3t/6629.jpeg" },
      ],
    };
  }
 
  componentDidMount() {
    // No direct DOM manipulation needed here
  }

  showSlide(slideIndex) {
    this.setState({ currentSlide: slideIndex });
  }

  render() {
    const { images, currentSlide } = this.state;

    return (
      <>
        <div className="slider h-[530px] mb-24 flex justify-center items-center">
          <div className="left-arrow arrow-slider">
            <FontAwesomeIcon
              className="cursor-pointer items-center"
              icon={faArrowLeft}
              onClick={() => this.showSlide((currentSlide - 1 + images.length) % images.length)}
            />
          </div>
          <div className="slider-content m-20 items-center justify-center ">
            {images.map((item, index) => (
              <img className="max-w-full h-[500px] overflow-hidden" key={item.id} src={item.url} alt={item.name} data-type={index} style={{ display: index === currentSlide ? "flex" : "none" }} />
            ))}
          </div>
          <div className="right-arrow arrow-slider">
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faArrowRight}
              onClick={() => this.showSlide((currentSlide + 1) % images.length)}
            />
          </div>
        </div>
      </>
    );
  }
}

export default HomeSlider;