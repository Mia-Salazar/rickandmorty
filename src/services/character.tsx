import { CharacterModel } from "../models/Character";

export const fetchCharacter = async (id: number): Promise<CharacterModel> => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    if (!response.ok) throw new Error("Error al obtener los datos");

    const data: CharacterModel = await response.json();
    return data
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
    return {
      id: 1,
      image: "",
      location: { name: "" },
      name: "",
      origin: { name: "" },
      species: "",
      status: "unknown"
    };
  }
};

