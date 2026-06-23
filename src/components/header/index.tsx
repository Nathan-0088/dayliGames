import Image from "next/image";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import logo from "../../../public/logo.svg";

export default function Header() {
  return (
    <header className="bg-slate-400 w-full h-17">
      <main className="max-w-7xl mx-auto flex justify-between items-center h-full px-5">
        <nav className="flex items-center gap-3 mr-12 md:mr-0">
          <Link href="/">
            <Image src={logo} alt="logo do site" quality={100} priority />
          </Link>
          <Link
            href="#"
            className="text-white font-bold md:text-lg transition-all duration-500 hover:opacity-70"
          >
            Games
          </Link>
          <Link
            href="#"
            className="text-white font-bold md:text-lg transition-all duration-500 hover:opacity-70"
          >
            Perfil
          </Link>
        </nav>

        <div>
          <BiUser
            size={35}
            color="#fff"
            className="border-2 border-white rounded-full"
          />
        </div>
      </main>
    </header>
  );
}
