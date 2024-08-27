import type { ArtWork } from "@/types/artwork";

const BASE_URL = `https://collectionapi.metmuseum.org/public/collection/v1`;

type ResponseObjectId = {
  total: number;
  objectIDs: number[];
};

const fetchObjectId = async (element: string) => {
  const response = await fetch(`${BASE_URL}/search?q=${element}`);
  const data: ResponseObjectId = await response.json();
  const randomId = data.objectIDs[Math.floor(Math.random() * 10)];
  return randomId;
};

export const fetchArtwork = async (element: string): Promise<ArtWork> => {
  const randomId = await fetchObjectId(element);
  const response = await fetch(`${BASE_URL}/objects/${randomId}`);
  const data = await response.json();
  return data;
};
