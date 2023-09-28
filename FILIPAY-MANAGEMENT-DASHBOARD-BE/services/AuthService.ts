import { CheckHashPassword } from "../common/Bcrypt";
import CardUserModel from "../models/CardUser";
import { ICardUser } from "../repositories/CardUserRepository";

class AuthService{

    async CheckIfCardUserMatch( data : ICardUser ){

        let isAuth = false;

        try{
            const getCardUserPerEmail = await CardUserModel.findOne({ username: data.username});

            if(getCardUserPerEmail){
               isAuth = await CheckHashPassword(data.password, getCardUserPerEmail.password);
            }
            return isAuth;
        }catch(e){
            console.error("Error in service: "+e)
            return false;
        }

    }

}

export default new AuthService();