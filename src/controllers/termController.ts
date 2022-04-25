import { Request, Response } from "express";
import termService from "../services/termService.js";

export async function getTerms(req: Request, res: Response){
    const terms = await termService.findAll();

    res.send(terms)
}