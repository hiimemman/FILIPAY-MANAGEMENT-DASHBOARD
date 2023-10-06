import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { CreateNewTORMAINController, GetAllTORMainController, PatchTORMAINController, SearchForTORMAINController } from "../controllers/TorMainController";

const TORMainRouter = Router();

TORMainRouter.get('/tor/main',CheckTokenMiddleware, GetAllTORMainController);
// TORMainRouter.post('/tor/main', CheckTokenMiddleware, SearchForTORMAINController);
TORMainRouter.post('/tor/main/', CheckTokenMiddleware,  CreateNewTORMAINController)
TORMainRouter.get('/tor/main', CheckTokenMiddleware,)

TORMainRouter.patch('/tor/main/:id', CheckTokenMiddleware, PatchTORMAINController);

TORMainRouter.put('/tor/main', CheckTokenMiddleware, () =>{});

export default TORMainRouter;