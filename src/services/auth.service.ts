import { userModel } from "../models/user.model";
import { User } from "../types/user.types";
import { usersService } from "./user.service";

async function login(uid: string) {
  // const user = await userModel.findOne({ uid }).lean();
  const user = await usersService.getUserByUID(uid);
  return user;
}

async function signup(data: Partial<User>) {
  // const newUser = await userModel.create(data);
  const newUser = await usersService.addUser(data);
  return newUser;
}

export const authService = {
  login,
  signup,
};
