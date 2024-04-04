"use client";
import { ProductCard } from "@/entities/ProductCard";
import { useAppDispatch, useAppSelector } from "@/shared/lib/reduxHooks";
import { getProducts } from "@/shared/model/products/productSlice";
import Link from "next/link";
import { useEffect } from "react";

interface SimilarProps {
  amount: number;
}

const SimilarProducts = ({ amount }: SimilarProps) => {
  const dispatch = useAppDispatch();
  const {
    products: { products },
  } = useAppSelector((state) => state);

  const list = products.filter((_, i) => i < amount);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-4 gap-8">
      {list.map(({ id, name, price, type, photo }) => (
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
    </div>
  );
};

export default SimilarProducts;
