import TORRemittanceModel from "../models/TORRemittanceModel";

export interface IRemittance{

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
    
    remittance_date: string,

    remittance_time: string,

    remittance_place: string,

    remittance_amount: number,

    remittance_type: string,

    ctr_no: string,

    waybill_ticket_no: string,

    cashier_emp_no: string,

    cashier_emp_name: string,

    lat: string,

    long: string,

    remarks: string,

    timestamp: string

}

export interface ITORRemittance{
    portalData: {},
    recordId: string,
    modId: string,
    fieldDate: IRemittance
}

class TORRemittanceRepository{

    async FindOneAndReplaceRemittance(torRemittance: ITORRemittance){

        try{

            const updateTor = await TORRemittanceModel.findOneAndReplace({"recordId" : torRemittance.recordId} , torRemittance, {upsert: true, new: true});

            return true;

        }catch(e){
            console.error("Error in find and replace repository: "+e);
            return false;
        }

    }


    async GetAllTORRemittance(){
    
        try{
            
            const torRemittance = await TORRemittanceModel.find({});

            return torRemittance;

        }catch(e){
            console.error("Error in get all tor remittance repository: "+e);
            return false;
        }

    }

}

export default new TORRemittanceRepository();