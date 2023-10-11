import axios from "axios";
import TORRemittanceRepository, { IRemittance, ITORRemittance } from "../repositories/TORRemittanceRepository";

class TORRemittanceService{

    async SyncGetAllRemittance(){

        
        try{

            const token = await this.GenerateSession();

            const config = {
                headers :{
                    Authorization : `Bearer ${token}`
                }
            }
            
            const bodyParameters = {
                "query": [{"bound" : "SOUTH"}, {"bound" : "NORTH"}]
            }

            const request = await axios.post("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/layouts/tor_remittance/_find", bodyParameters, config);

            const response = await request.data;

            console.log(response.response.data)

            response.response.data.map( async (remittance : ITORRemittance ) =>{
                await TORRemittanceRepository.FindOneAndReplaceRemittance(remittance);
            })

            const destroyToken = await this.EndSession(token);

            return response.response.data;
            
        }catch(e){

            console.error("Error in sync all tor remittance service: "+e);
            return false;

        }

    }

    async CreateTORRemittance(newTorRemittance : IRemittance){
     
        try{

            const token = await this.GenerateSession();
            
            const config = {
                headers :{
                    Authorization : `Bearer ${token}`
                }
            }

            const request = await axios.post("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/layouts/tor_fuel/records", newTorRemittance, config);

       

            const response = await request.data;

            const destroyToken = await this.EndSession(token);
            return {status: 0, message: "OK"};

        }catch(e){
    
            console.error("Error in create tor remittance service: "+e);
            return {status: 500, message: e};
            
        }
    }

    async GetAllTORRemittance(){

        try{

            const torRemittance = await TORRemittanceRepository.GetAllTORRemittance();

            return torRemittance;

        }catch(e){

            console.error("Error in get all tor remittance service: "+e);
            return false;
        }

    }
    /////////////////////////////////////
 
    async GenerateSession(){
        
        let usernameCred = "filipay";
        let passwordCred ="";
    
        // if(process.env.USERNAME){
        //     usernameCred = process.env.USERNAME;
        // }
    
        if(process.env.PASSWORD){
            passwordCred = process.env.PASSWORD;
        }
        
        console.log("Username credentials " + usernameCred);
    
        console.log("Password credential " + passwordCred);
    
            try{
                
                const generateSession = await axios.post("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/sessions/", {},{
                    auth: {
                        username: usernameCred,
                        password: passwordCred,
                    }
                })
    
                const token = await generateSession.data.response.token;
    
                return token
            }catch(e){
                console.error("Error in generating session token " + e)
                return false
            }
        }
    
        async EndSession( token: string | boolean ){
    
            try{
    
                const endSession = await axios.delete("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/sessions/"+token);
    
                const response = await endSession.data;
           
                if(response.messages.code === "0"){
                    return true;
                }else{
                    return false;
                }
        
    
            }catch(e){
                console.error("Error in endsession service: "+e);
                return false;
            }
    
        }

}

export default new TORRemittanceService();