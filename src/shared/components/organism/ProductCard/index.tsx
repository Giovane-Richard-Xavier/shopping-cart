import React from 'react'
import { BsFillCartPlusFill } from "react-icons/bs";
import style from './styles.module.css';
import { formatCurrency } from '@/utils/formatCurrency';
import { IProducts } from '@/service/api/axios/products/type';

type ProductProps = {
  data: IProducts;
}

export const ProductCard = ({data}: ProductProps) => {
  const {title, thumbnail, price, original_price} = data;

  return (
    <section className={style.product_card}>
      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} 
        alt="product" 
        className={style.card_image} 
      />
      <div className={style.card_infos}>
        <h2 className={style.card_title}>{title}</h2>
        <h2 className={style.card_originalprice}>{formatCurrency(original_price, 'BRL')}</h2>
        <h2 className={style.card_price}>{formatCurrency(price, 'BRL')}</h2>

        <button type="button" className={style.button_add_cart}>
          <BsFillCartPlusFill />
        </button>
      </div>
    </section>
  )
}
