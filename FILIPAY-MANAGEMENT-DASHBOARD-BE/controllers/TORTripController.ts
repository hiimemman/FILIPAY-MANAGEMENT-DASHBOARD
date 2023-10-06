import { Request, Response } from "express";
import { GetCurrentDateSTR } from "../common/GetCurrentDate";
import TORTripServices from "../services/TORTripServices";


export async function GetAllTORTripController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const createTicket : any = await TORTripServices.GetAllTORTrip();

        if(createTicket.status === 0){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: responseDate,
                }],
                response: createTicket.response
            })
    
    
        }else{

            response.status(200).json({messages : [{
                code: "1",
                message: "One of the fields must be unique",
                dateTime: responseDate,
                }],
                response: {}
            })

        }

    }catch(e){
        console.error("Error in getting all tor trip controller: "+e);

        response.status(500).json({messages : [{
            code: "1",
            message: ""+e,
            dateTime: responseDate,
            }],
            response: {}
        })
    }

}

export async function CreateTORTripController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const newTORTrip = await TORTripServices.AddNewTORTrip(request.body);

        if(newTORTrip.status === 0){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: responseDate,
                }],
                response: newTORTrip.response
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
        console.error("Error in creating new tor trip controller: "+e);

    }

}