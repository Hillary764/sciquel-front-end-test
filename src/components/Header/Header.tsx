import Link from "next/link";
import Logo from "../../../public/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-sciquelTeal text-white p-4 ">
      <nav className="flex flex-row justify-between items-center">
        <div className="flex fex-row items-center">
          <Image width={45} height={45} src={Logo} alt="sciquel logo" />{" "}
          <Link
            href="/"
            className="text-xl font-semibold transition-all hover:font-bold focus:font-bold"
          >
            Sciquel
          </Link>
        </div>
        <Link
          className="hover:font-semibold transition-all focus:font-bold"
          href="/contact-us"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
