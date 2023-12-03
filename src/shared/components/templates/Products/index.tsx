import { ApiProducts } from '@/service/api/axios/products/apiProducts';
import { IProducts } from '@/service/api/axios/products/type';
import { useEffect, useState } from 'react';
import { ProductCard } from '../../organism/ProductCard';
import styles from './styles.module.css';

export const Products = () => {
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await ApiProducts.getProducts("pc gamer");
        console.log(response);
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getAllProducts();
  }, []);

  return (
    <section className={`${styles.products} container`}>
      {products.length > 0 ? (
        <div className={styles.products_item}>
          {products?.map((product) => <ProductCard key={product.id} data={product} />)}
        </div>
      ) : (
        <h3>Buscando Produtos..</h3>
      )}

    </section>
  )
}
