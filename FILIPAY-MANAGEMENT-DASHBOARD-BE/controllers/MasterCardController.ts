import { Request, Response } from "express";
import { GetCurrentDateSTR } from "../common/GetCurrentDate";
import MasterCardServices from "../services/MasterCardServices";
import MasterCardRepository from "../repositories/MasterCardRepository";

export async function GetAllMasterCardController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const masterCards = await MasterCardServices.GetAllMasterCard();

        if(masterCards){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: responseDate,
                }],
                response: masterCards
            })
        }else{
            response.status(201).json({messages : [{
                code: "1",
                message: "Failed to get master cards",
                dateTime: responseDate,
                }],
                response: {}
            })
        }

       

    }catch(e){

        console.error("Error in getting all master card controller: "+e);

        response.status(500).json({messages : [{
            code: "212",
            message: "Error in getting mastercard: "+e,
            dateTime: responseDate,
            }],
            response: {}
        })

    }

}

export async function AddNewMasterCardController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const newMasterCard = await MasterCardServices.CreateNewMasterCard(request.body);

        console.log(newMasterCard)

        if(newMasterCard === true){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: responseDate,
                }],
                response: {}
            })
        }else{
            response.status(201).json({messages : [{
                code: "1",
                message: newMasterCard,
                dateTime: responseDate,
                }],
                response: {}
            })
        }

      

    }catch(e){

        console.error("Error in adding new master card controller: "+e);

        response.status(500).json({messages : [{
            code: "212",
            message: "Error in getting mastercard: "+e,
            dateTime: responseDate,
            }],
            response: {}
        })

    }


}