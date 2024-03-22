import { NextFunction, Request, Response } from "express";
import { LoginDatabase } from "../database/LoginDatabase";

export class IdValidMiddleware {
    static execute(req: Request, res: Response, next: NextFunction){
        if(!LoginDatabase.some(login => login.id === Number(req.params.id))) {
            return res.status(400).json("login not found")
        }
        next;
    }
}
