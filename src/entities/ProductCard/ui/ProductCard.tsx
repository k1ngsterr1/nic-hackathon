import AddTo from "@/shared/ui/icons/products/addTo";
import { ProductI } from "./props";

const ProductCard = (props: ProductI) => {
  const { name, price, type, photo } = props;

  return (
    <>
      <div className="mb-2.5 bg-[#051325] rounded-[15px] py-10 px-5">
        <div
          className="w-[105%] h-[300px]"
          style={{ backgroundImage: `url(${photo})` }}
        />
      </div>
      <div className="">
        <h5 className="text-green text-sm mb-[9px]">{type}</h5>
        <h1 className="text-lg font-medium">{name}</h1>
        <div className="flex items-center justify-between">
          <p className="text-green text-[20px]">฿{price}</p>
          <AddTo />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
