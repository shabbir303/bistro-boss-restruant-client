// import { Carousel } from "flowbite-react";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import image1 from "../../assets/01.jpg"
import image2 from "../../assets/02.jpg"
import image3 from "../../assets/03.png"
import image4 from "../../assets/04.jpg"
import image5 from "../../assets/05.png"
import image6 from "../../assets/06.png"

const Slider = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div>
      <div ref={sliderRef} className="keen-slider max-w-7xl mx-auto">
        <div className="keen-slider__slide number-slide1"><img src={image1} alt="" /> </div>
        <div className="keen-slider__slide number-slide1"><img src={image2} alt="" /> </div>
        <div className="keen-slider__slide number-slide1"><img src={image3} alt="" /> </div>
        <div className="keen-slider__slide number-slide1"><img src={image4} alt="" /> </div>
        <div className="keen-slider__slide number-slide1"><img src={image5} alt="" /> </div>
        <div className="keen-slider__slide number-slide1"><img src={image6} alt="" /> </div>
     
      </div>
    </div>
  );
};

export default Slider;
