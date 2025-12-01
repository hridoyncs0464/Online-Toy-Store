import React, { useEffect, useState } from 'react';
import Populartoys from '../Pages/Populartoys';

const Home = () => {



    const [toys,setToys] = useState([]);
    useEffect(() =>{
        fetch("/Toys.json")
        .then((res) => res.json())
        .then((data) => setToys((data)))
        .catch((error) => console.log(error));
    },[]);


    return (
        <div>
           
           <section className='text-center py-10'>
               <h2 className="text-4xl font-bold text-center mb-5">Welcome to ToyTopia</h2>
            <p className="text-center text-gray-600">Find the best toys for your children</p>
      
      
           </section>

           {
            <Populartoys toys={toys}></Populartoys>
           }
         
        </div>
    );
};

export default Home;