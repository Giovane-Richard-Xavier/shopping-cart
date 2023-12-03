import { Loading } from './../shared/components/atom/Loading/index';
import { createContext, useContext, ReactNode } from "react";
import { IProducts } from "@/service/api/axios/products/type";

interface IAppContext {
  products: IProducts[];
  loading: boolean;
  setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext({} as IAppContext);

export const useProducts = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useProducts must be used within an AppContext.Provider");
  }

  return context;
}


