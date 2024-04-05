import React, { useRef, useEffect } from 'react';


const HomeSlider: React.FC = () => {
  const buttonsRef = {
    prev: useRef<HTMLButtonElement>(null),
    next: useRef<HTMLButtonElement>(null),
  };
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const appBgContainerRef = useRef<HTMLDivElement>(null);
  const cardInfosContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { prev, next } = buttonsRef;
    const cardsContainerEl = cardsContainerRef.current;
    const appBgContainerEl = appBgContainerRef.current;
    const cardInfosContainerEl = cardInfosContainerRef.current;

    if (!prev.current || !next.current || !cardsContainerEl || !appBgContainerEl || !cardInfosContainerEl) return;

    const swapCards = (direction: string) => {
      const currentCardEl = cardsContainerEl.querySelector(".current--card");
      const previousCardEl = cardsContainerEl.querySelector(".previous--card");
      const nextCardEl = cardsContainerEl.querySelector(".next--card");

      const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
      const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
      const nextBgImageEl = appBgContainerEl.querySelector(".next--image");

      // Rest of the swapCards function implementation
    };

    prev.current.addEventListener("click", () => swapCards("left"));
    next.current.addEventListener("click", () => swapCards("right"));

    // Additional initialization code can go here

  }, []);

  return (
    <>
      <div className="app">
        <div className="cardList">
          <button className="cardList__btn btn btn--left" ref={buttonsRef.prev}>
            <div className="icon">
              <svg>
                <use xlinkHref="#arrow-left"></use>
              </svg>
            </div>
          </button>

          <div className="cards__wrapper" ref={cardsContainerRef}>
            {/* Your card elements go here */}
          </div>

          <button className="cardList__btn btn btn--right" ref={buttonsRef.next}>
            <div className="icon">
              <svg>
                <use xlinkHref="#arrow-right"></use>
              </svg>
            </div>
          </button>
        </div>

        <div className="infoList">
          <div className="info__wrapper" ref={cardInfosContainerRef}>
            {/* Your info elements go here */}
          </div>
        </div>

        <div className="app__bg" ref={appBgContainerRef}>
          {/* Your background image elements go here */}
        </div>
      </div>

      <div className="loading__wrapper">
        <div className="loader--text">Loading...</div>
        <div className="loader">
          <span></span>
        </div>
      </div>

      <svg className="icons" style={{ display: 'none' }}>
        <symbol
          id="arrow-left"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <polyline
            points="328 112 184 256 328 400"
            style={{
              fill: 'none',
              stroke: '#fff',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '48px',
            }}
          />
        </symbol>
        <symbol
          id="arrow-right"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <polyline
            points="184 112 328 256 184 400"
            style={{
              fill: 'none',
              stroke: '#fff',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '48px',
            }}
          />
        </symbol>
      </svg>

      <div className="support">
        <a href="https://twitter.com/DevLoop01" target="_blank">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="https://dribbble.com/devloop01" target="_blank">
          <i className="fab fa-dribbble"></i>
        </a>
      </div>
    </>
  );
}

export default HomeSlider;
