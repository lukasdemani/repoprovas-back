import { Router } from "express";
import * as userController from "../controllers/userController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { userSchema } from "../schemas/userSchema";

const userRouter = Router();
userRouter.post(
  "/sign-up",
  validateSchemaMiddleware(userSchema),
  userController.create
);
userRouter.post(
  "/sign-in",
  validateSchemaMiddleware(userSchema),
  userController.login
);

export default userRouter;