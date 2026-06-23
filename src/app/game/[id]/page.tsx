import Container from "@/components/container";
import { GameProps } from "@/utils/types/gameProps";
import Image from "next/image";
import { redirect } from "next/navigation";
import Label from "./components/label";
import CardGame from "@/components/cardGame";
import { generateMeta } from "@/utils/types/metaGenerate";

type ParamsProps = {
  params: Promise<{ id: string }>;
};

async function getData(id: string) {
  try {
    const data = await fetch(
      `${process.env.NEXT_BASE_URL}/next-api/?api=game&id=${id}`,
    );
    return data.json();
  } catch (error) {
    return null;
  }
}

async function getRandomGame() {
  try {
    const data = await fetch(
      `${process.env.NEXT_BASE_URL}/next-api/?api=game_day`,
    );
    return data.json();
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: ParamsProps) {
  const { id } = await params;
  return generateMeta(id);
}

/////////////////////////

export default async function Detalhes({ params }: ParamsProps) {
  const { id } = await params;
  const game: GameProps = await getData(id);

  if (!game) {
    redirect("/");
  }

  const randomGame: GameProps = await getRandomGame();

  return (
    <div>
      <div className="w-full max-w-7xl  h-80 sm:h-96 relative my-2  mx-auto rounded-2xl bg-black">
        <Image
          src={game.image_url}
          alt={game.title}
          fill
          quality={100}
          className="rounded-2xl opacity-70 "
        />
      </div>

      <Container>
        <h1 className="text-2xl font-bold py-3">{game.title}</h1>
        <p>{game.description}</p>

        <h2 className="text-lg font-bold mt-8 mb-2">Plataformas:</h2>
        <div className="flex flex-wrap">
          {game.platforms.map((item) => (
            <Label key={item} name={item} />
          ))}
        </div>

        <h2 className="text-lg font-bold mt-8 mb-2">Categorias:</h2>
        <div className="flex flex-wrap">
          {game.categories.map((item) => (
            <Label key={item} name={item} />
          ))}
        </div>

        <p className="text-lg my-3">
          <strong>Data de lançamento:</strong>
          {game.release}
        </p>

        <h2>Jogo recomendado:</h2>
        <div>
          <CardGame game={randomGame} key={randomGame.id} />
        </div>
      </Container>
    </div>
  );
}
