import { authorizationTokenRepo } from "../repositories/AuthorizationTokenRepository";
import jwt from 'jsonwebtoken';

class AuthorizationTokenService{



    async AddUserAuthorizationToken(){
        
        let secret = "";
        
        if(process.env.SECRET){
            secret = process.env.SECRET;
        }

        try{    

           let token = jwt.sign({data :Date.now.toString()} , secret);

            console.log(token)

            const addNewToken = await authorizationTokenRepo.CreateNewToken(token);

            return token;
        }catch(e){
            console.error("Error in authorization token service: "+e);
            return false;
        }

    }

}

export default new AuthorizationTokenService();