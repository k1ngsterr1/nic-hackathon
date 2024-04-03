import { Button, Input } from "@/shared/ui";
import Logo from "@/shared/ui/icons/Logo";
import Insta from "@/shared/ui/icons/footer/insta";
import Mail from "@/shared/ui/icons/footer/mail";
import Telegram from "@/shared/ui/icons/footer/telegram";
import Vk from "@/shared/ui/icons/footer/vk";

const Footer = () => {
  return (
    <footer className="py-[105px] px-32 footer">
      <div className="container flex justify-between">
        <div className="left">
          <Logo 
            width={109}
            height={76}
          />
          <h5 className="mb-[84px] mt-2 text-sm leading-7 gray">© 2024 Company</h5>
          <div className="flex gap-[34px] items-center">
            <Insta/> <Telegram /> <Vk />
          </div>
        </div>
        <div className="right">
          <h1 className="text-xl stretch w-[130%] font-medium capitalize">Subscribe To Your Newsletter</h1>
          <p className="gray mb-[25px]">If the fruit is reborn, you will be the first to know.</p>
          <div className="flex gap-[25px]">
            <div className="py-1 px-3 flex gap-2.5 max-[455px] w-full rounded-[10px] border-[2px] border-white border-solid">
              <Input 
                className="text-sm flex gray leading-7"
                placeholder="Email"
              />
              <Mail />
            </div>
            <Button size="xl" className="bg-orange py-[13px] px-5 rounded-[10px] text-white hover:text-orange hover:bg-white transition-transform">Send</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;