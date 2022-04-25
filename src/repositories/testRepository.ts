import { prisma } from "../database.js";
import { CreateUserData } from "../services/userService.js";

async function findAll() {
    return prisma.test.findMany();
  }

async function findTestByDiscipline(ids: number[]){
    console.log(ids)
    return prisma.test.findMany({
        where: { 
            teacherDisciplineId: { in: ids }
         },
    });
}

async function findTestByTeacher(ids: number[]){
    return prisma.test.findMany({
        where: { 
            teacherDisciplineId: { in: ids }
         },
    });
}

async function findTeachersDisciplinesByDiscipline(disciplineId: number){
    return prisma.teacherDiscipline.findMany({
        where: { disciplineId },
        select: {
            id: true,
        },
    });
}

async function findTeachersDisciplinesByTeacher(teacherId: number){
    return prisma.teacherDiscipline.findMany({
        where: { teacherId },
        select: {
            id: true,
        },
    });
}

export default {
    findAll,
    findTestByDiscipline,
    findTeachersDisciplinesByDiscipline,
    findTeachersDisciplinesByTeacher,
    findTestByTeacher
}