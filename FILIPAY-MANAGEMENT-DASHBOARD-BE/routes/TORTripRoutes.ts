import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { CreateTORTripController, GetAllTORTripController } from "../controllers/TORTripController";

const TORTripRouter = Router();

TORTripRouter.get('/tor/trip', CheckTokenMiddleware, GetAllTORTripController)
TORTripRouter.post('/tor/trip' , CheckTokenMiddleware, CreateTORTripController );

export default TORTripRouter;