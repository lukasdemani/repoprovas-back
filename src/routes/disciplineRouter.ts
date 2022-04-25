import { Router } from "express";
import * as disciplineController from "../controllers/disciplineController.js";

const disciplineRouter = Router();
disciplineRouter.get(
    "/disciplines",
    disciplineController.getDisciplines
  );

disciplineRouter.get(
  "/terms/:termId/disciplines",
  disciplineController.getDisciplinesByTerm
);


export default disciplineRouter;