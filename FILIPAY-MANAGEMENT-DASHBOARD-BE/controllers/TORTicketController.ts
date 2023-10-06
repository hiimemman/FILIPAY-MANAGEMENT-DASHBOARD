import { Request, Response } from "express";
import { GetCurrentDateSTR } from "../common/GetCurrentDate";
import TORTicketServices from "../services/TORTicketServices";

export async function GetAllTicket(request: Request, response: Response){
    
    const responseDate = GetCurrentDateSTR();
    
    try{

        const torTickets = await TORTicketServices.GetAllTORTicketService();

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
            }],
            response: torTickets
        })

    }catch(e){

        console.error("Error in controller: "+e);

        response.status(500).json({messages : [{
            code: "212",
            message: "Error in getting employees: "+e,
            dateTime: responseDate,
            }],
            response: {}
        })

    }

}

export async function SyncGetAllTicket(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const torTicket = await TORTicketServices.SyncGetAllTORTicketService();

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
            }],
            response: torTicket
        })

    }catch(e){

        console.error("Error in controller: "+e);

        response.status(500).json({messages : [{
            code: "212",
            message: "Error in getting employees: "+e,
            dateTime: responseDate,
            }],
            response: {}
        })
        
    }

}

export async function CreateTorTicketController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const createTicket = await TORTicketServices.CreateTORTicketServices(request.body);

        if(createTicket.status === 0){
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
        console.error("Error in controller: "+e);

        response.status(500).json({messages : [{
            code: "212",
            message: "Error in creating tor ticket: "+e,
            dateTime: responseDate,
            }],
            response: {}
        })

    }

}