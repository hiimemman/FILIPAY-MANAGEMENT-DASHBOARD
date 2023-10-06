import { Request, Response } from "express";
import { GetCurrentDateSTR } from "../common/GetCurrentDate";
import TORMainService from "../services/TORMainService";



// response.status(500).json({messages : [{
//     code: "212",
//     message: "Error in getting employees: "+e,
//     dateTime: responseDate,
// }],
// response:[{}]

export async function PatchTORMAINController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{

       const recordId = request.params.id;

       const updateTORMain = await TORMainService.UpdateTORMainServiceToOtherServer(request.body, recordId);

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
        }],
        response: {}
        });
    }catch(e){
        console.error("Error in tor main controller: "+e)
        response.status(500).json({messages : [{
            code: "212",
            message: "Error in getting employees: "+e,
            dateTime: responseDate,
            }],
            response: {}
        })
    }

}

export async function SearchForTORMAINController(request: Request, response: Response){
    const responseDate = GetCurrentDateSTR();

    try{
     
        const requestTorMain = await TORMainService.SearchTORMainService(request.body.UUID);

        // console.log(requestTorMain)

        response.status(200).json({message: "success", torMain : requestTorMain})

    }catch(e){

       
    }

}

export async function GetAllTORMainController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{
     
        const torMains = await TORMainService.GetAllTORMainFromServer();

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
        }],
        response:torMains
        });

    }catch(e){
        console.error("Error in tor main controller: "+e)
        response.status(500).json({messages : [{
            code: "212",
            message: "Error in getting employees: "+e,
            dateTime: responseDate,
            }],
            response: {}
        })
        
    }

}

export async function CreateNewTORMAINController(request: Request, response: Response) {
    const responseDate = GetCurrentDateSTR();
    try{
      const newTorMain = await TORMainService.CreateTORMAinToOtherServerService(request.body);

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
        }],
        response:[]
        });
        
    }catch(e){
        
        console.error("Error in Create new tor main controller: "+ e)
        
        response.status(500).json({messages : [{
        code: "212",
        message: "Error in adding employees: "+e,
        dateTime: responseDate,
        }],
        response:[{}]
        })
    
    }

}