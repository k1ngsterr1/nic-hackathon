export interface ProductI {
  name: string;
  price: string | number;
  currency?: string;
  photo?: string[] | string;
  type: string;
}
