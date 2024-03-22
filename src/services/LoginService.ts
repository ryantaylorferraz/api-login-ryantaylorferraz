import { LoginDatabase, generatedId } from "../database/LoginDatabase";
import { ILogin, TLoginCreate, TLoginUpdate } from "../interfaces/login.interface";

export class LoginService {
    getLogin() {
        return LoginDatabase;
    }

    createLogin(data: TLoginCreate) {
        const newLogin: ILogin = {id: generatedId(), name: data.name, email: data.email, age: data.age}

        LoginDatabase.push(newLogin)

        return newLogin;
    }

    updateLogin(id: string, data: TLoginUpdate ){
        const index = LoginDatabase.findIndex(login => login.id === Number(id));
        const currentLogin = LoginDatabase.find(login => login.id === Number(id)) as ILogin;
        const updateLogin = {...currentLogin, ...data}

        LoginDatabase.splice(index, 1, updateLogin);

        return updateLogin
    }

    delete(id: string) {
        const index = LoginDatabase.findIndex(login => login.id === Number(id));
        LoginDatabase.splice(index, 1);
    }
}

