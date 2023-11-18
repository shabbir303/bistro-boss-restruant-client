import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import image from "../../assets/featured.jpg";

const Featured = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[url(https://i.ibb.co/3FkVd5w/featured.jpg)] bg-fixed bg-cover h-full bg-slate-800 bg-blend-overlay text-white ">
      <div className="pt-[50px]">
        <SectionTitle
          subHeading={"---Check it out---"}
          heading={"Featured Items"}
        ></SectionTitle>
        <div className="flex justify-center items-center gap-6 pb-[100px]">
          <img
            src={image}
            alt=""
            className="w-[445px] h-[300px] object-cover "
          />
          <div className="w-[604px] font-inter">
            <h1 className="text-[24px] font-[400] ">March 20, 2023</h1>
            <h1 className="text-[24px] font-[400] ">WHERE CAN I GET SOME?</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="flex justify-center items-center mx-auto text-center mt-5 px-[30px] py-2 rounded-xl btn  border-b-4 btn-outline border-0 text-red-700 border-gray-100">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
