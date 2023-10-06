import TORTroubleRepository, { ITrouble } from "../repositories/TORTroubleRepository";


class TORTroubleServices{

    
  async GetAllTOR(){

        
    try{

    const allTOR = await TORTroubleRepository.GetAllTor();

    return {status: 0, message: "OK", response: allTOR}

    }catch(e){
        console.error("Error in tor services: "+e);
        return {status: 500, message: e, response: {}}
    }

}

async CreateTOR(tor : ITrouble){

    try{

        const saveNewTor = await TORTroubleRepository.CreateTOR(tor)

        return {status: 0, message: "OK", response: saveNewTor}
      

    }catch(e){
        console.error("Error in tor services: "+e);
        return {status: 500, message: e, response: {}}
    }

}


}

export default new TORTroubleServices();