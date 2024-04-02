import { Input } from "@/shared/ui";
import SearchProd from "@/shared/ui/icons/products/search";

const ProductsPage = () => {
  return (
    <section className="flex gap-9">
      <aside className="left__prod">

      </aside>
      <div className="right__prod">
        <h1 className="text-xl text-orange font-bold">Our Collection Of Devil Fruits</h1>
        <div className="border-[1px] border-solid border-white mb-9">
          <Input 
            placeholder="Search An Item"
            className="py-[9px] pr-[9px] pl-[22.9px]"
          />
          <div className="p-3 bg__gray rounded-[27px]">
            <SearchProd />
          </div>
        </div>
        <h3 className="text-orange text-sm font-bold leading-[30px]">Showing 1–12 of 24 item(s)</h3>
        <p className="text-sm leading-[30px] mb-9">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="grid grid-cols-3 gap-[30px]">
          
        </div>
      </div>
    </section>
  )
}

export default ProductsPage;