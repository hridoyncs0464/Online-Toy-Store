import React from 'react';

const WhyChoseUs = () => {
    return (
        <section className="bg-green-300 mt-16 py-12">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">
          Why parents love ToyTopia
        </h2>
        <p className="text-gray-600 mb-8">
          Carefully selected toys that are safe, educational, and fun for every age.
        </p>

        <div className="grid gap-6 md:grid-cols-3 text-left">
          <div className="p-5 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Safe & trusted brands</h3>
            <p className="text-gray-600 text-sm">
              All toys meet safety standards and are chosen from reliable brands,
              so parents can shop with confidence.
            </p>
          </div>

          <div className="p-5 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Learning through play</h3>
            <p className="text-gray-600 text-sm">
              Building blocks, puzzles, and STEM toys that help children develop
              creativity and problem‑solving skills.
            </p>
          </div>

          <div className="p-5 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Fast delivery & support</h3>
            <p className="text-gray-600 text-sm">
              Easy ordering, fast delivery, and friendly support whenever you need help
              choosing the right toy.
            </p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default WhyChoseUs;