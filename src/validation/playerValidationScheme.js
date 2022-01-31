import { validationResult } from "express-validator";

export const validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: "error",
      code: 422,
      message: errors.array(),
    });
  }
  next();
};

