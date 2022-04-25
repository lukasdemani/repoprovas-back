import { prisma } from "../database.js";

async function findAll() {
    return prisma.category.findMany();
  }

export default {
    findAll
}