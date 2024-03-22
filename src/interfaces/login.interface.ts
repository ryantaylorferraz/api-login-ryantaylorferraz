export interface ILogin {
    id: number;
    name: string;
    email: string;
    age: number;
}

export type TLoginCreate = Omit<ILogin, "id">

export type TLoginUpdate = Partial<TLoginCreate>

