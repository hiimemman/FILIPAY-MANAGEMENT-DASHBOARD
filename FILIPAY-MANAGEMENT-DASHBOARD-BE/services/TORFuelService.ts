import axios from "axios";
import TORFuelRepository from "../repositories/TORFuelRepository";


interface IFuel{
    UUID: string,
    device_id: string,
    control_no: string,
    tor_no: string,
    date_of_trip: string,
    bus_no: string,
    route: string,
    route_code: string,
    bound: string,
    trip_no: number,
    refuel_date: string,
    refuel_time: string,
    fuel_station: string,
    fuel_liters: number,
    fuel_amount: number,
    fuel_price_per_liter: number,
    fuel_attendant_id: number,
    fuel_attendant: string,
    full_tank: string,
    timestamp: string,
    lat: string,
    long:string,
    remarks: string
}

interface ITORFuel{
    portalData: {},
    recordId: string,
    modId: string
    fieldDate: IFuel
}


class TORFuelService{

    
    async SyncGETAllTORFuelService(){

        try{

            const token = await this.GenerateSession();

            const config = {
                headers :{
                    Authorization : `Bearer ${token}`
                }
            }
            
            const bodyParameters = {
                "query": [{"bound" : "SOUTH"}, {"bound" : "NORTH"}, {"bound" : ""}]
            }

            const request = await axios.post("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/layouts/tor_fuel/_find", bodyParameters, config);

            const response = await request.data;

            console.log(response.response.data)

            response.response.data.map(async (torFuel : ITORFuel) =>{

                await TORFuelRepository.FindAndReplaceTORFuel(torFuel)

            })

            const destroyToken = await this.EndSession(token);

            return response.response.data
           

        }catch(e){
            console.error("Error in sync all tor fuel service: "+e);
            return false;
        }

    }

    async CreateTORFuelService(torFuel : IFuel){

        try{

            const token = await this.GenerateSession();

            const config = {
                headers :{
                    Authorization : `Bearer ${token}`
                }
            }

            const request = await axios.post("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/layouts/tor_fuel/records", torFuel, config);

            await request.data;

            const destroyToken = await this.EndSession(token);
    
            return {status: 0, message: "OK"};

        }catch(e){
            console.error("Error in creating new tor ticket service: "+e);
            return {status: 500, message: e};
        }

    }

    async GetAllTORFuelService(){
    
        try{

            const torFuels = await TORFuelRepository.GetAllTOURFuel();

            return torFuels;

        }catch(e){
            console.error("Error in get all tor fuel service: "+e);

            return {status: 500, message: e};
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

export default new TORFuelService();