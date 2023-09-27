import axios from "axios";
import { Request, Response } from "express";

import { EmployeeEndSessionService, EmployeeGenerateSessionService } from "../services/SessionService";
import { GetCurrentDateSTR } from "../common/GetCurrentDate";
import { GetAllEmployeesFromOtherServer } from "../services/OtherServerFetchEmployeeService";
import { AddNewEmployee, GetAllEmployee, UpdateEmployee } from "../services/FetchFilipayServerServices";

//Token for every request
let employeeToken : string | boolean = false


export async function GetAllEmployeesController(request: Request, response: Response){
 
    try{

        const requestForToken = await EmployeeGenerateSessionService();

        employeeToken = requestForToken;

       
        const responseGetEmployeeFromOtherServer = await GetAllEmployeesFromOtherServer(employeeToken);
        
        // ALWAYS END THE SESSION PLEASE GIVE SOME LOVE TO OUR SERVERS

        if(employeeToken !== false){
            const requestEndToken = await EmployeeEndSessionService(employeeToken);
        }


        const currentDate = GetCurrentDateSTR()
        response.status(200).json({"datetime" : currentDate, "employee_data" : responseGetEmployeeFromOtherServer})
    }catch(e){
        console.error(e)
        response.status(500).json({error: ""+e})
    }
    
}

export async function GetAllEmployeesFilipayServerController(request : Request, response: Response){

    try{
        const currentDate = GetCurrentDateSTR()
        const requestForEmployeeList = await GetAllEmployee();
        console.log(requestForEmployeeList)
        response.status(200).json({"datetime" : currentDate, "employee_data" : requestForEmployeeList})
    }catch(e){
        console.error(e)
        response.status(500).json({error: ""+e})
    }

}

export async function AddNewEmployeeFilipayServerController(request : Request, response : Response){
    const currentDate = GetCurrentDateSTR();
    try{

        
        const newEmployee = await AddNewEmployee(request.body);
        
        response.status(200).json({"datetime" : currentDate, "message" : "Added succesfully!"})

    }catch(e){
        response.status(500).json({"datetime" : currentDate, "message" : "Adding new employee failed!", errorMessage: ""+e})
    }

}

export async function UpdateEmployeeFilipayServerController(request: Request, response: Response){

    const currentDate = GetCurrentDateSTR();

    try{
        console.log(JSON.stringify(request.body))
        const updateEmployee = await UpdateEmployee(request.body.id, request.body );

        if(updateEmployee === false){
            response.status(201).json({"datetime": currentDate, "message" : "Modifying employee failed! "})
        }

        response.status(200).json({"message": "added succesfully!"})
    }catch(e){
        response.status(500).json({"datetime" : currentDate, "message" : "Updating employee failed! ", errorMessage: ""+e})
    }

}