import { Router } from "express";

const router = Router();

router.get("/doctors", (req, res) => {
    res.status(200).send("Testando - Aqui listaremos os médicos");
});

export default router;