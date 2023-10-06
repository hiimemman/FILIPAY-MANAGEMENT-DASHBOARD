import { Router } from "express";
import { DeleteAuthorizationTokenController, GenerateAuthorizationTokenConroller } from "../controllers/AuthorizationTokenController";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";

const AuthTokenRouter = Router();

AuthTokenRouter.get('/token', GenerateAuthorizationTokenConroller);

AuthTokenRouter.delete('/token', CheckTokenMiddleware, DeleteAuthorizationTokenController)

export default AuthTokenRouter;