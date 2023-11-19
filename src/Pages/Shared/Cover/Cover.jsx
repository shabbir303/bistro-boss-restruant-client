/* eslint-disable react/prop-types */
import Tilt from 'react-parallax-tilt';
// import './ParallaxEffect.demozap.scss';
const Cover = ({image, title, des}) => {
  return (
    <div>
      <Tilt className="parallax-effect" perspective={400}>
      <div
        
        className="hero h-[700px] max-w-7xl mx-auto inner-element"
        style={{
          backgroundImage:
            `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 font-cinzel"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold font-cinzel">{title}</h1>
            <p className="mb-5">
              {des}
            </p>
            
          </div>
        </div>
      </div>
      </Tilt>
    </div>
  );
};

export default Cover;

    <div className="inner-element">
      <div>React</div>
      <div>Parallax Tilt</div>
      <div>👀</div>
    </div>
  