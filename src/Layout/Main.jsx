import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
// import Navbar from "../Pages/Shared/Navbar/Navbar";
import Header from "../Pages/Shared/Navbar/Header";


const Main = () => {
    return (
        <div>
            
            <Header></Header>
           
            <Outlet></Outlet>
            <div className="bottom-0">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;