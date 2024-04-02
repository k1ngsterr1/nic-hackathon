import { Navbar } from "@/entities/Navbar";
import Logo from "@/shared/ui/icons/Logo";
import BasketIcon from "@/shared/ui/icons/header/basket";
import ProfileIcon from "@/shared/ui/icons/header/profilte";

const Header = () => {
  return (
    <header className="pt-6">
      <div className="container flex items-center justify-between">
        <Logo width={88} height={70} />
        <Navbar />
        <div className="flex gap-[30px]">
          <ProfileIcon /> <BasketIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
