import { Router } from "express";
import { Response, Request } from "express";

const router: Router = Router();

router.get(
    "/",
    (req: Request, res: Response) => {
        res.status(200).json({
            status: "UP",
            message: "Server is healthy",
            timeStamp: new Date().toISOString().split("T")[0]
        })
    }
)

export default router;