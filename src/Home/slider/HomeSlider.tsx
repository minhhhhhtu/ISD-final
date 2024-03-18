import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

class HomeSlider extends React.Component {
  componentDidMount() {
    const rightArrow = document.querySelector(".right-arrow");
    const leftArrow = document.querySelector(".left-arrow");
    const roundSliders = document.querySelectorAll(".rounded-slider");

    if (leftArrow && rightArrow) {
      const slides = document.querySelectorAll(".slider-content");

      // Find the index of the slide with data-type="1" to set initial currentSlide
      let currentSlide = 1;
      slides.forEach((slide, index) => {
        if (slide.getAttribute("data-type") === "1") {
          currentSlide = index;
        }
      });

      leftArrow.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        this.showSlide(currentSlide);
      });

      rightArrow.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        this.showSlide(currentSlide);
      });
    }

    roundSliders.forEach((round, index) => {
      round.addEventListener("click", () => {
        this.showSlide(index);
      });
    });
  }

  showSlide(slideIndex) {
    const slides = document.querySelectorAll(
      ".slider-content"
    ) as NodeListOf<HTMLElement>;
    slides.forEach((slide, index) => {
      slide.style.display = index === slideIndex ? "flex" : "none";
    });

    const roundSliders = document.querySelectorAll(".rounded-slider");
    roundSliders.forEach((round, index) => {
      if (index === slideIndex) {
        round.classList.add("rounded-active");
      } else {
        round.classList.remove("rounded-active");
      }
    });
  }

  render() {
    return (
      <>
        <div className="slider h-[530px] mb-24 flex justify-center items-center">
          <div className="left-arrow arrow-slider">
            <FontAwesomeIcon
              className="cursor-pointer items-center"
              icon={faArrowLeft}
            />
          </div>
          <div
            className="slider-content w-[70%] h-full bg-[url(https://i.pinimg.com/564x/73/3c/68/733c688bf6f725345c18190da00e159b.jpg)] bg-cover bg-no-repeat bg-center m-20"
            data-type="1"
          ></div>
          <div
            className="slider-content w-[70%] h-full bg-[url(https://i.pinimg.com/564x/b5/a5/6d/b5a56d5701db2e316a479495882ef0ce.jpg)] bg-cover bg-no-repeat bg-center m-20"
            data-type="2"
          ></div>
          <div className="right-arrow arrow-slider">
            <FontAwesomeIcon className="cursor-pointer" icon={faArrowRight} />
          </div>
        </div>
        <div className="slider-round flex flex-row justify-center items-center text-center mb-24">
          <div className="slider-round-1 rounded-slider rounded-active"></div>
          <div className="slider-round-2 rounded-slider rounded-active"></div>
        </div>
      </>
    );
  }
}

export default HomeSlider;
