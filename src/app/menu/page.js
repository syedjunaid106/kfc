import React from 'react';
import CategoryBar from '../components/CategoryBar';
import MenuList from '../components/MenuList';
import menuData from '@/data/menuData';
import Footer from '../components/Footer';
const MenuPage = () => {
  const categories = Object.keys(menuData); // Get category names (keys)

  return (
    <div className='mt-48  ' >
      <CategoryBar categories={categories} />
      <div className="container w-[90vw] mx-auto px-4 ">
        {categories.map((category) => (
          <div key={category} id={category} className="my-8 ">
            <h2 className="lg:text-3xl text-xl text-brand-secondary font-bold mb-4">
              {category.replace('-', ' ').toUpperCase()}
            </h2>
            <MenuList items={menuData[category]} />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default MenuPage;
