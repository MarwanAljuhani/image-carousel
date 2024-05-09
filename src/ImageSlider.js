import { useState } from "react";
import "./imageSlider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 2;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="sliderContainer">
      <div className="SlideContainer">
        <div className="imgContainer">
          <img src={slides[currentIndex]} />
        </div>
      </div>
      <div className="btunContainer">
        <button className="arrows" onClick={goToPrevious}>
          ⬅️ left
        </button>
        {currentIndex + 1} / {slides.length}
        <button className="arrows" onClick={goToNext}>
          ➡️
        </button>
      </div>
    </div>
  );
};
export default ImageSlider;
