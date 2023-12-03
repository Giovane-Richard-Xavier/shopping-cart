import { GET } from "@/service/MercadoLivre/api";
import axios from "axios";
import { IProducts, IResults } from "./type";


const api = axios.create({
  baseURL : `https://api.mercadolibre.com/sites/MLB/search?q=`,
});

export const ApiProducts = {
  getProducts: async (query: string): Promise<IProducts[]> => {
    try {
      // const {data} = await GET<IResults>(`${query}`);

      const {data} = await api.get(`${query}`);

      return data.results;
    } catch (error: any) {
      return error?.response?.data?.message;
    }
  },
}