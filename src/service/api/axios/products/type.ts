export interface IProducts {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  original_price: number;
}
export interface IResults {
  results: IProducts[];
}