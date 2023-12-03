import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import style from './styles.module.css';

export const CartButton = () => {
  return (
    <button type="button" className={style.cart_button}>
      <HiOutlineShoppingCart />
      <span className={style.cart_status}>2</span>
    </button>
  )
}
