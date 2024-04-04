import CheckBox from "@/shared/ui/checkbox/ui/Checkbox";
import { Text } from "./styles";

const data = [
  { price: "฿500kk - ฿1000kk", filter: false },
  { price: "฿500kk - ฿1000kk", filter: false },
  { price: "฿500kk - ฿1000kk", filter: false },
  { price: "฿500kk - ฿1000kk", filter: false },
];

const PriceFilter = () => {
  return (
    <>
      <Text>Price Range</Text>
      <div className="flex flex-col gap-[18px]">
        {data.map(({ price, filter }, index) => (
          <CheckBox
            label={price}
            classLabel="text-[20px] capitalize"
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default PriceFilter;
