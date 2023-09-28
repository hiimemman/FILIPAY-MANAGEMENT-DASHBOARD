import { Request, Response, NextFunction } from "express";
import { GetCurrentDateSTR } from "../common/GetCurrentDate";
import AuthService from "../services/AuthService";

interface IAuthResponse{
    status: number,
    message: string,
}

export async function AuthenticationController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();
  

    try{

        const authUser = await AuthService.CheckIfCardUserMatch(request.body);

        if(authUser === true){
            const token = request.body.username;
           response.cookie('authToken',token, {
            httpOnly: true,
            maxAge: 3600000,
            //sameSite: "none", // You can uncomment this if needed
            secure: false, // Set to false for HTTP in a local environment
            path: '/',
            domain: 'localhost', // Set to the appropriate domain
        })
        response.status(200).json({messages : [
            { code : "0", dateTime : responseDate, message : "OK"}
        ]});
        }else{
            response.status(201).json({messages : [{
                code: "212",
                message: "Invalid user account or password",
                dateTime: responseDate,
            }]});
        }

        

    }catch(e){
        console.error("Error in authentication controller " + e);
      
        response.status(500).json({messages : [{
            code: "212",
            message: "Authentication failed!",
            dateTime: responseDate,
        }]});
    }

}