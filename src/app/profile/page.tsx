import Image from "next/image";
import perfilLogo from "../../../public/user.png";
import Container from "@/components/container";
import { FaShare } from "react-icons/fa6";
import FavoriteGame from "./components/favorite";

export default function Perfil() {
  return (
    <Container>
      <section className="bg-slate-200 p-4 rounded-2xl flex flex-col gap-4 md:flex-row justify-between items-center relative ">
        <div className="relative w-70 h-70 aspect-square">
          <Image
            alt="Logo de perfil"
            src={perfilLogo}
            fill
            className="rounded-3xl object-cover"
          />
        </div>

        <div className="flex items-center gap-3 md:absolute top-6 right-6">
          <span className="bg-gray-800 p-3 rounded-md text-white font-bold">
            Configuraçoes
          </span>
          <FaShare
            className="bg-gray-800 rounded-md p-1"
            size={42}
            color="#fff"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 my-3 gap-3">
        <div>
          <FavoriteGame />
        </div>

        <div>
          <FavoriteGame />
        </div>

        <div>
          <FavoriteGame />
        </div>
      </section>
    </Container>
  );
}
