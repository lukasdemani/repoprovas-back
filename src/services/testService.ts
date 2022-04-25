import testRepository from "../repositories/testRepository.js";
import { Test } from "@prisma/client";
import { TeacherDiscipline } from "@prisma/client";

async function findAll() {
  const tests = await testRepository.findAll();
  if (!tests) throw { type: "not_found" };
  return tests;
}

async function findTestsByDiscipline(disciplineId: number) {
    const teachersDisciplines = await testRepository.findTeachersDisciplines(disciplineId);

    const tests = await testRepository.findTestByDiscipline(teachersDisciplines);
    if (!tests) throw { type: "not_found" };
    return tests;
  }



export default {
    findAll,
    findTestsByDiscipline
  };