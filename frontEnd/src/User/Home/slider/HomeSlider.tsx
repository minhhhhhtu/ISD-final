import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import CountdownTimer from "./CountDownTimer/CountdownTimer.tsx";
import "./HomeSlider.css";

const HomeSlider = (props) => {
  const slideRef = props.slideRef;

  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");

    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const deadline = new Date('2024-04-15T10:00:00');

  const data = [
    {
      id: 1,
      imgUrl: "https://i.pinimg.com/564x/68/17/16/681716445182e01635976926b5cbf08a.jpg",
      desc: "Some beautiful lifestyle cannot be discovered without getting loss.",
      name: "30% SALE",
    },
    {
      id: 2,
      imgUrl:
        "https://i.pinimg.com/564x/fd/68/a7/fd68a7918b64bfb2d7ea1a516a4b007d.jpg",
      desc: "Some beautiful lifestyle cannot be discovered without getting loss.",
      name: "30% SALE",
    },
    {
      id: 3,
      imgUrl:
        "https://i.pinimg.com/736x/f2/7b/b2/f27bb2560be3b38ed75da4f0f6661f18.jpg",
      desc: "Some beautiful lifestyle cannot be discovered without getting loss.",
      name: "30% SALE",
    },
    {
      id: 5,
      imgUrl: "https://i.pinimg.com/564x/c8/15/f5/c815f5e90d7da8d3f9ede65090252e26.jpg",
      desc: "Some beautiful lifestyle cannot be discovered without getting loss.",
      name: "30% SALE",
    },
    {
      id: 6,
      imgUrl:
        "https://i.pinimg.com/564x/84/21/f5/8421f5fbe85d69b3ae737a873c63871d.jpg",
      desc: "Some beautiful lifestyle cannot be discovered without getting loss.",
      name: "30% SALE",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center lg:w-[80%] mx-auto mb-36 gap-8">
      <div className="basis-2/4 flex flex-col justify-center items-center gap-16">
        <div className="basis-1/2 w-full h-full text-center text-pinky-600">
          <h1 className="text-3xl font-bold text-[#D94B4B]">Khuyến mãi</h1>
          <p className="font-semibold">
            Chương trình khuyến mãi được áp dụng cả ở cửa hàng và trên website
            trực tuyến
          </p>
          <div className="flex justify-center items-center text-center">
            <div className="buyButton flex justify-center mt-5 items-center rounded  w-[120px] h-[40px] bg-pinky-600 text-white shadow-md">
              Mua ngay
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col justify-center items-center w-full h-full">
        <h1 className="text-[#D94B4B] text-xl">Số lượng có hạn</h1>
        {<CountdownTimer deadline={deadline} />}
        </div>
      </div>
      <div className="basis-2/4 container">
        <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
        <div id="slide" ref={slideRef}>
          {data.map((item) => (
            <div
              key={item.id}
              className="item"
              style={{ backgroundImage: `url(${item.imgUrl})` }}
            >
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="des">{item.desc}</div>
                <button>See more</button>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button id="prev" onClick={handleClickPrev}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button id="next" onClick={handleClickNext}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
