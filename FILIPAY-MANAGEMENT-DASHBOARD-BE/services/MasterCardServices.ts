import axios from "axios";
import MasterCardRepository, { IMasterCard } from "../repositories/MasterCardRepository";

class MasterCardServices{

    async GetAllMasterCard(){
        
        try{

            const masterCards = await MasterCardRepository.GetAllMasterCard();

            return masterCards;

        }catch(e){
            console.error("Error in master card services: "+e)
            return false;
        }

    }

    async CreateNewMasterCard( masterCard : IMasterCard ){

        try{

            const newMasterCard : any = await MasterCardRepository.CreateNewMasterCard(masterCard);

            if(newMasterCard.code === 11000){
                return "Error duplicate field value";
            }else{
                return newMasterCard
            }

        }catch(e){
            console.error("Error in master card services: "+e);
            return e;
        }


    }

}

export default new MasterCardServices();