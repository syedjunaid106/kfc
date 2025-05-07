'use client'
import React from 'react';
import menuData from '@/data/menuData';
import MenuList from '@/app/components/MenuList';
import { useRouter } from 'next/navigation';
const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const items = menuData[category];

  return (
    <div>
      <h1 className="text-3xl font-bold my-4">
        {category.replace('-', ' ').toUpperCase()}
      </h1>
      <MenuList items={items} />
    </div>
  );
};

export default CategoryPage;
