import { Router } from "express";

import { IsAuthMiddleware } from "../middlewares/IsAuthMiddleware";
import { CreateNewCardUserController } from "../controllers/CardUserController";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";

const CardUserRouter = Router();

CardUserRouter.post('/filipay/carduser',CheckTokenMiddleware, CreateNewCardUserController)

export default CardUserRouter;