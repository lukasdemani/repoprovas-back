import { Router } from "express";
import userRouter from "./userRouter.js";
import testRouter from "./testRouter.js";
import termRouter from "./termRouter.js";
import disciplineRouter from "./disciplineRouter.js";

const router = Router();
router.use(userRouter);
router.use(testRouter);
router.use(termRouter);
router.use(disciplineRouter)

export default router;