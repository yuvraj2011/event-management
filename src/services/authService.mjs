import User from "../models/userModel.mjs";
import bcrypt from "bcrypt";
import { Op } from "sequelize";
import jwt from "jsonwebtoken";
const { JWT_SECRET } = process.env;

export const userRegister = async ({
  firstName,
  lastName,
  username,
  email,
  password,
  confirmPassword,
}) => {
  if (password !== confirmPassword)
    return {
      success: false,
      message: "password and confirm password does not match",
    };
  const user = await User.findOne({
    where: { [Op.or]: [{ email }, { username }] },
  });
  if (user)
    return { success: false, message: "email or username already exists" };
  const hashedPassword = await bcrypt.hash(password, 10);
  const data = await User.create({
    username,
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  const token = await generateTokenFromUser(data);
  return { success: true, token: token };
};

export const generateTokenFromUser = async ({
  username,
  id,
  email,
  firstName,
  lastName,
}) => {
  const token = await jwt.sign(
    { username, id, email, firstName, lastName },
    JWT_SECRET,
    { expiresIn: "2h" }
  );
  return token;
};

export const userLogin = async ({ email, password }) => {
  const userExists = await User.findOne({ where: { email } });
  if (!userExists) return { success: false, message: "email not found" };

  const passwordCheck = await bcrypt.compare(password, userExists.password);
  if (!passwordCheck) {
    return { success: false, message: "invalid password" };
  }
  const token = await generateTokenFromUser(userExists.dataValues);
  return { success: true, token: token };
};
