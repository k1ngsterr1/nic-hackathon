import { PriceFilter } from "@/widgets/PriceFilter";
import { Categories } from "@/widgets/categories";

const AsideComponent = () => {
  return (
    <aside className="flex flex-col gap-9">
      <Categories />
      <div className="border-white flex flex-col py-[45px] px-[33px] border-[1px] border-solid">
        <PriceFilter />
      </div>
    </aside>
  );
};

export default AsideComponent;
