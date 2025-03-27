import { ChangeEvent } from "react";

export interface OrderModel {
    sortOrder: "asc" | "desc";
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}