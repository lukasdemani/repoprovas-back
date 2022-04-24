import { Router } from "express";
import * as testController from "../controllers/testController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { testSchema } from "../schemas/testSchema";

const userRouter = Router();
userRouter.post(
  "/sign-up",
  validateSchemaMiddleware(testSchema),
  testController.create
);
userRouter.post(
  "/sign-in",
  validateSchemaMiddleware(testSchema),
  testController.login
);

export default testRouter;