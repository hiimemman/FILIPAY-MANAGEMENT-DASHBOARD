import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { CreateTORInspectionController, GetAllTORInspectionController } from "../controllers/TORInspectionController";

const TORInspectionRouter = Router();

TORInspectionRouter.get('/tor/inspection', CheckTokenMiddleware, GetAllTORInspectionController);

TORInspectionRouter.post('/tor/inspection', CheckTokenMiddleware, CreateTORInspectionController);

export default TORInspectionRouter;