import { Request, Response, NextFunction } from "express";
import CardUserService from "../services/CardUserService";
import { GetCurrentDateSTR } from "../common/GetCurrentDate";

export async function CreateNewCardUserController(request : Request, response : Response){
    const responseDate = GetCurrentDateSTR();

    try{
        console.log(request.body)
        const addUser = await CardUserService.AddCardUserService(request.body)

        console.log(addUser)
        if(addUser === false){
            response.status(201).json({message: "Creating new card user failed!"});

            response.status(201).json({messages : [{
                code: "212",
                message: "Creating new card user failed!",
                dateTime: responseDate,
            }],
            response:[{}]
     });
            
        }else{

            response.status(200).json({messages : [{
                code: "0",
                message: "Successfully created a new card!",
                dateTime: responseDate,
            }],
            response:[{}]
            });
        }
        

    }catch(e){
        response.status(500).json({messages : [{
            code: "212",
            message: "Creating new card failed! error: "+e,
            dateTime: responseDate,
        }],
        response:[{}]
 });

    }

}