import { CharacterListModel } from "../models/Character";

const LIMIT = 10

export const fetchCharacters = async (): Promise<CharacterListModel> => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?count=${LIMIT}`);
    if (!response.ok) throw new Error('Error al obtener los datos');

    const data: CharacterListModel = await response.json();
    return data
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
    return {
      results: [],
      info: {
        count: 0,
        pages: 0,
      }
    };
  }
};

