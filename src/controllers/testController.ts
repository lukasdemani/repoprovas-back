import { Request, Response } from "express";
import testService from "../services/testService.js";

export async function getTests(req: Request, res: Response){
    const category = req.params;
    const tests = await testService.findAll();

    res.send(tests)
}

export async function getCategories(req: Request, res: Response){
    const categories = await testService.findAll();

    res.send(categories)
}

export async function getTestsByDiscipline(req: Request, res: Response){
    const { disciplineId }= req.params;

    const testsByDiscipline = await testService.findTestsByDiscipline(Number(disciplineId))

    res.send(testsByDiscipline)
}