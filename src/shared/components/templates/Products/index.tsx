import React, { useEffect, useState } from 'react'
import styles from './styles.module.css';
import { ApiProducts } from '@/service/api/axios/products/apiProducts';
import { ProductCard } from '../../organism/ProductCard';

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const response = ApiProducts.getProducts("fans aigo");
    console.log("response", response);
    console.log(products);
    // setProducts(response);
  }, []);

  return (
    <section className={`${styles.products} container`}>
      <ProductCard />
    </section>
  )
}
