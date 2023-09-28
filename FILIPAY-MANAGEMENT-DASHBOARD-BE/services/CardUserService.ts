import { GenerateHashPassword } from "../common/Bcrypt";
import { ICardUser, cardUserRepo } from "../repositories/CardUserRepository";


class CardUserService{

    async AddCardUserService(newCardUser : ICardUser){
        
        try{

            const generateHashPassword = await GenerateHashPassword(newCardUser.password);

            newCardUser = {...newCardUser, password : generateHashPassword}

            const addCardUser = await cardUserRepo.CreateNewCardUser(newCardUser);

            return true

        }catch(e){
            console.error("Error in card user service : "+e);
            
            return false
        }
    }

    async GetCardUserByUsername( username : string ){

        try{

            const getCardUser = await cardUserRepo.GetCardUserByUsername(username);

            return getCardUser;

        }catch(e){
            console.error("Error in card user service: "+e)
            return false
        }

    }

}

export default new CardUserService();