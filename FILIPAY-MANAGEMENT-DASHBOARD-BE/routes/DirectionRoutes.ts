import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { AddNewDirectionController, GetAllDirectionsController } from "../controllers/DirectionController";

const DirectionRouter = Router();

DirectionRouter.get("/directions", CheckTokenMiddleware, GetAllDirectionsController);
DirectionRouter.post("/directions", CheckTokenMiddleware, AddNewDirectionController);

export default DirectionRouter;