import { Request, Response } from "express"
import { GetCurrentDateSTR } from "../common/GetCurrentDate"
import TORInspectionService from "../services/TORInspectionService";


export async function GetAllTORInspectionController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const torInspections = await TORInspectionService.GetAllTORInspection();

        if(torInspections.status === 0 ){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: responseDate,
                }],
                response: torInspections.response
            })
        }else{
            response.status(201).json({messages : [{
                code: torInspections.status,
                message: torInspections.message,
                dateTime: responseDate,
                }],
                response: torInspections.response
            })
        }


    }catch(e){
        console.error("Error in inspection controller: "+e);
        response.status(500).json({messages : [{
            code: "1",
            message: ""+e,
            dateTime: responseDate,
            }],
            response: {}
        })
    }

}

export async function CreateTORInspectionController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const newTORInspection = await TORInspectionService.CreateTORInspection(request.body);

        if(newTORInspection.status === 0){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: responseDate,
                }],
                response: newTORInspection.response
            })
        }else{
            response.status(201).json({messages : [{
                code: newTORInspection.status,
                message: newTORInspection.message,
                dateTime: responseDate,
                }],
                response: newTORInspection.response
            })
        }

    }catch(e){
        console.error("Error in inspection controller: "+e);
        response.status(500).json({messages : [{
            code: "1",
            message: ""+e,
            dateTime: responseDate,
            }],
            response: {}
        })
    }

}