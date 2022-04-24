import { Request, Response } from "express";
import questionService from "../services/questionService.js";
import userService, { CreateUserData } from "../services/userService.js";

export async function create(req: Request, res: Response) {
  const user: CreateUserData = req.body;

  await userService.insert(user);

  res.sendStatus(201);
}

export async function login(req: Request, res: Response) {
  const user: CreateUserData = req.body;

  const token = await userService.login(user);

  res.send({
    token,
  });
}

export async function getQuestions(req: Request, res: Response) {
  const { id } = req.params;

  const questions = await questionService.findByUserId(+id);

  res.send({
    questions,
  });
}
