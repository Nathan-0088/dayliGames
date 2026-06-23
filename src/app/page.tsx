import CardGame from "@/components/cardGame";
import Container from "@/components/container";
import Input from "@/components/input";
import { GameProps } from "@/utils/types/gameProps";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";

async function getRandomGame() {
  try {
    const response = await fetch(
      `${process.env.NEXT_BASE_URL}/next-api/?api=game_day`,
      { next: { revalidate: 320 } },
    );

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

async function getAllGames() {
  try {
    const data = await fetch(
      `${process.env.NEXT_BASE_URL}/next-api/?api=games`,
      {
        cache: "no-store",
      },
    );
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const game: GameProps = await getRandomGame();
  const allGame: GameProps[] = await getAllGames();

  return (
    <Container>
      <main className="w-full">
        <h1 className="text-center font-bold text-2xl py-3">
          Conheça novos jogos perfeito para voce
        </h1>

        <section className="bg-black w-full rounded-lg">
          <Link
            href={`/game/${game.id}`}
            className="transition-all duration-300 hover:opacity-80"
          >
            <div className="w-full max-h-96 h-96 relative rounded-lg">
              <div className="absolute z-20 bottom-0 flex gap-3 p-2 items-center justify-center">
                <p className="text-white font-bold text-xl">{game.title} </p>

                <BsArrowRightSquare size={24} color="#fff" />
              </div>

              <Image
                src={game.image_url}
                alt={game.title}
                priority
                quality={100}
                fill
                className="max-h-96 rounded-lg opacity-50 transition-all duration-500 hover:opacity-80 object-cover md:object-fill"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw,"
              />
            </div>
          </Link>
        </section>

        <Input />

        <article className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {allGame.map((game) => (
            <CardGame key={game.id} game={game} />
          ))}
        </article>
      </main>
    </Container>
  );
}
