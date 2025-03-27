import { ReactNode } from "react";

export interface InputModel {
    type: string;
    id?: string;
    name?: string;
    value?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export interface LabelModel {
    htmlFor: string;
    children: ReactNode;
}