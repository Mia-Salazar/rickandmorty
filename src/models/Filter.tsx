import {  FormEvent } from "react";

export interface FilterModel {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}