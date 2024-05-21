import Link from "next/link";

const Navbar = () => {
  return (
    // Линки можно сделать массивом
    <nav className="flex gap-20 justify-center items-center">
      <Link
        href={"/"}
        className="text-base font-medium transition-all hover:text-orange"
      >
        Home
      </Link>
      <Link
        href={"/products"}
        className="text-base font-medium transition-all hover:text-orange"
      >
        Category
      </Link>
      <Link
        href={""}
        className="text-base font-medium transition-all hover:text-orange"
      >
        Contact Us
      </Link>
      <Link
        href={""}
        className="text-base font-medium transition-all hover:text-orange"
      >
        Blog
      </Link>
    </nav>
  );
};

export default Navbar;
