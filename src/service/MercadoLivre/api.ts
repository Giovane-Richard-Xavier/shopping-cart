import axios, {AxiosRequestConfig} from "axios";

interface IResponseAxios<T> {
  data: T;
}

const api = axios.create({
  baseURL : `https://api.mercadolibre.com/sites/MLB/search?q=`,
});

export const GET = <T> (path: string): Promise<IResponseAxios<T>> => api.get(path);

export const POST = <T>(
  path: any,
  body: unknown,
  headers?: AxiosRequestConfig<unknown>
): Promise<IResponseAxios<T>> => api.post(path, body, headers);