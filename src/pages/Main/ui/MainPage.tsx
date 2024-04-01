import { SingupForm } from "@/features/auth/signup";
import { Input } from "@/shared/ui";
import SearchIcon from "@/shared/ui/icons/main/search";

const MainPage = () => {
  return (
    <section className="container flex flex-col justify-center items-center">
      <h1 className="mb-[33px] w-[75%] text-xl font-semibold text-center"><span className="text-orange">Devil</span> Fruit is the reincarnation of the Sea Devil. If you eat it, you gain special powers, but permanently <span className="text-orange">lose the ability to swim.</span></h1>
      <p className="w-[59%] text-center text-sm font-normal leading-7 mb-[34px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat</p>
      <div className="rounded-[46px] w-[30%] flex items-center gap-1 justify-between border-[0.961px] py-2 px-6 border-white border-solid">
        <Input 
          className="text-sm gray"
          placeholder="Search Fruit"
        />
        <SearchIcon />
      </div>
    </section>
  )
}

export default MainPage;