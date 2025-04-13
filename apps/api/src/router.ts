import { Router } from "express"

const router: Router = Router()

router.get("/status", (_, res) => {
    return res.json({ ok: true });
});


export default router