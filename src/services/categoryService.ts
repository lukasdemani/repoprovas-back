import categoryRepository from "../repositories/categoryRepository.js";
import { Category } from "@prisma/client";

async function findAll() {
  const categories = await categoryRepository.findAll();
  if (!categories) throw { type: "not_found" };
    console.log(categories)
  return categories;
}

export default {
    findAll
  };