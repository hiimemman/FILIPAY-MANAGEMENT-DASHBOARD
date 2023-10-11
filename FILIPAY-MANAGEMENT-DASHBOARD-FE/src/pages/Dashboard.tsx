import {useState, useEffect } from "react";
import HeaderCard from "../components/HeaderCard";
import NavBar from "../components/NavBar";
import Paper from "../components/Paper";
import axios from "axios";
import DashboardCard from "../components/DashboardCard";
import { BsCurrencyExchange, BsEmojiDizzyFill, BsFileEarmarkTextFill, BsFillClipboardCheckFill, BsFillExclamationTriangleFill, BsFillFuelPumpFill, BsFillSignpostFill, BsTicketPerforatedFill } from "react-icons/bs";

export function Dashboard() : JSX.Element{

    const [torMainNumber, setTorMainNumber] = useState(0);

    const [torTicket, setTorTicketNumber] = useState(0);

    const [torFuel, setTorFuelNumber] = useState(0);

    const [torRemittance, setTorRemittance] = useState(0);

    const [torTrip, setTorTrip] = useState(0);

    const [torInspection, setTorInspection] = useState(0);

    const [torViolation, setTorViolation] = useState(0);

    const [torTrouble, setTorTrouble] = useState(0);


    async function GetAllTORMain(){

        try{

            const request = await axios.get(`${import.meta.env.VITE_BASE_URL}/tor/main`,{
                headers :{
                    Authorization : `Bearer ${import.meta.env.VITE_TOKEN}`
                }
            })

            const response = await request.data;

            setTorMainNumber(response.response.response.data.length)

        }catch(e){
            console.error("Error in getting all the tor main: "+e)
        }

    }

    async function GetAllTORTicket(){

        try{

            const request = await axios.get(`${import.meta.env.VITE_BASE_URL}/tor/ticket`,{
                headers :{
                    Authorization : `Bearer ${import.meta.env.VITE_TOKEN}`
                }
            })

            const response = await request.data;

            console.log(response.response.length)

            setTorTicketNumber(response.response.length)

        }catch(e){
            console.error("Error in getting all the tor main: "+e)
        }

    }

    async function GetAllTORFuel(){

        try{

            const request = await axios.get(`${import.meta.env.VITE_BASE_URL}/tor/fuel`,{
                headers :{
                    Authorization : `Bearer ${import.meta.env.VITE_TOKEN}`
                }
            })

            const response = await request.data;

            console.log(response.response.length)

            setTorFuelNumber(response.response.length)

        }catch(e){
            console.error("Error in getting all the tor main: "+e)
        }

    }

    async function GetAllTORRemittance(){

        try{

            const request = await axios.get(`${import.meta.env.VITE_BASE_URL}/tor/remittance`,{
                headers :{
                    Authorization : `Bearer ${import.meta.env.VITE_TOKEN}`
                }
            })

            const response = await request.data;
            console.log("TOR REMITTANCE")
            console.log(response)

            setTorRemittance(response.response.length)

        }catch(e){
            console.error("Error in getting all the tor remittance: "+e)
        }

    }

    async function GetAllTORTrip(){

        try{

            const request = await axios.get(`${import.meta.env.VITE_BASE_URL}/tor/trip`,{
                headers :{
                    Authorization : `Bearer ${import.meta.env.VITE_TOKEN}`
                }
            })

            const response = await request.data;

            console.log(response.response.length)

            setTorTrip(response.response.length)

        }catch(e){
            console.error("Error in getting all the tor main: "+e)
        }

    }

    async function GetAllTORInspection(){

        try{

            const request = await axios.get(`${import.meta.env.VITE_BASE_URL}/tor/inspection`,{
                headers :{
                    Authorization : `Bearer ${import.meta.env.VITE_TOKEN}`
                }
            })

            const response = await request.data;

            console.log(response.response.length)

            setTorInspection(response.response.length)

        }catch(e){
            console.error("Error in getting all the tor main: "+e)
        }

    }


    async function GetAllTORViolation(){

        try{

            const request = await axios.get(`${import.meta.env.VITE_BASE_URL}/tor/violation`,{
                headers :{
                    Authorization : `Bearer ${import.meta.env.VITE_TOKEN}`
                }
            })

            const response = await request.data;

            console.log(response.response.length)

            setTorViolation(response.response.length)

        }catch(e){
            console.error("Error in getting all the tor main: "+e)
        }

    }

    async function GetAllTORTrouble(){

        try{

            const request = await axios.get(`${import.meta.env.VITE_BASE_URL}/tor/trouble`,{
                headers :{
                    Authorization : `Bearer ${import.meta.env.VITE_TOKEN}`
                }
            })

            const response = await request.data;

            console.log(response.response.length)

            setTorTrouble(response.response.length)

        }catch(e){
            console.error("Error in getting all the tor main: "+e)
        }

    }

    useEffect(() =>{

        GetAllTORRemittance();

        GetAllTORMain();

        GetAllTORTicket();

        GetAllTORFuel();

        GetAllTORTrip();

        GetAllTORInspection();

        GetAllTORViolation(); 

        GetAllTORTrouble();

        return () =>{}


    },[])

    return(
        <>
        <NavBar>
           <HeaderCard title="DASHBOARD"/>
        
           <div className="py-8 mt-4 p-0 sm:py-16 lg:px-6">
  <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-12 md:space-y-0">

          
          <DashboardCard icon ={<BsFileEarmarkTextFill /> } title="TOR MAIN" cardNumber={torMainNumber}/>

          <DashboardCard icon ={<BsTicketPerforatedFill /> } title="TOR TICKET" cardNumber={torTicket}/>

          <DashboardCard icon ={<BsFillFuelPumpFill /> } title="TOR FUEL" cardNumber={torFuel}/>

          <DashboardCard icon ={<BsCurrencyExchange /> } title="TOR REMITTANCE" cardNumber={torRemittance}/>

          <DashboardCard icon ={<BsFillSignpostFill /> } title="TOR TRIP" cardNumber={torTrip}/>
          <DashboardCard icon ={<BsFillClipboardCheckFill />} title="TOR INSPECTION" cardNumber={torInspection}/>

          <DashboardCard icon ={<BsFillExclamationTriangleFill />} title="TOR VIOLATION" cardNumber={torViolation}/>
          
          <DashboardCard icon ={<BsEmojiDizzyFill />} title="TOR TROUBLE" cardNumber={torTrouble}/>
        </div>

    
        
    </div>

        </NavBar>
        </>
    )

}




