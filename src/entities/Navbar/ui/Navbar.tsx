import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex gap-20 justify-center items-center">
      <Link href={''} className="text-base font-medium" >Home</Link>
      <Link href={''} className="text-base font-medium" >Category</Link>
      <Link href={''} className="text-base font-medium" >Contact Us</Link>
      <Link href={''} className="text-base font-medium" >Blog</Link>
    </nav>
  )
}

export default Navbar;