import React from 'react';
import style from './style.module.css';

export const Logo = () => {
  return (
    <a href="#" title="Mercado Livre" className={style.logo}>
      <img src="images/logo_mercadolivre.png" alt="logo" className={style.logo_img} />
    </a>
  )
}
