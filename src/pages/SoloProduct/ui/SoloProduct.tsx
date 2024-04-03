"use client";
import { useGetProductQuery } from "@/shared/api/apiSlice";
import { useAppDispatch, useAppSelector } from "@/shared/lib/reduxHooks";
import { getRelatedProducts } from "@/shared/model/products/productSlice";
import { Button } from "@/shared/ui";
import Arrow from "@/shared/ui/icons/main/arrow";
import { DescComponent } from "@/widgets/Desc";
import { Product } from "@/widgets/Product";
import { SimilarProducts } from "@/widgets/similarProducts";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const SoloProdPage = () => {
  const dispatch = useAppDispatch();
  const params = useParams() as { id: string | number };
  const {
    products: { products },
  } = useAppSelector((state) => state);

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({
    id: params.id,
  });

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) return;
  }, [isLoading, isFetching, isSuccess]);

  useEffect(() => {
    if (!data || !products.length) return;

    dispatch(getRelatedProducts(data.id));
  }, [data, dispatch, products.length]);

  return (
    <section>
      <div className="flex gap-[6px] items-center">
        <h3 className="text-base font-meduim relative top-[-3px]">
          Product Listing
        </h3>
        <Arrow className="w-[22px] h-[22px] relative top-0" />
        <h3 className="text-base font-meduim text-orange relative top-[-1px]">
          {data?.name}
        </h3>
      </div>
      <Product {...data} />
      <DescComponent description={data?.description} />
      <div className="mt-[200px]">
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
        <SimilarProducts amount={8} />
      </div>
    </section>
  );
};

export default SoloProdPage;
