import axios from "axios";
import { employeeRepo } from "../repositories/EmployeeRepository";

export async function GetAllEmployee(){

    try{

        const employees = await employeeRepo.GetAllEmployee();

        return employees;
    }catch(e){
        console.error("Error in getting the employees from our own database: "+e)
    }

}

export async function AddNewEmployee(data :any) : Promise<boolean>{
    try{

        const newEmployee = await employeeRepo.AddEmployee(data);

        return true;

    }catch(e){
        console.error("Error in adding new user controller: "+e)
        return false
    }
}

export async function UpdateEmployee(id : string, data: any){

    try{
        // console.log(id)
        // console.log(data)
        const updateEmployee = await employeeRepo.UpdateEmployeeById(id, data);

        return true;

    }catch(e){
        console.error("Error in updating new employee: "+e);
        return false;
    }

}