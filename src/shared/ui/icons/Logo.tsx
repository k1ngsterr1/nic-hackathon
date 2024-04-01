import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width: 88 | 109;
  height: 70 | 76;
}

export default function Logo({ width, height }: LogoProps) {
  return (
    <Link href={'/'} className="relative text-white logo font-pacifico text-[36px] font-normal">
      <Image src={'/hat.png'} width={width} height={height} alt="logo" className="absolute top-[-15px] left-4" />
      ISO
    </Link>
  )
}

