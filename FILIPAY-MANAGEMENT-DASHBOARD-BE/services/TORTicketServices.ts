import axios from "axios";
import TORTicketRepository from "../repositories/TORTicketRepository";
import TORTicketModel from "../models/TORTicketModel";



interface ITORTicket{

    portalData: [],
    recordId: string,
    modId: string,
    
    fieldData : ITicket
    
}

interface ITicket {
    UUID: string,
    device_id: string,
    control_no : string,
    tor_no: string,
    date_of_trip: string,
    bus_no: string,
    route: string,
    route_code: string,
    bound: string,
    trip_no: number,
    ticket_no: string,
    ticket_type: string,
    ticket_status: string,
    timestamp: Date,
    from_place: string,
    to_place: string,
    from_km: number,
    to_km: number,
    km_run: number,
    fare: number,
    card_no: string,
    status: string,
    lat: string,
    long: string,
    created_on: Date,
    updated_on: Date,
    previous_balance: number,
    current_balance: number
}
class TORTicketServices{

    async GetAllTORTicketService(){

        try{

            const torTickets= await TORTicketRepository.GetAllTORTicket();

            return torTickets;

        }catch(e){
            console.error("Error in getting all tor ticket services: "+e);
            return false;
        }
    

    }

    async SyncGetAllTORTicketService(){ 

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
    
            const requestTORTicketFromOtherServer = await axios.post("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/layouts/tor_tickets/_find", bodyParameters, config);

            const responseTORTicketFromOtherServer = await requestTORTicketFromOtherServer.data;

            const destroyToken = await this.EndSession(token);

            console.log(responseTORTicketFromOtherServer.response.data)

            responseTORTicketFromOtherServer.response.data.map(async (torTicket : ITORTicket) =>{
               
                    await this.FindAndReplaceTORTicketServices(torTicket);
                
            })

            return responseTORTicketFromOtherServer;

        }catch(e){
            console.error("Error in syncing all tor ticket services: "+e);
            return false;
        }

    }

    async SyncTORTicketService(){

        try{

            const torTickets = await this.GetAllTORTicketService();

            if(torTickets !== false){
            
                const insertTorTickets = await torTickets?.map(async (torTicket : any) =>{

                    await this.CreateTORTicketServices(torTicket);

                })
            }

            
            // const token = await this.GenerateSession();

            // const torTickets = await this.GetAllTORTicketService();

            // console.log(torTickets)

            // const deleteToke = await this.EndSession(token);

        }catch(e){

            console.error("Error in syncing tor ticket service: "+e);
            return {status: 1, message: ""+e};

        }

    }

    async  InsertTORTickeToOurDBServices(torTicket : ITORTicket ){

        try{

            const saveTicket = await TORTicketRepository.CreateTORTicket(torTicket);
            
            return {status: 0, message: saveTicket};

        }catch(e){
            console.error("Error in inserting ticket in database service"+e);
            return {status: 1, message: ""+e};
        }
        
    }




    async FindAndReplaceTORTicketServices(torTicket : ITORTicket){

        try{

          const replaceTicket = await TORTicketRepository.FindOneAndReplaceTORTicket(torTicket);

          return true;

        }catch(e){
            console.error("Error in find and replace tor ticket service: "+e);
            return false;
        }

    }
    

    async CheckIfUUIDExistService(UUID: string){
        
        try{

            const token = await this.GenerateSession();


            const config = {
                headers :{
                    Authorization : `Bearer ${token}`
                }
            }

            const bodyParameters = {
                "query": [{"UUID" : UUID}]
            }

            console.log(bodyParameters)

            const request = await axios.post("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/layouts/tor_tickets/_find", bodyParameters, config);

            console.log(request)

            const destroyToken = await this.EndSession(token);

            

            if(request.data.messages.code === "401"){
                
                return {status: 0}

            }else{
                return {status: 1}
            }

        }catch(e){
            console.error("Error in check uuid: "+e);
            return {status: 500};
        }
        
    }

    async CreateTORTicketServices(torTicket : any){

        try{

            let torTemp = JSON.parse(JSON.stringify(torTicket.fieldData[0]));
            delete torTemp._id;
            console.log("NEW TOR")
            console.log(torTemp)
            const newTor = {
              "fieldData": torTemp
            }
          
            console.log(newTor)

                const token = await this.GenerateSession();

                const config = {
                    headers :{
                        Authorization : `Bearer ${token}`
                    }
                }
           
                const requestCreateNewTORTicket = await axios.post("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/layouts/tor_tickets/records", newTor, config);
    
                const responseTORTicketFromOtherServer = await requestCreateNewTORTicket.data;
    
                const destroyToken = await this.EndSession(token);
    
                return {status: 0, message: "OK"};

           

        }catch(e){
            console.error("Error in creating new tor ticket service: "+e);
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

export default new TORTicketServices();