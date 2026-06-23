import { GameProps } from "@/utils/types/gameProps";
import Image from "next/image";
import Link from "next/link";
import { PiArrowCircleRight } from "react-icons/pi";

type GamePropsData = {
  game: GameProps;
};

export default function CardGame({ game }: GamePropsData) {
  return (
    <Link href={`/game/${game.id}`}>
      <div className="mt-5 bg-slate-400 p-4 rounded-md flex flex-col gap-3 cursor-pointer transition-all duration-200 hover:opacity-80">
        <div className="relative w-full h-56 ">
          <Image
            src={game.image_url}
            alt={game.title}
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
            className=" object-cover rounded-lg transition-all duration-150 shadow"
          />
        </div>

        <div className="flex justify-between gap-2 items-center">
          <p className="text-white font-bold text-ellipsis truncate whitespace-nowrap">
            {game.title}
          </p>
          <PiArrowCircleRight size={35} color="#fff" />
        </div>
      </div>
    </Link>
  );
}
