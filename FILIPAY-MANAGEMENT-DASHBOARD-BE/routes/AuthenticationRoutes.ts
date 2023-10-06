import { Router } from "express";
import { AuthenticationController } from "../controllers/AuthenticationController";

const AuthRouter = Router();


/////////////////////////////
// AUTHENTICATION
////////////////////////////


AuthRouter.post('/auth',  AuthenticationController)

export default AuthRouter;