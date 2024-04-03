"use client";
import { useEffect, useState } from "react";
import { ProductCard } from "@/entities/ProductCard";
import { getProducts } from "@/shared/model/products/productSlice";
import { Loading } from "@/shared/ui/Loading";
import { ProductProps } from "./props";
import { useAppDispatch, useAppSelector } from "@/shared/lib/reduxHooks";
import Link from "next/link";

const ProductsList = ({ amount }: ProductProps) => {
  const dispatch = useAppDispatch();
  const {
    products: { products, loading },
  } = useAppSelector((state) => state);

  const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getProducts());
      setIsInitialLoading(false);
    };

    const timeout = setTimeout(fetchData, 1000);

    return () => clearTimeout(timeout);
  }, [dispatch]);

  if (isInitialLoading) return <Loading />;

  return (
    <div className="grid grid-cols-3 gap-[31px] mt-10">
      {loading ? (
        <Loading />
      ) : (
        <>
          {products.map(({ id, name, price, type, photo }) => (
            <div key={id}>
              <Link href={`/products/${id}`}>
                <ProductCard
                  name={name}
                  price={price}
                  type={type}
                  photo={photo[0]}
                />
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ProductsList;
