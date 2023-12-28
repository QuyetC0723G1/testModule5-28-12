import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";



export const Home = () => {
    return (
       <>
           <Header/>
           <Navbar/>
           <Outlet/>
           <Footer/>
       </>
    )
}