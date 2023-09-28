import AuthorizationTokenModel from "../models/AuthorizationTokenModel";

class AuthorizationTokenRepository{

    async CreateNewToken(token : string){
        
        try{

            const newToken = {"token" : token};

            const authToken = new AuthorizationTokenModel(newToken);
    
            const saveAuthToken = await authToken.save();

            return true;

        }catch(e){
            console.error("Error in repository: "+e);
            return false;
        }

    }

    async FindToken(findToken : string){

        try{

            return await AuthorizationTokenModel.findOne({"token": findToken})
            

        }catch(e){
            console.error("Error in repository: "+e);
            return false;
        }
    }

    async CheckIfExistToken(findToken : string | undefined){

        try{

            const token = await AuthorizationTokenModel.findOne({"token" : findToken})
             
            if(token){
                return true
            }else{
                return false
            }

        }catch(e){
            console.error("Error in repository "+e);
            return false
        }

    }

    async DeleteToken(findToken: string | undefined){
        
        try{
            if(findToken){
                const token = await AuthorizationTokenModel.findOneAndDelete({"token" : findToken.replace("Bearer ","")});

                if(token){
                    return true
                }else{
                    return false
                }
    
            }else{
                return false;
            }
        
        }catch(e){
            console.error("Error in repository: "+e);
            return false;
        }
    }

}

export const authorizationTokenRepo = new AuthorizationTokenRepository();