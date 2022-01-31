import { Router } from "express";
import signUpRoute from "./players/playersRoute.js";

import shuffleRoute from "./shuffle/shuffleRoute.js";
import { VERSION } from "../config/config.js";

const router = Router();

router.use(VERSION + "/players", signUpRoute);
router.use(VERSION + "/shuffle", shuffleRoute);

export default router;
