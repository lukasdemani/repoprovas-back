import { Router } from "express";
import * as testController from "../controllers/testController.js";


const testRouter = Router();
testRouter.get(
  "/tests/:tab",
  testController.getTests
);

testRouter.get(
    "/categories",
    testController.getCategories
  );

testRouter.get(
    "/subjects/:disciplineId/tests",
    testController.getTestsByDiscipline
)


export default testRouter;