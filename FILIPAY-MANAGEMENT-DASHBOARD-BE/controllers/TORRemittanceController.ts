import { Request, Response } from "express";
import { GetCurrentDateSTR } from "../common/GetCurrentDate";
import TORRemittanceService from "../services/TORRemittanceService";

export async function SyncGetAllTORRemittanceController(request : Request, response : Response){

    const responseDate = await GetCurrentDateSTR();

    try{

        const getAllTorRemittance = await TORRemittanceService.SyncGetAllRemittance();

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
            }],
            response: getAllTorRemittance
        })

    }catch(e){
        console.error("Error in sync get all tor remittance controller: "+e);

        response.status(500).json({messages : [{
            code: "212",
            message: "Error in creating tor ticket: "+e,
            dateTime: responseDate,
            }],
            response: {}
        })
    }

}

export async function CreateTORRemittanceController(request: Request, response: Response){

    const responseDate =  GetCurrentDateSTR();

    try{

        const createTORRemittance = await TORRemittanceService.CreateTORRemittance(request.body);

        if(createTORRemittance.status === 0){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: responseDate,
                }],
                response: {}
            })
    
    
        }else{

            response.status(200).json({messages : [{
                code: "1",
                message: "UUID must be unique",
                dateTime: responseDate,
                }],
                response: {}
            })

        }


    }catch(e){
        console.error("Error in creating new tor remittance controller: "+e);

        response.status(500).json({messages : [{
            code: "212",
            message: "Error in creating tor ticket: "+e,
            dateTime: responseDate,
            }],
            response: {}
        })
    }

}

export async function GetAllRemittanceController(request : Request, response : Response){

    const responseDate =  GetCurrentDateSTR();

    try{

        const torRemittance = await TORRemittanceService.GetAllTORRemittance();

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
            }],
            response: torRemittance
        })

    }catch(e){
        console.error("Error in get all tor remittance controller: "+e);
        response.status(500).json({messages : [{
            code: "212",
            message: "Error in creating tor ticket: "+e,
            dateTime: responseDate,
            }],
            response: {}
        })
    }

}