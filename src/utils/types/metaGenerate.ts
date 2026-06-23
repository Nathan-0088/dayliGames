import { Metadata } from "next";
import { GameProps } from "./gameProps";

export async function generateMeta(id: string): Promise<Metadata> {
  try {
    const response = await fetch(
      `${process.env.NEXT_BASE_URL}/next-api/?api=game&id=${id}`,
    );

    if (!response.ok) return { title: "Dayligames | seu site de games" };

    const game: GameProps = await response.json();
    return {
      title: game.title,
      description: `/${game.description.slice(0, 100)}`,
      openGraph: {
        title: game.title,
        images: [game.image_url],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch {
    return { title: "Dayligames | seu site de games" };
  }
}
