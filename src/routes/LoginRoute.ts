import { Router } from "express";
import { LoginController } from "../controllers/LoginController";
import { IdValidMiddleware } from "../middleware/IdValid.middleware";

export const LoginRoute = Router();

const loginController = new LoginController();

LoginRoute.get("/", loginController.get)
LoginRoute.post("/", loginController.post)
LoginRoute.patch("/:id", IdValidMiddleware.execute, loginController.patch)
LoginRoute.delete("/:id", IdValidMiddleware.execute, loginController.delete)

