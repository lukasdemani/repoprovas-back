import { Router } from "express";
import * as teacherController from "../controllers/teacherController.js";
import * as testController from "../controllers/testController.js";
import { ensureAuthenticationMiddleware } from "../middlewares/ensureAuthenticationMiddleware.js";

const teacherRouter = Router();
teacherRouter.get(
    "/teachers",
    ensureAuthenticationMiddleware,
    teacherController.getTeachers
  );
teacherRouter.get(
    "/teachers/:teacherId/tests",
    testController.getTestsByTeacher
)


export default teacherRouter;