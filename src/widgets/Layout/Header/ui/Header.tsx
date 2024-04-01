import { Navbar } from "@/entities/Navbar";
import Logo from "@/shared/ui/icons/Logo";

const Header = () => {
  return (
    <header className="pt-6">
      <div className="container flex items-center justify-between">
        <Logo 
          width={88} 
          height={70} 
        />
        <Navbar />
        <div></div>
      </div>
    </header>
  )
}

export default Header;