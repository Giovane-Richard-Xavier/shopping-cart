import { useProducts } from '@/context/AppContext';
import { ApiProducts } from '@/service/api/axios/products/apiProducts';
import { useEffect } from 'react';
import { Loading } from '../../atom/Loading';
import { ProductCard } from '../../organism/ProductCard';
import styles from './styles.module.css';

export const Products = () => {
  const {products, setProducts, loading, setLoading} = useProducts();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await ApiProducts.getProducts("pc gamer");
        console.log(response);
        setProducts(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getAllProducts();
  }, []);

  return (
    (loading && <Loading />)|| (
    <section className={`${styles.products} container`}>
      <div className={styles.products_item}>
          
        {products?.map((product) => <ProductCard key={product.id} data={product} />)}
      </div>
    </section>
    )
  )
}
