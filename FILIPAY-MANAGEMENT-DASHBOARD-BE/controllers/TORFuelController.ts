import { Request, Response } from "express";
import { GetCurrentDateSTR } from "../common/GetCurrentDate";
import TORFuelService from "../services/TORFuelService";

export async function SyncGetAllTorFuelController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const toFuel = await TORFuelService.SyncGETAllTORFuelService();

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
            }],
            response: toFuel
        })

    }catch(e){
        console.error("Error in sync get all tor fuel controller: "+e);

        response.status(500).json({messages : [{
            code: "212",
            message: "Error in getting employees: "+e,
            dateTime: responseDate,
            }],
            response: {}
        })
    }

}

export async function CreateTORFuelController(request: Request, response : Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const createTorFuel = await TORFuelService.CreateTORFuelService(request.body);


        if(createTorFuel.status === 0){
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

        console.error("Error in sync get all tor fuel controller: "+e);

        response.status(500).json({messages : [{
            code: "212",
            message: "Error in getting employees: "+e,
            dateTime: responseDate,
            }],
            response: {}
        })

    }

}


export async function GetAllTORFuelController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const torFuels = await TORFuelService.GetAllTORFuelService();

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
        }],
        response: torFuels
        });

    }catch(e){

        console.error("Error in sync get all tor fuel controller: "+e);

        response.status(500).json({messages : [{
            code: "212",
            message: "Error in getting employees: "+e,
            dateTime: responseDate,
            }],
            response: {}
        })

    }

}