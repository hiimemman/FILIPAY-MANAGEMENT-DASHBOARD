import TORTicketModel from "../models/TORTicketModel";

export interface ITORTicket{

    portalData: [],
    recordId: string,
    modId: string,

    fieldData:{
        UUID: string,
        device_id: string,
        control_no : string,
        tor_no: string,
        date_of_trip: string,
        bus_no: string,
        route: string,
        route_code: string,
        bound: string,
        trip_no: number,
        ticket_no: string,
        ticket_type: string,
        ticket_status: string,
        timestamp: Date,
        from_place: string,
        to_place: string,
        from_km: number,
        to_km: number,
        km_run: number,
        fare: number,
        card_no: string,
        status: string,
        lat: string,
        long: string,
        created_on: Date,
        updated_on: Date,
        previous_balance: number,
        current_balance: number
    }

}


class TORTicketRepository{

    async GetAllTORTicket(){

        try{

            const torTickets = await TORTicketModel.find({});

            return torTickets;
            
        }catch(e){
            console.error("Error in repository: "+e)
            return false;
        }

    }

    async CreateTORTicket(torTicket : ITORTicket){

        try{

            const newTorTicket = new TORTicketModel(torTicket);

            const saveTorTicket = await newTorTicket.save();

            return true;

        }catch(e){
            console.error("Error in repository: "+e);
            return false;
        }

    }

    async FindOneAndReplaceTORTicket(tor : ITORTicket){

        try{

            const updateTORMain = await TORTicketModel.findOneAndReplace({"fieldData.UUID" : tor.fieldData.UUID} , tor, {upsert: true, new: true});

            return true;

        }catch(e){
            console.error("Error in repository: "+e);
            return false;
        }

    }

    async FindUUID(UUID: string){

        try{

            const findTorTicket = await TORTicketModel.findOne({"fieldData.UUID" : UUID});

            console.log(findTorTicket)

            // return true

        }catch(e){
            console.error("Error in repository: "+e);
            return false;
        }

    }


}

export default new TORTicketRepository();