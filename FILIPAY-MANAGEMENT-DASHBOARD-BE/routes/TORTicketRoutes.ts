import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { CreateTorTicketController, GetAllTicket, SyncGetAllTicket } from "../controllers/TORTicketController";

const TORTicketRouter = Router();

TORTicketRouter.get('/tor/ticket', CheckTokenMiddleware , GetAllTicket);
TORTicketRouter.get('/sync/tor/ticket', CheckTokenMiddleware, SyncGetAllTicket)
TORTicketRouter.post('/tor/ticket' , CheckTokenMiddleware , CreateTorTicketController)
export default TORTicketRouter;