import { Router } from "express";
import { getAbout } from "../controllers/about";

const router = Router();

router.get("/about", getAbout);

export default router;
