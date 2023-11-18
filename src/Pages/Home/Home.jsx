import Featured from "./Featured";
import Menu from "./Menu";
import Order from "./Order";
import Quotes from "./Quotes";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <div className="mb-[100px]">
            <Slider></Slider>
            </div>
            <div>
            <Order></Order>
            </div>
            <div className="my-[100px]">
                <Quotes></Quotes>
            </div>
            <div className="mb-[100px]">
                <Menu></Menu>
            </div>
            <div className="mb-[100px]">
                <Featured></Featured>
            </div>
        </div>
    );
};

export default Home;