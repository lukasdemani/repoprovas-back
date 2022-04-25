import { Router } from "express";
import * as testController from "../controllers/testController.js";
import { ensureAuthenticationMiddleware } from "../middlewares/ensureAuthenticationMiddleware.js";


const testRouter = Router();
testRouter.get(
  "/tests/:tab",
  testController.getTests
);

testRouter.get(
    "/categories",
    ensureAuthenticationMiddleware,
    testController.getCategories
  );

testRouter.get(
    "/subjects/:disciplineId/tests",
    testController.getTestsByDiscipline
)


export default testRouter;