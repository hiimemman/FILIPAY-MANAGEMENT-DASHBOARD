import { Request,Response,NextFunction } from "express";
import { authorizationTokenRepo } from "../repositories/AuthorizationTokenRepository";

export async function CheckTokenMiddleware(request: Request, response: Response, next: NextFunction){

    try{    

        let token = request.headers.authorization?.replace("Bearer ","");
        console.log(token?.trim())
        const isAuth = await authorizationTokenRepo.CheckIfExistToken(token)

        if(isAuth){
            next();
        }else{
            return response.status(401).json("Unauthorized please provide a valid token");
        }

    }catch(e){
        console.error("Error in check token middleware: "+e);
        return response.status(500).json({errorMessage: "Internal server error: "+e})
    }

}