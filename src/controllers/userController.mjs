import { userLogin, userRegister } from "../services/authService.mjs";

const register = async (req, res, next) => {
  const user = await userRegister(req.body);
  if (!user.success) {
    const error = new Error(user.message);
    error.status = 403;
    throw error;
  }
  res.status(201).json(user);
};

const login = async (req, res) => {
  const user = await userLogin(req.body);
  if (!user.success) {
    const error = new Error(user.message);
    error.status = 401;
    throw error;
  }
  res.status(200).json(user);
};

export { register, login };
