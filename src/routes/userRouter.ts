import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { userSchema } from "../schemas/userSchema.js";
import { signUpSchema } from "../schemas/signUpSchema.js"

const userRouter = Router();
userRouter.post(
  "/sign-up",
  validateSchemaMiddleware(signUpSchema),
  userController.create
);
userRouter.post(
  "/sign-in",
  validateSchemaMiddleware(userSchema),
  userController.login
);

export default userRouter;