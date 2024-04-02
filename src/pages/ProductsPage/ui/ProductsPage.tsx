import { Input } from "@/shared/ui";
import SearchProd from "@/shared/ui/icons/products/search";
import { AsideComponent } from "@/widgets/aside";

const ProductsPage = () => {
  return (
    <section className="flex gap-9">
      <AsideComponent />
      <div className="right__prod">
        <h1 className="text-xl mb-9 text-orange font-bold">
          Our Collection Of Devil Fruits
        </h1>
        <div className="border-[1px] pr-[9px] rounded-[47px] flex justify-between items-center border-solid border-white mb-9">
          <Input
            placeholder="Search An Item"
            className="py-[9px] pl-[22.9px]"
          />
          <SearchProd />
        </div>
        <h3 className="text-orange text-sm font-bold leading-[30px]">
          Showing 1–12 of 24 item(s)
        </h3>
        <p className="text-sm leading-[30px] mb-9 w-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className="grid grid-cols-3 gap-[30px]"></div>
      </div>
    </section>
  );
};

export default ProductsPage;
