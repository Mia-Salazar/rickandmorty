interface InfoModel {
    count: number;
    pages: number;
}

interface OriginModel {
    name: string;
}

interface LocationModel {
    name: string;
}

export interface CharacterModel {
    id: number;
    image: string;
    location: LocationModel;
    name: string;
    origin: OriginModel;
    species: string;
    status: string;
}
  
export interface CharacterListModel {
    info: InfoModel;
    results: CharacterModel[];
}
  