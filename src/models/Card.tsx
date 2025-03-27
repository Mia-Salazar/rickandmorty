export interface CardModel {
    id: number;
    image: string;
    location:string;
    name: string;
    origin: string;
    species: string;
    status: "Alive" | "Dead" | "unknown";
    key: number;
}