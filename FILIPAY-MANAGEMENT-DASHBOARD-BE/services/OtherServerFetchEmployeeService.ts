import axios from "axios";
import { EmployeeEndSessionService, EmployeeGenerateSessionService } from "../services/SessionService";
import { request } from "express";
import { employeeRepo } from "../repositories/EmployeeRepository";



export async function GetAllEmployeesFromOtherServer(token : string | boolean){
   
    try{

        const config = {
            headers :{
                Authorization : `Bearer ${token}`
            }
        }
    
        const bodyParameters = {
            "query": [{"designation" : "*"}],
            "sort": [{"fieldName": "lastName", "sortOrder": "ascend"}],
            "limit": "10000"
        }

        const requestGetEmployeeFromOtherServer = await axios.post("https://fms.dltbbus.com.ph/fmi/data/v1/databases/dltb%20company%20database/layouts/dltb_id/_find", bodyParameters, config)

        ///////////////////////////////
        /// SYNC INTO THE LOCAL SERVER
        //////////////////////////////

        requestGetEmployeeFromOtherServer.data.response.data.map( async(employee : any) =>{
            ////////////////////////////////////////////////////////////
            /// Check if the employee was already in the database before inserting it to prevent data duplication
            /////////////////////////////////////////////////////////////
            const AllowedToAddTheUser = await employeeRepo.CheckIfEmployeePerNoExist(employee.fieldData.empNo);

            if(AllowedToAddTheUser){
                const AddUser = await employeeRepo.AddEmployee(employee)
            }else{
                const UpdateUser = await employeeRepo.UpdateEmployeePerEmpNo(employee)
            }
        })

      

        return requestGetEmployeeFromOtherServer.data.response.data
    }catch(e){
        console.error("Error in getting all employees from other server services : "+e)
        return {error: e}
    }
    
}
