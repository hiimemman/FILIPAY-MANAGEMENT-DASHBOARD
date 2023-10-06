import TORTroubleModel from "../models/TORTroubleModel";
import TORTripRepository from "./TORTripRepository";

export interface ITrouble{

    UUID: string,
    device_id: string,
    control_no: string,
    tor_no: string,
    date_of_trip: string,
    bus_no: string,
    route: string,
    route_code: string,
    bound: string,
    trip_no: number,
    inspector_emp_no: string,
    inspector_emp_name: string,
    onboard_time: string,
    onboard_place:string,
    onboard_km_post:number,
    trouble_description:string,
    timestamp: string,
    lat: string,
    long: string

}

export interface ITORTrouble{
    portalId: {},
    recordId: string,
    modId: string,
    fieldData: ITrouble
}

class TORTroubleRepository{

    async GetAllTor(){

        try{

            const torInspection = await TORTroubleModel.find({});

            return torInspection;

        }catch(e){

            console.error("Error in tor  repository: "+e);
            return e;

        }

    }

    async CreateTOR(fieldData : ITrouble){
        
        try{

            const tor ={
                "portalId": {},
                "recordId": "",
                "modId": "",
                fieldData
            }

            const newTor = new TORTroubleModel(tor);

            const saveTor = await newTor.save();

            return saveTor;

        }catch(e){

            console.error("Error in tor  repository: "+e);

            return e;
        }

    }


}

export default new TORTroubleRepository();