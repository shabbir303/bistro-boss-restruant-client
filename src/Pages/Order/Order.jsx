
import UseMenu from "../../Hooks/UseMenu";
import image from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Card } from 'flowbite-react';
import { useState } from "react";
import './TabsComponent.css';
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";


const Order = () => {
  const [menu] = UseMenu();
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const soup = menu.filter(item => item.category === 'soup');
  const dessert = menu.filter(item => item.category === 'dessert');
  const drinks = menu.filter(item => item.category === 'drinks');
  const {category} = useParams();
  console.log(category);
  const categories = [salad, pizza, soup, dessert, drinks];
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  // const handleTabSelect = (index) => {
  //   setTabIndex(index);
  // };
  
  



  return (
    <div>
      <Helmet>
        <title>Order</title>
      </Helmet>
      <Cover
        image={image}
        title={"OUR SHOP"}
        des={"Would you like to try a dish?"}
      ></Cover>
      <Tabs 
      selectedIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}
      className="max-w-7xl my-[100px] mx-auto"

      >
        <TabList className="flex uppercase  gap-[40px] justify-center items-center font-inter font-[700] "

        >
          <Tab
          >salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>soup</Tab>
          <Tab>dessert</Tab>
          <Tab>drinks</Tab>
        </TabList>

        <TabPanel className="grid grid-cols-3 gap-3 mt-[40px] ">
          {
            salad.map(salad =>
              <Card key={salad._id}
                className="max-w-sm"
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={salad.image}
              >
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {salad.name}
                  </h5>
                </a>
                <div className="mb-5 font-inter mt-2.5 flex items-center">
                  <h1>{salad.recipe} </h1>
                </div>
                <div className="flex items-center justify-center mx-auto text-[#BB8506] font-inter btn border-b-[3px] 
                border-[#BB8506] uppercase">
                  <button className="uppercase">add to cart</button>
                </div>
              </Card>
            )
          }
        </TabPanel>
        <TabPanel className="grid grid-cols-3 gap-3  ">
          {
            pizza.map(pizza =>
              <Card key={pizza._id}
                className="max-w-sm"
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={pizza.image}
              >
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {pizza.name}
                  </h5>
                </a>
                <div className="mb-5 font-inter mt-2.5 flex items-center">
                  <h1>{pizza.recipe} </h1>
                </div>
                <div className="flex items-center justify-center mx-auto text-[#BB8506] font-inter btn border-b-[3px] 
                border-[#BB8506] ">
                  <button className="uppercase">add to cart</button>
                </div>
              </Card>
            )
          }
        </TabPanel>
        <TabPanel className="grid grid-cols-3 gap-3  ">
          {
            soup.map(soup =>
              <Card key={soup._id}
                className="max-w-sm"
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={soup.image}
              >
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {soup.name}
                  </h5>
                </a>
                <div className="mb-5 font-inter mt-2.5 flex items-center">
                  <h1>{soup.recipe} </h1>
                </div>
                <div className="flex items-center justify-center mx-auto text-[#BB8506] font-inter btn border-b-[3px] 
                border-[#BB8506] ">
                  <button className="uppercase">add to cart</button>
                </div>
              </Card>
            )
          }
        </TabPanel>
        <TabPanel className="grid grid-cols-3 gap-3  ">
          {
            dessert.map(dessert =>
              <Card key={dessert._id}
                className="max-w-sm"
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={dessert.image}
              >
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {dessert.name}
                  </h5>
                </a>
                <div className="mb-5 font-inter mt-2.5 flex items-center">
                  <h1>{dessert.recipe} </h1>
                </div>
                <div className="flex items-center justify-center mx-auto text-[#BB8506] font-inter btn border-b-[3px] 
                border-[#BB8506] ">
                  <button className="uppercase">add to cart</button>
                </div>
              </Card>
            )
          }
        </TabPanel>
        <TabPanel className="grid grid-cols-3 gap-3  ">
          {
            drinks.map(drinks =>
              <Card key={drinks._id}
                className="max-w-sm"
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={drinks.image}
              >
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {drinks.name}
                  </h5>
                </a>
                <div className="mb-5 font-inter mt-2.5 flex items-center">
                  <h1>{drinks.recipe} </h1>
                </div>
                <div className="flex items-center justify-center mx-auto text-[#BB8506] font-inter btn border-b-[3px] 
                border-[#BB8506] ">
                  <button className="uppercase">add to cart</button>
                </div>
              </Card>
            )
          }
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default Order;
