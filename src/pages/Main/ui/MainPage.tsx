import { Input } from "@/shared/ui";
import SearchIcon from "@/shared/ui/icons/main/search";
import { FeaturedFruits } from "@/widgets/FeaturedFruits";
import { OneProduct } from "@/widgets/OneProduct";
import { TypesOfDevilFruit } from "@/widgets/TypesOfDevilFruit";
import Image from "next/image";

const MainPage = () => {
  return <>
    <section className="relative container flex flex-col justify-center items-center">
      <Image 
        src={'/fruct_red.png'}
        width={169}
        height={187}
        className="absolute inset-0 top-[-3rem] left-[8rem] rotate-[-19deg]"
        alt="frukt"
      />
      <Image 
        src={'/fruct_green.png'}
        width={147}
        height={220}
        alt="fruct_green"
        className="absolute inset-0 top-[13rem] left-[12rem] rotate-[-4deg]"
      />
      <h1 className="mb-[33px] w-[75%] text-xl font-semibold text-center"><span className="text-orange">Devil</span> Fruit is the reincarnation of the Sea Devil. If you eat it, you gain special powers, but permanently <span className="text-orange">lose the ability to swim.</span></h1>
      <p className="w-[59%] text-center text-sm font-normal leading-7 mb-[34px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat</p>
      <div className="rounded-[46px] w-[30%] py-[19px] flex items-center gap-1 justify-between border-[0.961px] px-6 border-white border-solid">
        <Input 
          placeholder="Search Fruit"
        />
        <SearchIcon />
      </div>
      <Image 
        src={'/fruct_orangexl.png'}
        width={140}
        height={182}
        className="absolute right-[19.5rem] top-[13rem] rotate-[8.22deg]"
        alt="fruct_orange"
      />
      <Image 
        src={'/fruct_orange.png'}
        width={143}
        height={179.8}
        alt="fruct_orange"
        className="absolute right-[10rem] top-[-5rem] rotate-[deg]"
      />
    </section>
    <OneProduct />
    <TypesOfDevilFruit />
    <FeaturedFruits />
  </>
}

export default MainPage;
