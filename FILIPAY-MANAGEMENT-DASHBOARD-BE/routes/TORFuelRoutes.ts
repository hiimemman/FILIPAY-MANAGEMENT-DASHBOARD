import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { CreateTORFuelController, SyncGetAllTorFuelController } from "../controllers/TORFuelController";

const TORFuelRouter = Router();

TORFuelRouter.get('/sync/tor/fuel', CheckTokenMiddleware, SyncGetAllTorFuelController);
TORFuelRouter.post('/tor/fuel', CheckTokenMiddleware, CreateTORFuelController)

export default TORFuelRouter;