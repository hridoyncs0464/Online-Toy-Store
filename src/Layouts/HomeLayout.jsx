import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyChoseUs from "../components/WhyChoseUs";
import ToySwiper from "../Swiper/ToySwiper";
import FunFacts from "../Pages/FunFacts";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>


 {/* <section className="text-center py-5  bg-white">
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
                        Welcome to ToyTopia
                    </h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                        Discover fun and educational toys for every age.
                    </p>
                </section> */}
                
               <ToySwiper></ToySwiper>
          
        <Outlet></Outlet>
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
