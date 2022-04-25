import termRepository from "../repositories/termRepository.js";
import { Term } from "@prisma/client";

async function findAll() {
  const terms = await termRepository.findAll();
  if (!terms) throw { type: "not_found" };
  return terms;
}

export default {
    findAll
  };