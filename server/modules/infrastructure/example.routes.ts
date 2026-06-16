import { Router } from "express";

import { PostgresExampleRepository } from "./PostgresExampleRepository.js";
import { ExampleServices } from "../application/ExampleServices.js";
import { ExampleControllers } from "./ExampleControllers.js";

const respository = new PostgresExampleRepository();
const service = new ExampleServices(respository);
const controllers = new ExampleControllers(service);

const router: Router = Router();

router.get(
    "/",
    controllers.find
)

router.get(
    "/crear",
    controllers.crear
)

export default router;