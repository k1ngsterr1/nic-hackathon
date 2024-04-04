import { Button } from "@/shared/ui"
import Image from "next/image"
import './index.scss';

interface IOneProduct {
  color: ''
}

const OneProduct = () => {
  return (
    <section className="pt-[169px] container flex ">
      <div className="left_one w-[907px]">
        <h1 className="mb-[56px] text-2xl font-semibold text-orange">Gomo Gomo no Mi</h1>
        <p className="mb-[70px] w-[50%]">gives elasticity to the user`s body, making it immune to physical attacks and various projectiles. The ability to stretch can be used in combat, for example, to improve range and/or attack speed. Due to the insulating properties of rubber, the user is also immune to electrical attacks. Despite these advantages, the user remains vulnerable to sharp attacks and non-physical attacks.</p>
        <div className="flex gap-7">
          <Button 
            size="lg"
            className="text-base"
          >
            Buy Now
          </Button>
          <Button 
            variant="fifth" 
            size="lg" 
            className="text-base rounded-[12px]"
          >
            More
          </Button>
        </div>
      </div>
      <div className="right_one">
        <Image 
          className="flex fruct__filter items-center justify-end relative top-[-3rem]"
          src={'/fruct-luffi.png'}
          width={458}
          height={574}
          alt=""
        />
      </div>
    </section>
  )
}

export default OneProduct