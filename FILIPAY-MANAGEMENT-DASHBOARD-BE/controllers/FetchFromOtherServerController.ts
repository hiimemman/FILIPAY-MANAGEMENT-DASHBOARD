import axios from "axios";
import { Request, Response } from "express";

export async function GetAllEmployees(request: Request, response: Response){
    try{

        const generateSession = await axios.post("https://fms.dltbbus.com.ph/fmi/data/v1/databases/dltb%20company%20database/sessions", {},{
            auth: {
                username: 'filipay',
                password: '#LNxj.WRY58Q',
            }
        })

        const token = await generateSession.data.response.token;

        console.log(token)

    }catch(e){
        console.log(e)
    }
}