import { Router } from "express";
import { DeleteAuthorizationTokenController, GenerateAuthorizationTokenConroller } from "../controllers/AuthorizationTokenController";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";

const AuthTokenRouter = Router();

AuthTokenRouter.get('/filipay/token', GenerateAuthorizationTokenConroller);

AuthTokenRouter.delete('/filipay/token', CheckTokenMiddleware, DeleteAuthorizationTokenController)

export default AuthTokenRouter;