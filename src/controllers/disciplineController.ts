import { Request, Response } from "express";
import disciplineService from "../services/disciplineService.js";

export async function getDisciplines(req: Request, res: Response){
    const disciplines = await disciplineService.findAll();

    res.send(disciplines)
}

export async function getDisciplinesByTerm(req: Request, res: Response){
    const { termId }= req.params;
    const disciplinesByTerms = await disciplineService.findDisciplinesByTerm(Number(termId));

    res.send(disciplinesByTerms)
}