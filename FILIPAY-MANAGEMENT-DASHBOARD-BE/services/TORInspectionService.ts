import TORInspectionModel from "../models/TORInspectionModel";
import TORInspectionRepository, { IInspection } from "../repositories/TORInspectionRepository";

class TORInspectionService{

    async GetAllTORInspection(){

        
        try{

        const allTORInspection = await TORInspectionRepository.GetAllTORInspection();

        return {status: 0, message: "OK", response: allTORInspection}

        }catch(e){
            console.error("Error in tor services: "+e);
            return {status: 500, message: e, response: {}}
        }

    }

    async CreateTORInspection(torInspection : IInspection){

        try{

            const saveNewTorInspection = await TORInspectionRepository.CreateTORInspection(torInspection);

            return {status: 0, message: "OK", response: saveNewTorInspection}
          

        }catch(e){
            console.error("Error in tor services: "+e);
            return {status: 500, message: e, response: {}}
        }

    }

}

export default new TORInspectionService();