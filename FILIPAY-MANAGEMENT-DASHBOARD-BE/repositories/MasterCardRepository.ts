import masterSchemaModel from "../models/MasterCardModel";

export interface IMasterCard {
    UID: string,
    balance: number,
    createdAt: Date,
    updatedAt: Date,
}

class MasterCardRepository{

    async GetAllMasterCard(){

        try{

            const masterCard = masterSchemaModel.find({});

            return masterCard;

        }catch(e){
            console.error("Error in master card repository: "+e);
            return false;
        }
    }

    async CreateNewMasterCard(masterCard : IMasterCard){
        
        try{

            const newMasterCard = new masterSchemaModel(masterCard);

            const saveMasterCard = await newMasterCard.save();

            return true;

        }catch(e){
            console.error("Error in repository: "+e);
            return e;
        }

    }



}

export default new MasterCardRepository();