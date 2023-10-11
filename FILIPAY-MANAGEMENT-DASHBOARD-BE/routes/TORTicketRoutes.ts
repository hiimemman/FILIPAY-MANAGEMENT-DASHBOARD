import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { CreateTorTicketController, GetAllTicketController, SyncTORTicketController } from "../controllers/TORTicketController";

const TORTicketRouter = Router();

TORTicketRouter.get('/tor/ticket', CheckTokenMiddleware , GetAllTicketController);
TORTicketRouter.post('/tor/ticket' , CheckTokenMiddleware , CreateTorTicketController)
TORTicketRouter.get('/sync/tor/ticket', CheckTokenMiddleware, SyncTORTicketController);
export default TORTicketRouter;