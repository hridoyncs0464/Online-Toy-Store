import React, { useState } from 'react';
import useTitle from '../hooks/useTitle';

const ToyViewMoreDetailes = ({toy}) => {
  useTitle(`ToyTopia | ${toy.toyName}`); 

const {
    toyId,
    toyName,
    rating,
    availableQuantity,
    price,
    pictureURL,
    description,
    sellerName,
    sellerEmail,
    subCategory,
  } = toy;

 
const [formData, setFormData] = useState({ name: '', email: '' });
  const [successMessage, setSuccessMessage] = useState('');

const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
                     
  const handleTryNowSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('Thank you for trying! We will contact you soon.');
    setFormData({ name: '', email: '' });
    setTimeout(() => setSuccessMessage(''), 4000);
  };

    return (
                            
       <>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:flex gap-6">
        <div className="md:w-1/2">
          <img
            src={pictureURL}
            alt={toyName}
            className="w-full h-64 object-cover rounded-md"
          />
        </div>

        <div className="md:w-1/2 mt-4 md:mt-0 space-y-2">
          <h2 className="text-2xl font-bold">{toyName}</h2>
          <p className="text-sm text-gray-500">ID: {toyId}</p>
          <p className="text-sm text-gray-600">Category: {subCategory}</p>

          <p className="text-yellow-600 font-semibold">⭐ Rating: {rating}</p>
          <p className="text-blue-500 font-medium">Available: {availableQuantity}</p>
          <p className="text-green-600 font-bold text-lg">Price: ${price}</p>

          <div className="pt-2">
            <h3 className="font-semibold">Seller information</h3>
            <p className="text-gray-700">Name: {sellerName}</p>
            <p className="text-gray-700">Email: {sellerEmail}</p>
          </div>

          <div className="pt-2">
            <h3 className="font-semibold">Description</h3>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      {/* Try Now form */}
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mt-8">
        <h3 className="text-xl font-bold text-center mb-6">Try Now</h3>

        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-center">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleTryNowSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full input input-bordered"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full input input-bordered"
              placeholder="your@email.com"
            />
          </div>

          <button
            type="submit"
            className="w-full btn btn-primary text-white font-semibold"
          >
            Try Now
          </button>
        </form>
      </div>
    </>











    );
};

export default ToyViewMoreDetailes; 