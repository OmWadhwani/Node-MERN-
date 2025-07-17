import { Router } from "express";

import { healthcheck } from "../controllers/health.js";
const router  =Router()

router.route("/").get(healthcheck)
router.route("/test").get(healthcheck)

router.route("/").get(upload.field, healthcheck)

export default router