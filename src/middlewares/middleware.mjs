import User from "../models/userModel.mjs";
import jwt from "jsonwebtoken";
const { JWT_SECRET } = process.env;

export const auth = async (req, res, next) => {
  if (!req.header("authorization")) {
    return res
      .status(401)
      .json({
        success: false,
        message: "Token missing or malformed Please pass authorization",
      });
  }
  const token = req.header("authorization").replace(/^Bearer\s+/, "");
  const decode = jwt.verify(token, JWT_SECRET);
  const email = decode.email;
  const user = await User.findOne({ where: { email } });
  if (user === null) {
    return res.status(404).json({ message: "user not found" });
  }
  req.user = user;
  next();
};
