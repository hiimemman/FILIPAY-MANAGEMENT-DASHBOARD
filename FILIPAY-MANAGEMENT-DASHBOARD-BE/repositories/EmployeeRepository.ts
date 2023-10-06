import { StringExpressionOperatorReturningObject } from "mongoose";
import EmployeeModel from "../models/EmployeeModel";

export interface IEmployeeData {

    portalData: [],

    recordId: number,

    modId: number,

    fieldData:{

        lastName: string,

        firstName: string,

        middleName: string,

        nameSuffix: string,

        empNo: string,

        empStatus: string,

        empType: string,

        idName: string,

        designation: string,

        idPicture: string,

        idSignature: string,

        JTI_RFID: string,

        accessPrivileges: string,

        JTI_RFID_RequestDate: StringExpressionOperatorReturningObject

    }

}


class EmployeeRepository{

    async GetAllEmployee(){
        try{

            const employees = await EmployeeModel.find({})

            return employees;
        }catch(e){
            console.error("Repository error: "+e);
            return false;
        }
    }
    
    async UpdateEmployeeById(id : string, data: IEmployeeData){
        try{

            return await EmployeeModel.findByIdAndUpdate(id, data, {new: true});

        }catch(e){
            console.error("Repository error: ",e)
        }
    }

    async AddEmployee( data : IEmployeeData){

        try{
           const newEmployee = {
                "portalData" : data.portalData,
                "recordId": data.recordId,
                 "modId" : data.modId,
                 "fieldData" : data.fieldData
            }

            // console.log(data);
            const employeeData = new EmployeeModel(newEmployee);
            const employeeDataSave = await employeeData.save();

            return true;

        }catch(e){
            
            console.error("Repository error: ",e);
            return false;

        }

    }

    async UpdateEmployeePerEMPNo ( data : IEmployeeData) {
    
        try{

            const employee = await EmployeeModel.findOneAndReplace({'fieldData[0].empNo' : data.fieldData.empNo}, data )

        }catch(e){
            console.error("Error in employee repository: "+e);
            return true;
        }

    }

    async GetEmployeePerEmpNo (id : number) : Promise<any>{

        try{
 
            const employee = await EmployeeModel.findOne({'fieldData[0].empNo' :id})

            return employee
        }catch(e){
            console.error("Repository error: "+e);
            return false;
        }

    }

    async CheckIfEmployeePerNoExist(id : IEmployeeData) : Promise<boolean>{
        try{
            let ifAllowedToAdd = false;
            const employee = await EmployeeModel.findOne({'fieldData.empNo' :id})

            if(employee === null){
                ifAllowedToAdd = true;
            }

            if(ifAllowedToAdd === true){
                return true;
            }else{
                return false;
            }
        }catch(e){
            
            console.error("Repository error: "+e);
            return false;
        }
    }


    async UpdateEmployeePerEmpNo(data : any) : Promise<boolean>{
       
        try{
            
            const updateEmployeeData = await EmployeeModel.findOneAndUpdate({'fieldData.empNo' :data.empNo}, data)

            return true;
        }catch(e){
           
            console.error("Repository error: "+e);
            return false;
        }

    } 
}

export const employeeRepo = new EmployeeRepository();