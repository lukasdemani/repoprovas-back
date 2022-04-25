import { Request, Response } from "express";
import teacherService from "../services/teacherService.js";

export async function getTeachers(req: Request, res: Response){
    const teachers = await teacherService.findAll();

    res.send(teachers)
}