import { Button } from "@/shared/ui";
import Delete from "@/shared/ui/icons/basket/delete";
import Arrow from "@/shared/ui/icons/main/arrow";
import { SimilarProducts } from "@/widgets/similarProducts";
import Link from "next/link";

const BasketPage = () => {
  return (
    <>
      <section className="mb-[150px] flex justify-between items-center">
        <div className="border-[2px] border-white border-solid rounded-[11px]">
          <div className="py-[26px] px-[30px] flex justify-between items-center">
            <h2 className="text-lg font-medium">Product</h2>
            <h3 className="text-lg font-medium">Price</h3>
          </div>
          <div className="flex items-center px-[30px] justify-center py-10">
            <Delete className="mr-6" />
            <div className="flex gap-[121px] items-center">
              <div className="flex">
                <div className="border-[1px] rounded-[6px] border-white border-solid py-2.5 px-3">
                  <div
                    style={{ backgroundImage: `url($)` }}
                    className="w-[35px] h-11"
                  />
                </div>
                <h3 className="flex justify-center items-center ml-[17px] text-base font-medium">
                  Gomo Gomo no Mi
                </h3>
              </div>
              <p className="text-green text-[20px] ">฿500kk</p>
            </div>
          </div>
        </div>
        <div className="border-[2px] border-white border-solid rounded-[11px]">
          <div className="py-[26px] px-[30px]">
            <span className="text-lg font-medium">Cart Total</span>
          </div>
          <div className="py-10 px-[30px] flex gap-[364px] items-center">
            <span className="text-sm">SUBTOTAL</span>
            <span className="text-green text-sm ">฿500kk</span>
          </div>
          <div className="py-10 px-[30px] flex gap-[364px] items-center">
            <span className="text-sm">SUBTOTAL</span>
            <span className="text-green ">--</span>
          </div>
          <div className="py-10 px-[30px] flex gap-[364px] items-center">
            <span className="text-sm">SUBTOTAL</span>
            <span className="text-green text-sm ">฿500kk</span>
          </div>
          <Button size="xl" fullwidth variant="primary">
            Proceed To Checkout
          </Button>
        </div>
      </section>
      <section className="">
        <div className="flex justify-between items-center mb-[56px]">
          <h1 className="text-orange text-2xl font-semibold">
            Similar products
          </h1>
          <Button
            className="flex gap-2.5 hover:text-orange hover:bg-white transition-transform"
            size="lg"
            variant="primary"
          >
            <Link href={"/products"}>View all</Link>
            <Arrow className="" />
          </Button>
        </div>
        <SimilarProducts amount={4} />
      </section>
    </>
  );
};

export default BasketPage;
