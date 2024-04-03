"use client";

import { Rating } from "flowbite-react";

const RatingStar = () => {
  return (
    <Rating size="lg" className="justify-start">
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} className="mr-2" />
      <p className="text-[16px]">( 32 review )</p>
    </Rating>
  );
};

export default RatingStar;
