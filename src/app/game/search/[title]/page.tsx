import CardGame from "@/components/cardGame";
import Container from "@/components/container";
import Input from "@/components/input";
import { GameProps } from "@/utils/types/gameProps";

type ParamsProps = {
  params: Promise<{
    title: string;
  }>;
};

async function getGame(title: string) {
  try {
    const decode = decodeURI(title);

    const response = await fetch(
      `${process.env.NEXT_BASE_URL}/next-api/?api=game&title=${decode}`,
    );
    return response.json();
  } catch (error) {
    return null;
  }
}

export default async function SearchGame({ params }: ParamsProps) {
  const { title } = await params;

  const game: GameProps[] = await getGame(title);

  return (
    <main>
      <Container>
        <Input />

        <h1 className="font-bold text-2xl">Veja os games da nossa base: </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {game != null ? (
            game.map((game) => <CardGame key={game.id} game={game} />)
          ) : (
            <h1 className="text-lg font-bold">
              Esse jogo nao esta em nosso banco de dados...
            </h1>
          )}
        </div>
      </Container>
    </main>
  );
}
