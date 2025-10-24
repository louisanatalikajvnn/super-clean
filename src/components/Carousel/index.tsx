import { ComponentType, useState } from "react";
import "./style.css";

type CarouselProp = {
  items: any[];
  CarouselItem: ComponentType;
};
const Carousel = ({ items, CarouselItem }: CarouselProp) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    setActiveIndex((prev) => prev + 1);
  };

  return (
    <div className="carousel">
      {activeIndex !== 0 && (
        <div className="btn left-btn" onClick={goToPrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="arrow"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </div>
      )}

      {activeIndex !== items.length - 1 && (
        <div className="btn right-btn" onClick={goToNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="arrow"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      )}

      <div
        className="inner"
        style={{
          transform: `translate(-${activeIndex * 100}vw)`,
        }}
      >
        {items.map((item, index) => (
          <div className="caroussel-item-wrapper" key={index}>
            <CarouselItem {...item} style={{ margin: "auto" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
