import TORInspectionModel from "../models/TORInspectionModel";

export interface IInspection{

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

    onboard_place: string,

    onboard_km_post: number,

    offboard_time: string,

    offboard_place: string,

    offboard_km_post: string,

    ticket_no_beginning: string,

    ticket_no_ending: string,

    passenger_count_paid: string,

    passenger_count_with_pass: string,

    passenger_count_transfer: string,

    passenger_count_total: number,

    actual_count: number,

    total_discrepancy: number,

    remarks: string,

    lat: string,

    long: string,

    timestamp: string
}

export interface ITORInspection{
    portalData: {},
    recordId: string,
    modId: string,
    fieldData: IInspection
}

class TORInspectionRepository{

    async GetAllTORInspection(){

        try{

            const torInspection = await TORInspectionModel.find({});

            return torInspection;

        }catch(e){

            console.error("Error in tor inspection repository: "+e);
            return e;

        }

    }

    async CreateTORInspection(fieldData : IInspection){
        
        try{

            const tor ={
                "portalId": {},
                "recordId": "",
                "modId": "",
                fieldData
            }

            const newTorInspection = new TORInspectionModel(tor);

            const saveTorInspection = await newTorInspection.save();

            return saveTorInspection;

        }catch(e){

            console.error("Error in tor inspection repository: "+e);

            return e;
        }

    }

}

export default new TORInspectionRepository();