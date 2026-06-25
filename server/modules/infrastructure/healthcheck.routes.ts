import { Router } from "express";
import { Response, Request } from "express";

const router: Router = Router();

router.get(
    "/",
    (req: Request, res: Response) => {
        res.status(200).json({
            status: "OK",
            message: "Server is OK",
            timeStamp: new Date().toISOString().split("T")[0]
        })
    }
)

export default router;