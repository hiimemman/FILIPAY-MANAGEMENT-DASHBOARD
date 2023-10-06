import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { CreateTORRemittanceController, SyncGetAllTORRemittanceController } from "../controllers/TORRemittanceController";

const TORRemittanceRouter = Router();

TORRemittanceRouter.get('/sync/tor/remittance', CheckTokenMiddleware, SyncGetAllTORRemittanceController )
TORRemittanceRouter.post('/tor/remittance', CheckTokenMiddleware, CreateTORRemittanceController);

export default TORRemittanceRouter;