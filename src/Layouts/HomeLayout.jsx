import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyChoseUs from "../components/WhyChoseUs";
import ToySwiper from "../Swiper/ToySwiper";
import FunFacts from "../Pages/FunFacts";
import Loading from "../Pages/Loading";

const HomeLayout = () => {
   const {state} = useNavigation();
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>

        
               <ToySwiper></ToySwiper>
          { state == "loading" ? <Loading></Loading> :   <Outlet></Outlet>}
       
        <WhyChoseUs></WhyChoseUs>
         <FunFacts></FunFacts>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
