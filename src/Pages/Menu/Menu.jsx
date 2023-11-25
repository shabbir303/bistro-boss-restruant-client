import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import img from "../../assets/banner.jpg";
import Today from "./Today";
import Dessert from "./Dessert";
import Pizza from "./Pizza";
import Salad from "./Salad";
import Soup from "./Soup";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu</title>
      </Helmet>
      <Cover
        image={img}
        title="OUR MENU"
        des="Would you like to try a dish?"
      ></Cover>
      <div className="my-[100px]">
        <Today></Today>
      </div>
      <div className="mb-[100px]">
        <Dessert></Dessert>
      </div>
      <div className="mb-[100px]">
        <Pizza></Pizza>
      </div>
      <div className="mb-[100px]">
        <Salad></Salad>
      </div>
      <div className="mb-[100px]">
        <Soup></Soup>
      </div>
    </div>
  );
};

export default Menu;
