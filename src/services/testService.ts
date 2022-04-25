import testRepository from "../repositories/testRepository.js";
import { Test } from "@prisma/client";
import { TeacherDiscipline } from "@prisma/client";

async function findAll() {
  const tests = await testRepository.findAll();
  if (!tests) throw { type: "not_found" };
  return tests;
}

async function findTestsByDiscipline(disciplineId: number) {
    const teachersDisciplines = await testRepository.findTeachersDisciplinesByDiscipline(disciplineId);
    const teachersDisciplinesIds = teachersDisciplines.map((item) => item.id)
    const tests = await testRepository.findTestByDiscipline(teachersDisciplinesIds);
    if (!tests) throw { type: "not_found" };
    return tests;
  }

async function findTestsByTeacher(teacherId: number) {
    const teachersDisciplines = await testRepository.findTeachersDisciplinesByTeacher(teacherId);
    const teachersDisciplinesIds = teachersDisciplines.map((item) => item.id)
    const tests = await testRepository.findTestByTeacher(teachersDisciplinesIds);
    if (!tests) throw { type: "not_found" };
    return tests;
}



export default {
    findAll,
    findTestsByDiscipline,
    findTestsByTeacher
  };