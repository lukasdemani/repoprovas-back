import { Router } from "express";
import * as termController from "../controllers/termController.js";

const termRouter = Router();
termRouter.get(
    "/terms",
    termController.getTerms
  );


export default termRouter;