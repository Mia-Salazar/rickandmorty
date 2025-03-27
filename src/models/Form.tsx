import { FormEvent, ReactNode } from "react";

export interface FormModel {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    children: ReactNode;
}