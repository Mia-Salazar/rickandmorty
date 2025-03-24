import { Character } from "../models/Character";

const LIMIT = 10

export const fetchCharacters = async (): Promise<Character[]> => {
  try {
    const response = await fetch(
      `https://dragonball-api.com/api/characters?count=${LIMIT}`
    );
    if (!response.ok) throw new Error('Error al obtener los datos');

    const data: { items: Character[] } = await response.json();
    return data.items;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Error desconocido');
  }
};
