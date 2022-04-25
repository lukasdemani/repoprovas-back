import { prisma } from "../database.js";

async function findAll() {
    return prisma.discipline.findMany();
  }

async function findDisciplinesByTerm(termId: number){
  return prisma.discipline.findMany({
    where: { termId },
  });
}

export default {
    findAll,
    findDisciplinesByTerm
}