import React from 'react';

const FunFacts = () => {
    return (
        <section className="bg-white mt-16 py-12">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-purple-600 mb-3">
                    Happy Kids Worldwide
                </h2>
                <p className="text-gray-600 mb-12">
                    Join thousands of parents who trust ToyTopia for quality toys.
                </p>

                <div className="grid gap-8 md:grid-cols-4 text-center">
                    <div className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="text-3xl font-bold text-green-500 mb-2">5K+</div>
                        <h3 className="font-semibold text-gray-800">Happy Families</h3>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="text-3xl font-bold text-blue-500 mb-2">100+</div>
                        <h3 className="font-semibold text-gray-800">Toy Categories</h3>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                        <h3 className="font-semibold text-gray-800">Trusted Brands</h3>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="text-3xl font-bold text-pink-500 mb-2">24h</div>
                        <h3 className="font-semibold text-gray-800">Fast Delivery</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunFacts;
