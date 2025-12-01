import React from 'react';
import { Link,  } from 'react-router';

const ToysCard = ({toy}) => {
    const {toyId, toyName, rating, availableQuantity, price, pictureURL} = toy;
// const navigate = useNavigate();
    return (
      
      
      <div className=" rounded-lg p-4 shadow-md bg-white">
      <img 
        src={pictureURL} 
        alt={toyName} 
        className="w-full h-48 object-cover rounded-md"
      />

      <h3 className="text-xl font-bold mt-3">{toyName}</h3>

      <p className="text-yellow-600 font-semibold">⭐ Rating: {rating}</p>
      <p className="text-blue-500 font-medium">Available: {availableQuantity}</p>
      <p className="text-green-600 font-bold">Price: ${price}</p>

      <Link to={`toys-details/${toyId}` }  className="btn btn-sm btn-outline mt-3 text-green-700 border-green-700">
        View More
      </Link> 
    </div>


    );
};

export default ToysCard;