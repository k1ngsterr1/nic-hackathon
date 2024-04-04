export type PhotosType = {
  image: any;
  i: string;
};

export interface ProductProps {
  name: string;
  photo: PhotosType[];
  price: string | any;
  description: string;
}
