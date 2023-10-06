import TORViolationRepository, { ITORViolation, IViolation } from "../repositories/TORViolationRepository";


class TORViolationService{


  async GetAllTOR(){

        
        try{

        const allTOR = await TORViolationRepository.GetAllTorViolation();

        return {status: 0, message: "OK", response: allTOR}

        }catch(e){
            console.error("Error in tor services: "+e);
            return {status: 500, message: e, response: {}}
        }

    }

    async CreateTOR(tor : IViolation){

        try{

            const saveNewTor = await TORViolationRepository.CreateTORViolation(tor);

            return {status: 0, message: "OK", response: saveNewTor}
          

        }catch(e){
            console.error("Error in tor services: "+e);
            return {status: 500, message: e, response: {}}
        }

    }


}

export default new TORViolationService();