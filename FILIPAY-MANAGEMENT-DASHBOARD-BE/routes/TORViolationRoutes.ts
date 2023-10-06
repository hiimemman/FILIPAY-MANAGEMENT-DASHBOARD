import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { CreateNewTorViolationController, GetAllTorViolationController } from "../controllers/TORViolationController";

const TORViolationRouter = Router();


TORViolationRouter.get('/tor/violation', CheckTokenMiddleware, GetAllTorViolationController);

TORViolationRouter.post('/tor/violation', CheckTokenMiddleware, CreateNewTorViolationController);

export default TORViolationRouter;