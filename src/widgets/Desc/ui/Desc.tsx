import { Button } from "@/shared/ui";
import { DescProps } from "./props";

const data = [
  { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
];

const DescComponent = (props: DescProps) => {
  const { description } = props;

  return (
    <div className="rounded-[15px] border-[1px] border-solid border-white py-[60px] px-10">
      <div className="flex gap-[22px] mb-[60px]">
        <Button className="text-xl" size="lg">
          Description
        </Button>
        <div className="border-[1px] border-solid border-white"></div>
        <Button
          className="text-xl bg-transparent text-orange font-medium"
          // size="lg"
        >
          Reviews
        </Button>
      </div>
      <p className="text-base font-medium mb-5">{description}</p>
      <ul className="pl-5 list-disc">
        {data.map(({ text }, index) => (
          <li key={index} className="text-base font-medium">
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DescComponent;
