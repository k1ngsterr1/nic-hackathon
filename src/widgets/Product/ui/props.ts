export type PhotosType = {
  image: string ;
};

export interface ProductProps {
  name: string;
  photo: PhotosType[];
  price: string | any;
  description: string;
}
