"use client";
import { useEffect, useState } from "react";
import { Button } from "@/shared/ui";
import Arrow from "@/shared/ui/icons/main/arrow";
import axios from "@/shared/lib/axios";

const FeaturedFruits = () => {
  const [data, setData] = useState([]);

  // Дизреспект за неотделённую логику: https://proglib.io/p/luchshie-praktiki-primeneniya-principov-solid-v-react-2022-08-10/amp/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://onepieceshop-production-f646.up.railway.app/api/v1/get-all-products"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    // Дизреспект за классовы стили: https://nuejs.org/blog/tailwind-vs-semantic-css/
    <section className="pt-[166px] container">
      <div className="flex items-center justify-between">
        <div className="mb-[34px]">
          <h1 className="mb-7 text-2xl text-orange font-semibold">
            Featured Fruits
          </h1>
          <p className="w-[70%] text-base leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            fringilla nunc in molestie feugiat. Nunc auctor consectetur elit,
            quis pulvina.
          </p>
        </div>
        <Button
          size="lg"
          className="whitespace-nowrap hover:text-orange hover:bg-white transition-transform flex font-medium items-center justify-center gap-2.5"
        >
          {/* Пропсы нужно делать необязательными если не нужно их везде указывать ? */}
          View All <Arrow />
        </Button>
      </div>
      {/* Респект за грид */}
      <div className="grid grid-cols-4">
        {data.map(({ id, description, type, name, price }) => (
          <div key={id} className="flex flex-col">
            <div></div>
            <span className="text-sm text-green mb-[6px]">{type}</span>
            <h2 className="text-lg font-medium mb-4">{name}</h2>
            <span className="text-green text-[20px] capitalize">฿ {price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedFruits;
