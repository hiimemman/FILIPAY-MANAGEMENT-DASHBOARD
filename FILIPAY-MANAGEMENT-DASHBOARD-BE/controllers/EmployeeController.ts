import { Request, Response } from "express";

import { EmployeeEndSessionService, EmployeeGenerateSessionService } from "../services/SessionService";
import { GetCurrentDateSTR } from "../common/GetCurrentDate";
import { GetAllEmployeesFromOtherServer } from "../services/OtherServerFetchEmployeeService";
import { AddNewEmployee, GetAllEmployee, UpdateEmployee } from "../services/FetchFilipayServerServices";

//Token for every request
let employeeToken : string | boolean = false


export async function GetAllEmployeesController(request: Request, response: Response){
    const responseDate = GetCurrentDateSTR();
    try{

        const requestForToken = await EmployeeGenerateSessionService();

        employeeToken = requestForToken;

       
        const responseGetEmployeeFromOtherServer = await GetAllEmployeesFromOtherServer(employeeToken);
        
        // ALWAYS END THE SESSION PLEASE GIVE SOME LOVE TO OUR SERVERS

        if(employeeToken !== false){
            const requestEndToken = await EmployeeEndSessionService(employeeToken);
        }


        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
        }],
        response:[responseGetEmployeeFromOtherServer]
 });

    }catch(e){
        console.error(e)

        response.status(500).json({messages : [{
            code: "212",
            message: "Error in getting employees: "+e,
            dateTime: responseDate,
        }],
        response:[{}]
 });
        
    }
    
}

export async function GetAllEmployeesFilipayServerController(request : Request, response: Response){
    const responseDate = GetCurrentDateSTR();
    try{
        const currentDate = GetCurrentDateSTR()
        const requestForEmployeeList = await GetAllEmployee();
       
        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
        }],
        response:[requestForEmployeeList]
 });

    }catch(e){
        response.status(500).json({messages : [{
            code: "212",
            message: "Error in getting all employees: "+e,
            dateTime: responseDate,
        }],
        response:[{}]
 });
    }

}

export async function AddNewEmployeeFilipayServerController(request : Request, response : Response){
    const responseDate = GetCurrentDateSTR();
    try{

        
        const newEmployee = await AddNewEmployee(request.body);

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
        }],
        response:[{}]
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

export async function UpdateEmployeeFilipayServerController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{
        console.log(JSON.stringify(request.body))
        const updateEmployee = await UpdateEmployee(request.body._id, request.body );

        if(updateEmployee === false){

            response.status(201).json({messages : [{
                code: "212",
                message: "Modifying employee failed!",
                dateTime: responseDate,
            }],
            response:[{}]
     });

        }

        response.status(500).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
        }],
        response:[{}]
        });
    }catch(e){
        response.status(500).json({messages : [{
            code: "212",
            message: "Error in modifying employee information: "+e,
            dateTime: responseDate,
        }],
        response:[{}]
 });
    }

}