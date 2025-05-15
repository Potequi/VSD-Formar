 import User from "@/models/user";

import User  from "../models/User"import { where } from "sequelize";
,

export class  Userseverce{

  async create(userData: { name: string; email: string; }) {
    where: { email: userData,email},
  });
  if ( existingUser > 0) throw { status: 400, message; "User already exists"};

  const createUser = await User.create(userData);
  return User.findByPk(createdUser.id, {
     attributes: { exclude:[pa]}
  }