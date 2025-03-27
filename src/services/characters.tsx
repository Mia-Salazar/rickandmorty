import { CharacterListModel } from "../models/Character";

export const fetchCharacters = async (name?: string): Promise<CharacterListModel> => {
  const url = name ? `https://rickandmortyapi.com/api/character?name=${name}` : 'https://rickandmortyapi.com/api/character';
  try {
    const response = await fetch(url);
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

