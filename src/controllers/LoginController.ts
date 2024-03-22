import { Request, Response } from "express";
import { LoginService } from "../services/LoginService";

export class LoginController {
  get(req: Request, res: Response) {
    const loginService = new LoginService();
    const response = loginService.getLogin();

    return res.status(200).json(response);
  }

  post(req: Request, res: Response) {
    const loginService = new LoginService();
    const response = loginService.createLogin(req.body);

    return res.status(201).json(response);
  }

  patch(req: Request, res: Response) {
    const loginService = new LoginService();
    const response = loginService.updateLogin(req.params.id, req.body);

    return res.status(200).json(response);
  }

  delete(req: Request, res: Response) {
    const loginService = new LoginService();
    loginService.delete(req.params.id);
    
    return res.status(200).json()
  }
}

