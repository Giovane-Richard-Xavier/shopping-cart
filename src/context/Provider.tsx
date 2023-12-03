import React, { ReactNode, useState } from 'react';
import {AppContext} from './AppContext';
import { IProducts } from '@/service/api/axios/products/type';

type ProviderProps = {
  children: ReactNode;
}

export const ProviderProducts = ({ children }: ProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<IProducts[]>([]);

  const values = {
    products,
    setProducts,
    loading, 
    setLoading,
  }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
}

