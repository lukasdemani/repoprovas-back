import disciplineRepository from "../repositories/disciplineRepository.js";
import { Discipline } from "@prisma/client";

async function findAll() {
  const disciplines = await disciplineRepository.findAll();
  if (!disciplines) throw { type: "not_found" };
  return disciplines;
}

async function findDisciplinesByTerm(termId: number) {
  const disciplines = await disciplineRepository.findDisciplinesByTerm(termId);
  if (!disciplines) throw { type: "not_found" };
  return disciplines;
}


export default {
    findAll,
    findDisciplinesByTerm
  };