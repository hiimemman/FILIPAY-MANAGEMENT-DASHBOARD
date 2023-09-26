import { StringExpressionOperatorReturningObject } from "mongoose";
import EmployeeModel from "../models/EmployeeModel";

export interface IEmployeeData {

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

    async AddUser( data : IEmployeeData){

        try{

            const employeeData = new EmployeeModel(data);
            const employeeDataSave = await employeeData.save();

            return true;

        }catch(e){
            
            console.error("Repository error: ",e);
            return false;

        }

    }


}