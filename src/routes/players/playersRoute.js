import { Router } from "express";
import bodyParser from "body-parser";

import { validation } from "../../validation/playerValidationScheme.js";

import { playerSchema } from "../../validation/schema.js";

import { controllers } from "../../controllers/index.js";

import { ctrlWrapper } from "../../helpers/ctrlWrapper.js";

const router = Router();

const urlencoderParser = bodyParser.urlencoded({ extended: false });

router.get("/", ctrlWrapper(controllers.getPlayersController));

router.post(
  "/",
  urlencoderParser,
  playerSchema,
  validation,
  ctrlWrapper(controllers.addPlayerController)
);

router.get("/:body_id", ctrlWrapper(controllers.getPlayerBodyIdController));

export default router;
