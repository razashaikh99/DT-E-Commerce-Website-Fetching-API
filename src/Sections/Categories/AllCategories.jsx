import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAllCategories } from '../../store/action/categoryAction';
import CategoriesCard from '../../Components/CategoriesCard';
import Loader from '../../Components/Loader';
import CategoryBottomCard from '../../Components/CategoryBottomCard';
import { categoryBottomCard } from '../../Config/config';
import ProductHeader from '../../Components/ProductHeader';

export default function AllCategories() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { categories, loading } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch])

  if (loading) {
    return <Loader
      text="Loading amazing Categories..."
    />
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen pt-30 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <ProductHeader
          heading="Explore Our Categories"
          para="Discover premium products across various categories tailored for your needs"
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {categories.map((category, i) => (
            <CategoriesCard
              key={i.index}
              onClick={() => navigate(`/categories/${category.slug}`)}
              image={category.image}
              name={category.name}
            />
          ))}
        </div>

        {/* Stats Section (Optional) */}
        <div className="mt-20 pt-10 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {categoryBottomCard.map((value, index) => (
              <CategoryBottomCard
                key={index}
                text1={value?.title}
                text2={value?.category}
              />
            ))}
          </div>
        </div>

      </div>
    </div >
  );
}
