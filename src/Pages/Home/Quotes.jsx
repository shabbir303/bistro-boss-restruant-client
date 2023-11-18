/* eslint-disable react/no-unescaped-entities */
import image from "../../assets/banner.jpg";
const Quotes = () => {
  return (
    <div className="max-w-7xl mx-auto relative">
      <img src={image} alt="" />
      <div className="absolute  top-[150px] left-[85px] bg-white py-[170px] px-[150px]">
        <h1 className="text-center text-[45px] font-cinzel font-[600] ">
          Bistro Boss
        </h1>
        <p className="text-teal-500 italic">
          "The aromas wafting from Bistro Boss' kitchen are like an irresistible
          siren call, luring you in for a culinary adventure."
        </p>
      </div>
    </div>
  );
};

export default Quotes;
