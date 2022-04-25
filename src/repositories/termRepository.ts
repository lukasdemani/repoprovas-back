import { prisma } from "../database.js";

async function findAll() {
    return prisma.term.findMany();
  }

export default {
    findAll
}