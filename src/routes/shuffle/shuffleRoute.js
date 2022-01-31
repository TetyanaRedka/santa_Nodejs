import { Router } from "express";
// import ValidationMW from "./mw/ValidationMW.js";
import { controllers } from "../../controllers/index.js";

import { ctrlWrapper } from "../../helpers/ctrlWrapper.js";

const router = Router();

router.route("/").post(ctrlWrapper(controllers.shuffleController));

// router.route("/").get(testGetAction).post(ValidationMW, testPostAction);

export default router;
