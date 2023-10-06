import TORTripRepository, { ITrip } from "../repositories/TORTripRepository";

class TORTripServices{

    async AddNewTORTrip(tor : ITrip){

        try{
            console.log(tor)
            const newTORTrip = await TORTripRepository.AddNewTORTrip(tor);

            return {status: 0, message: "OK", response: newTORTrip}

        }catch(e){
            console.error("Error in trip services: "+e);
            return {status: 500, message: e};
        }

    }

    async GetAllTORTrip(){

        try{

            const allTorTrip = await TORTripRepository.GetAllTORTrip();

            return {status: 0, message: "OK", response: allTorTrip};

        }catch(e){
            console.error("Error in trip services: "+e);
            return {status: 500, message: e};
        }

    }

}

export default new TORTripServices();