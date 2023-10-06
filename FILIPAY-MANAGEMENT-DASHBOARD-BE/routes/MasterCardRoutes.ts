import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import {  AddNewMasterCardController, GetAllMasterCardController } from "../controllers/MasterCardController";

const MasterCardRouter = Router();

MasterCardRouter.get('/mastercard', CheckTokenMiddleware, GetAllMasterCardController);
MasterCardRouter.post('/mastercard', CheckTokenMiddleware, AddNewMasterCardController);

export default MasterCardRouter;