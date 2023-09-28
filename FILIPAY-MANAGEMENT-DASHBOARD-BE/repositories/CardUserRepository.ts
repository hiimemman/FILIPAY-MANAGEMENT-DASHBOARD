import CardUserModel from "../models/CardUser";


export interface ICardUser {
    
    cardId : string,
    username: string,
    password: string,
    recordId: string,

}

class CardUserRepository{

    async CreateNewCardUser(newUser : ICardUser){

        try{

            const NewCardUser =  new CardUserModel(newUser);

            const SaveNewCardUser = await NewCardUser.save();

            return true;

        }catch(e){
            console.error("Repository error: "+e);
            return false
        }
        

    }

    async GetCardUserByUsername(username : string){

        try{

            return await CardUserModel.findOne({"username" : username})

        }catch(e){
            console.error("Repository error: "+e)
            return false
        }

    }

}

export const cardUserRepo = new CardUserRepository();