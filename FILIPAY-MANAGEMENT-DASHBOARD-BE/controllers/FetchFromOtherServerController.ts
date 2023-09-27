import axios from "axios";
import { Request, Response } from "express";

import { EmployeeEndSessionService, EmployeeGenerateSessionService } from "../services/SessionService";

//Token for every request
let employeeToken : string | boolean = false

export async function GetAllEmployeesFromOtherServer(){
   
    try{

        const requestForToken = await EmployeeGenerateSessionService();

        employeeToken = requestForToken;

        const getEmployeeFromOtherServer = axios.post("https://fms.dltbbus.com.ph/fmi/data/v1/databases/dltb%20company%20database/layouts/dltb_id/_find")

        
        // ALWAYS END THE SESSION PLEASE GIVE SOME LOVE TO OUR SERVERS

        if(employeeToken !== false){
            const requestEndToken = await EmployeeEndSessionService(employeeToken);
        }

    }catch(e){
        console.log(e)
        
    }
    
}