import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <menu>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
      </menu>
    </nav>
  );
};

export default Navbar;