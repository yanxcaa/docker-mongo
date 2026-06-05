import { Router } from "express";
import { Response, Request } from "express";
import { timeStamp } from "node:console";

const router: Router = Router();

router.get(
    "/",
    (req: Request, res: Response) => {
        res.status(200).json({
            status: "UP",
            message: "Server is healthy",
            timeStamp: new Date().toISOString()
        })
    }
)

export default router;