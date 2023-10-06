import { Request,Response,NextFunction } from "express";
import { authorizationTokenRepo } from "../repositories/AuthorizationTokenRepository";

export async function CheckTokenMiddleware(request: Request, response: Response, next: NextFunction){

    try{    
        // console.log(request.headers)
        let token = request.headers.authorization?.replace("Bearer ","");
        const isAuth = await authorizationTokenRepo.CheckIfExistToken(token)

        if(isAuth){
            next();
        }else{
            console.log("Someone tries to connect to our protected routes without token / cookie")
            return response.status(401).json()
        }

    }catch(e){
        console.error("Error in check token middleware: "+e);
        return response.status(500).json({errorMessage: "Internal server error: "+e})
    }

}