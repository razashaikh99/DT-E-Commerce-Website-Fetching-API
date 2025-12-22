import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAllCategories } from '../../store/action/categoryAction';

export default function AllCategories() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { categories, loading } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch])

  if (loading) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-full border-[6px] border-blue-500 border-t-transparent animate-spin mb-6"></div>
        <p className="text-gray-600 text-lg font-medium">Loading amazing Categories...</p>
      </div>
    </div>
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen pt-30 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-blue-600">Categories</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover premium products across various categories tailored for your needs
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => navigate(`/categories/${category.slug}`)}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2"
            >

              {/* Category Image */}
              <div className="relative h-38 overflow-hidden">
                <img
                  src={category.image || "https://t3.ftcdn.net/jpg/05/32/38/82/360_F_532388287_lEM2pgAFstzdukcxrk09YlEzTKB5iZaR.jpg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category Name */}
                <div className="absolute bottom-4 left-0 right-0 px-4">
                  <h2 className="text-white text-xl font-bold capitalize text-center drop-shadow-lg">
                    {category.name}
                  </h2>

                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* Button Section */}
              <div className="p-5 bg-gradient-to-r from-gray-50 to-white">
                <button className="w-full contact-gradient text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                  <span>Browse Products</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-transparent rounded-tr-2xl" />

            </div>
          ))}
        </div>

        {/* Stats Section (Optional) */}
        <div className="mt-20 pt-10 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600 mt-2">Categories</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600">10K+</div>
              <div className="text-gray-600 mt-2">Products</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600 mt-2">Support</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600 mt-2">Quality</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
