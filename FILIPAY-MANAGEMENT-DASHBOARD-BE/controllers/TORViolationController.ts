import { Request, Response } from "express";
import { GetCurrentDate, GetCurrentDateSTR } from "../common/GetCurrentDate";
import TORViolationService from "../services/TORViolationService";

export async function GetAllTorViolationController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    
    try{

        const tors = await TORViolationService.GetAllTOR()

        if(tors.status === 0 ){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: responseDate,
                }],
                response: tors.response
            })
        }else{
            response.status(201).json({messages : [{
                code: tors.status,
                message: tors.message,
                dateTime: responseDate,
                }],
                response: tors.response
            })
        }


    }catch(e){
        console.error("Error in controller: "+e);
        response.status(500).json({messages : [{
            code: "1",
            message: ""+e,
            dateTime: responseDate,
            }],
            response: {}
        })
    }

}

export async function CreateNewTorViolationController(request: Request, response :Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const newTOR = await TORViolationService.CreateTOR(request.body);

        if(newTOR.status === 0){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: responseDate,
                }],
                response: newTOR.response
            })
        }else{
            response.status(201).json({messages : [{
                code: newTOR.status,
                message: newTOR.message,
                dateTime: responseDate,
                }],
                response: newTOR.response
            })
        }

    }catch(e){
        console.error("Error in controller: "+e);
        response.status(500).json({messages : [{
            code: "1",
            message: ""+e,
            dateTime: responseDate,
            }],
            response: {}
        })
    }
}