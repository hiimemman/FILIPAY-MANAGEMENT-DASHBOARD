import { Request, Response } from "express";
import AuthorizationTokenService from "../services/AuthorizationTokenService";
import { authorizationTokenRepo } from "../repositories/AuthorizationTokenRepository";
import { GetCurrentDateSTR } from "../common/GetCurrentDate";

export async function GenerateAuthorizationTokenConroller(request: Request, response: Response){
    const responseDate = GetCurrentDateSTR();
    try{

        const AuthorizationToken = await AuthorizationTokenService.AddUserAuthorizationToken();

        response.status(200).json({messages : [{
            code: "0",
            message: "You have received a fresh token: ",
            dateTime: responseDate,
        }],
        response:[{token: AuthorizationToken}]
    });

    }catch(e){
    response.status(500).json({messages : [{
            code: "212",
            message: "Error in generating token: "+e,
            dateTime: responseDate,
        }],
        response:[{}]
    });
  }
}

export async function DeleteAuthorizationTokenController(request : Request, response: Response){
    const responseDate = GetCurrentDateSTR();
    try{

    const deleteToken = await authorizationTokenRepo.DeleteToken(request.headers.authorization)


    response.status(200).json({messages : [{
        code: "0",
        message: "Token has been deleted!",
        dateTime: responseDate,
    }],
        response:[{}]
    });

    }catch(e){
        response.status(500).json({messages : [{
            code: "212",
            message: "Error in deleting token: "+e,
            dateTime: responseDate,
        }],
        response:[{}]
        });
    }
}