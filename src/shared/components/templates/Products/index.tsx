import { useProducts } from "@/context/AppContext";
import { ApiProducts } from "@/service/api/axios/products/apiProducts";
import React, { useEffect, useState } from "react";
import { SkeletonCard } from "../../atom/Skeleton";
import { ProductCard } from "../../organism/ProductCard";
import styles from "./styles.module.css";

export const Products = () => {
  const { products, setProducts, loading, setLoading } = useProducts();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await ApiProducts.getProducts("pc gamer");
        // setProducts(pre =>  [...pre, ...response]);
        setProducts(response);
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getAllProducts();
  }, [offset]);

  // inifinity scroll
  // useEffect(() => {
  //   const handleScroll = (e: any) => {
  //     const scrollHeight = e.target.documentElement.scrollHeight;
  //     const currentHeight = e.target.documentElement.scrollTop + window.innerHeight;

  //     if(currentHeight + 1 >= scrollHeight) {
  //       setOffset(offset + 10);
  //     }
  //   }
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [offset]);

  return (
    (loading && <SkeletonCard />) || (
      <section className={`${styles.products} container`}>
        <div className={styles.products_item}>
          {products?.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </section>
    )
  );
};
