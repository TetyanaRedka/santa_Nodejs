import { checkSchema } from "express-validator";
// const { body, validationResult } = require("express-validator");

import { MAX_WISHES_LENGTH } from "../config/config.js";

import { check, validationResult } from "express-validator";

import { body } from "express-validator";

export const playerSchema = [
  check("name", "Name must have 2+ long ").exists().isLength({ min: 2 }),
  check("surname", "Surname must have 2+ long ").exists().isLength({ min: 2 }),
  check("wishes", `Wishes must have not more them ${MAX_WISHES_LENGTH} long `)
    .exists()
    .isArray({ min: 1, max: MAX_WISHES_LENGTH }),
];

// export const playerSchema = [
//   body("name").trim().not().isEmpty(),
//   body("surname").trim().not().isEmpty(),
//   body("wishes")
//     .not()
//     .isEmpty()
//     .withMessage("Wishlist must be completed")
//     .isLength({ max: 10 })
//     .custom(checkWishesLength),
// ];

// function checkWishesLength(wishes) {
//   if (wishes.length > MAX_WISHES_LENGTH)
//     throw new Error(
//       // eslint-disable-next-line max-len
//       `maximum number of wishes is ${MAX_WISHES_LENGTH})`
//     );
//   return true;
// }
