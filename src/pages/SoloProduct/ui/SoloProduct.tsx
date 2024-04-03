"use client";
import { useGetProductQuery } from "@/shared/api/apiSlice";
import { useAppDispatch, useAppSelector } from "@/shared/lib/reduxHooks";
import { getRelatedProducts } from "@/shared/model/products/productSlice";
import Arrow from "@/shared/ui/icons/main/arrow";
import { DescComponent } from "@/widgets/Desc";
import { Product } from "@/widgets/Product";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const SoloProdPage = () => {
  const dispatch = useAppDispatch();
  const params = useParams<{ id: any }>();
  const {
    products: { products, related },
  } = useAppSelector((state) => state);

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({
    params,
  });

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) return;
  }, [isLoading, isFetching, isSuccess]);

  useEffect(() => {
    if (!data || !products.length) return;

    dispatch(getRelatedProducts(data.category.id));
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
    </section>
  );
};

export default SoloProdPage;
