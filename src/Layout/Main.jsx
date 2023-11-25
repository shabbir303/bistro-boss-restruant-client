import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
// import Navbar from "../Pages/Shared/Navbar/Navbar";
import Header from "../Pages/Shared/Navbar/Header";


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            
            {noHeaderFooter || <Header></Header>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
           
        </div>
    );
};

export default Main;