import React from 'react';
// import { useLoaderData } from 'react-router';
import ToysCard from '../components/ToysCard';

const Populartoys = ({toys=[]}) => {

    //  const toys = useLoaderData();

    return (
        <div  className='flex flex-col justify-center  items-center gap-3'>
             <h3 className='font-bold text-3xl text-green-500'>Popular toys </h3>
             <p className='text-green-400'> Toys that children like  </p>
             <div className="mappingJson   grid grid-cols-1 md:grid-cols-3 gap-6 mt-1">
                {toys.map((toy) => (
          <ToysCard key={toy.toyId} toy={toy} />
        ))}
             </div>
        </div>
    );
};

export default Populartoys;