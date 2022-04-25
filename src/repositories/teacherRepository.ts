import { prisma } from "../database.js";

async function findAll() {
    return prisma.teacher.findMany();
  };

export default {
    findAll
};