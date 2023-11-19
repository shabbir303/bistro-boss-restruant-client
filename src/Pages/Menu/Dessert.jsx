import Cover from "../Shared/Cover/Cover";
import image from "../../assets/menu/dessert-bg.jpeg";
import { useEffect, useState } from "react";

const Dessert = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.filter((data) => data.category === "dessert");
        setMenu(filterData);
      });
  }, []);
//   console.log(menu);
  return (
    <div className="max-w-7xl mx-auto">
      <Cover
        image={image}
        title="DESSERTS"
        des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <div className="grid grid-cols-2 gap-[40px] mt-[50px]">
        {menu.map((menuItem) => (
          <div key={menuItem._id} className="flex justify-center items-center ">
            <img
              src={menuItem.image}
              alt=""
              className="w-[120px] h-[120px] object-cover rounded-[200px] rounded-tl-none "
            />
            <div className="flex ml-4">
              <div>
                <h1 className="text-[25px] font-cinzel font-semibold ">
                  {menuItem.name}------------{" "}
                </h1>
                <p className="text-orange-800 font-inter">{menuItem.recipe} </p>
              </div>
              <h1 className="font-inter text-amber-500 ">${menuItem.price} </h1>
            </div>
          </div>
        ))}
      </div>
      <button className="flex justify-center items-center mx-auto text-center mt-7 px-[30px] py-2 rounded-xl btn  border-b-4 btn-outline border-0 text-red-700 font-inter border-slate-700 uppercase ">
        ORDER YOUR FAVOURITE FOOD
      </button>
    </div>
  );
};

export default Dessert;
