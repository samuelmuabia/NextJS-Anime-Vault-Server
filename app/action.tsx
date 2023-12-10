"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (
  page: number,
  limit: number,
  order: string
) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=${order}`
  );
  const data = await response.json();
  console.log(data);
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
