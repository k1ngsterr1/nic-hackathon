"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/reduxHooks";
import { PhotosType, ProductProps } from "./props";
import { PhotoDetails } from "@/entities/PhotoDetails";
import { RatingStar } from "@/features/Rating";

import { Button } from "@/shared/ui";
import "./index.scss";

const listData = [
  { text: "Lorem ipsum dolor sit amet, adipi scing elit" },
  { text: "Lorem ipsum dolor sit amet, consectetuer adipi scing elit" },
  { text: "Lorem ipsum dolor sit amet, consectetuer adipi " },
];

const Product = (item: ProductProps) => {
  const { photo, name, price, description } = item;
  const [mainPhotoIndex, setMainPhotoIndex] = useState(0);
  const products = useAppSelector((state) => state.products.products); // Получаем список продуктов из Redux store

  if (!photo || !Array.isArray(photo)) {
    return <div>No photos available</div>;
  }

  const mainPhoto = products[mainPhotoIndex].photo;

  return (
    <div className="flex justify-between mb-20 mt-10">
      <div className="left__solo flex gap-7">
        {photo &&
          products[mainPhotoIndex].photo.map((image, index) => (
            <PhotoDetails
              key={index}
              selectPhoto={() => setMainPhotoIndex(index)}
              image={image}
            />
          ))}
        <div className=" p-20 rounded-[8px] border-[3px] border-solid border-purple">
          <div
            className="current"
            style={{ backgroundImage: `url(${photo[mainPhotoIndex]})` }}
          />
        </div>
      </div>
      <div className="right__solo py-[9px]">
        <h1 className="text-orange text-xl font-semibold mb-4">{name}</h1>
        <div className="flex justify-center items-center gap-2">
          <span className="text-green text-[28px] price-solo">
            {price >= 10000000000 ? `฿${price / 1000000000}KK` : `฿${price}`}
          </span>
          <RatingStar />
        </div>
        <div className=" mt-8 mb-8 border-[1px] border-solid w-full border-white leading-[2px]"></div>
        <p className="w-[80%] mb-6">{description}</p>
        <ul className="pl-5 mb-[49px]">
          {listData.map(({ text }, index) => (
            <li key={index} className="list-disc">
              {text}
            </li>
          ))}
        </ul>
        <Button className="mb-[18px]" size="xl" variant="primary" fullwidth>
          Add to Cart
        </Button>
        <Button className="mb-9" size="xl" variant="secondary" fullwidth>
          Buy Now
        </Button>
        <ul className="flex flex-col gap-6">
          <li className="text-[16px] gray">
            Free worldwide shipping on all orders over $100
          </li>
          <li className="text-[16px] gray">
            Delivers in: 3-7 Working Days Shipping & Return
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
