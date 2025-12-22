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
    return <div className='flex justify-center'>
      <div className="my-50 w-12 h-12 rounded-full border-6 animate-spin border-blue-500 border-t-transparent"></div>
    </div>
  }

  return (
    <div className="bg-gray-50 min-h-screen py-30 px-4 sm:px-6 lg:px-8">

      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        All Categories
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => navigate(`/categories/${category.slug}`)}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            <div className="relative h-40 rounded-t-xl overflow-hidden">

              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-ecommerce-website-with-shopping-cart-with-the-shopping-cart-on-a-image_2975658.jpg"
                alt={category}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h2 className="text-white text-xl text-shadow-2xl font-bold capitalize text-center px-4">
                  {/* {category.replace("-", " ")} */}
                  {category.name}
                </h2>
              </div>

            </div>

            <div className="p-4 text-center">
              <button className="contact-gradient mt-2 px-4 lg:px-8 py-2 text-[15px] lg:text-sm font-semibold b rounded-full transition cursor-pointer text-white">
                View Products
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
