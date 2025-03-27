import { useEffect, useState } from "react"
import { ChangeEvent } from "react";

import { useSearchCharacterQuery } from "../../services/charactersHook";
import { CharacterModel } from "../../models/Character";

export const useCharacter = () => {
    const [sortOrder, setSortOrder] = useState< "asc" | "desc">("asc")
    const [characters, setCharacters] = useState<CharacterModel[]>([]);

    const { data, isLoading } = useSearchCharacterQuery();

    const sortCharactersByName = (characters: CharacterModel[], order: "asc" | "desc"): CharacterModel[] => {
        return [...characters].sort((a, b) => {
          if (a.name < b.name) return order === "asc" ? -1 : 1;
          if (a.name > b.name) return order === "asc" ? 1 : -1;
          return 0;
        });
    };


    const handleChangeSort = (event: ChangeEvent<HTMLInputElement>) => {
        const newSort = event.target.value as "asc" | "desc";
        const sortedCharacters = sortCharactersByName(characters, newSort);
        setCharacters(sortedCharacters);
        setSortOrder(newSort);
    };

    useEffect(() => {
        if (data?.results) {
            const sortedCharacters = sortCharactersByName(data.results, sortOrder)
            setCharacters(sortedCharacters);
        }
    }, [data?.results, sortOrder]);



    return { characters, isLoading, handleChangeSort, sortOrder }
}