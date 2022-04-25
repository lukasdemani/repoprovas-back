import teacherRepository from "../repositories/teacherRepository.js";
import { Teacher } from "@prisma/client";

async function findAll() {
  const teachers = await teacherRepository.findAll();
  console.log(teachers)
  if (!teachers) throw { type: "not_found" };
  return teachers;
}

export default {
    findAll
  };