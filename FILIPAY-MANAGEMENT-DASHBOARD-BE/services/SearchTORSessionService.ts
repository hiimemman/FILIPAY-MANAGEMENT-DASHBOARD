import axios from "axios";

/////////////////////////////////////////////////////////////////////
// 1. GENERATE A SESSION FOR EVERY HTTP REQUEST TO THE OTHER SERVER.

// 2. END THE SESSION FOR EVERY SUCCESFULL HTTP REQUEST
/////////////////////////////////////////////////////////////////////

export async function SearchTORGenerateSessionService() : Promise<string | boolean>{
 
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

export async function SearchTOREndSessionService(token : string | boolean) : Promise<string | boolean>{

    try{

        const endSession = await axios.delete("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/sessions/"+token);

        const response = await endSession.data;
   
        if(response.messages.code === "0"){
            return true;
        }else{
            return false;
        }

        
    }catch(e){
        console.error("Error in Employee end session service "+ e)
        return false;
    }

}