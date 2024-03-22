import { ILogin } from "../interfaces/login.interface";

export const LoginDatabase: ILogin[] = [];

let id = 0;

export const generatedId = () => {
    id++
    return id;
}