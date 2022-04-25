import { prisma } from "../database.js";
import { CreateUserData } from "../services/userService.js";

async function findAll() {
    return prisma.test.findMany();
  }

async function findTestByDiscipline(teachersDisciplines){
    return prisma.test.findMany({
        where: { 
            teacherDisciplineId: { in: teachersDisciplines.id }
         },
    });
}

async function findTeachersDisciplines(disciplineId: number){
    return prisma.teacherDiscipline.findMany({
        where: { disciplineId },
    });
}

export default {
    findAll,
    findTestByDiscipline,
    findTeachersDisciplines
}