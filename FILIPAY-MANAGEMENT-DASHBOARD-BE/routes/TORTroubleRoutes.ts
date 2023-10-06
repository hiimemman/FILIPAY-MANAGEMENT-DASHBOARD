import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { CreateNewTorTroubleController, GetAllTorTroubleController } from "../controllers/TORTroubleController";

const TORTroubleRouter = Router();

TORTroubleRouter.get('/tor/trouble', CheckTokenMiddleware, GetAllTorTroubleController);

TORTroubleRouter.post('/tor/trouble', CheckTokenMiddleware, CreateNewTorTroubleController);

export default TORTroubleRouter;