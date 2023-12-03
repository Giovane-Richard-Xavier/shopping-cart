import { GET } from "@/service/MercadoLivre/api";
import axios from "axios";

interface IProducts {
  id: string;
  title: string;
  thumbnail_id: string;
  catalog_product_id: string;
  listing_type_id: string;
}
interface IResults {
  results: IProducts[];
}

const api = axios.create({
  baseURL : `https://api.mercadolibre.com/sites/MLB/search?q=`,
});

export const ApiProducts = {
  getProducts: async (query: string) => {
    try {
      // const {data} = await GET<IResults>(`${query}`);

      const {data} = await api.get(`${query}`);
      return data.results;
    } catch (error: any) {
      return error?.response?.data?.message;
    }
  },
}