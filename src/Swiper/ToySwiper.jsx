// import React from 'react';
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const ToySwiper = () => {

const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/Toys.json")
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((err) => console.error(err));
  }, []);

  if (!toys.length) {
    return (
      <div className="h-60 flex items-center justify-center">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }

    return (
        <section className="py-8 bg-base-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-4 text-green-500">
          Featured Toys
        </h2>
        
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="h-80"
        >
          {toys.map((toy) => (
            <SwiperSlide key={toy.toyId}>
              <div className="flex flex-col items-center justify-center h-full p-6 bg-white rounded-xl shadow-lg">
                <img
                  src={toy.pictureURL}
                  alt={toy.toyName}
                  className="w-64 h-40 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold text-gray-800 text-center">
                  {toy.toyName}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section> 
    );
};

export default ToySwiper;