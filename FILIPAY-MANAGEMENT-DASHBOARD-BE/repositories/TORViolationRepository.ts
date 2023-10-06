import TORViolationModel from "../models/TORViolationModel";

export interface IViolation{

    UUID: string,

    device_id: string,

    control_no: string,

    tor_no: string,

    date_of_trip: string,

    bus_no: string,

    route: string,

    route_code: string,

    bound: string,

    trip_no: string,

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

    passenger_count_total: string,

    actual_count: number,

    total_discrepancy: number,

    remarks: string,

    lat: string,

    long: string,

    timestamp: string,

}

export interface ITORViolation{
    portalId: {},
    recordId: string,
    modId: string,
    fieldData: IViolation
}

class TORViolationRepository{

    async GetAllTorViolation(){

        try{

            const torInspection = await TORViolationModel.find({});

            return torInspection;

        }catch(e){

            console.error("Error in tor violation repository: "+e);
            return e;

        }

    }

    async CreateTORViolation(fieldData : IViolation){
        
        try{

            const tor ={
                "portalId": {},
                "recordId": "",
                "modId": "",
                fieldData
            }

            const newTor = new TORViolationModel(tor);

            const saveTor = await newTor.save();

            return saveTor;

        }catch(e){

            console.error("Error in tor violation repository: "+e);

            return e;
        }

    }

}

export default new TORViolationRepository();