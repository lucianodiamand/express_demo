import { Router } from "express";
import { getAll, getUser, saveUser } from "../controllers/usuario";

const router = Router();

router.get("/usuarios", getAll);
router.get("/usuarios/:id", getUser);
router.post("/usuarios", saveUser);

export default router;
