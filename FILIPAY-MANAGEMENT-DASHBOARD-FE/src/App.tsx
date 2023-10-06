import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState } from 'react'
import LogIn from "./pages/LogIn";
import TestLogin from "./pages/TestLogin";
import TestArea from "./pages/TestArea";
import { Dashboard } from "./pages/Dashboard";
import { Client } from "./pages/Client";
// import  './styles/LogIn.css'
import { Employee } from "./pages/Employee";
import { Direction } from "./pages/Direction";
import { MasterCard } from "./pages/MasterCard";
import { TORMain } from "./pages/TORMain";
import { TORTicket } from "./pages/TORTicket";
import { TORFuel } from "./pages/TORFuel";
import { TORRemittance } from "./pages/TORRemittance";
import { TORInspection } from "./pages/TORInspection";
import { TORTrip } from "./pages/TORTrip";
import { TORViolation } from "./pages/TORViolation";
import { TORTrouble } from "./pages/TORTrouble";

function App() {
 


  return (
    <>
   
    
          <Router>
            <Routes>
              <Route path ="/testarea" element ={<LogIn /> }/>
              <Route path ="/dashboard" element ={<Dashboard />} />
              <Route path="/client" element ={<Client />} />
              <Route path ="/login" element = {<TestLogin />} />
              <Route path ="/test" element = {<TestLogin />}/>
              <Route path ="/employee" element = {<Employee />}/>
              <Route path ="/direction" element ={<Direction />} />
              <Route path ="/mastercard" element ={<MasterCard />} />
              <Route path ="/tormain" element ={ <TORMain /> } />
              <Route path ="/torticket" element= {<TORTicket />} />
              <Route path ="/torfuel" element = {<TORFuel />} />
              <Route path ="/torremittance" element ={<TORRemittance />} />
              <Route path ="/torinspection" element = {<TORInspection /> } />
              <Route path  ="/tortrip" element ={<TORTrip />} />
              <Route path ="/torviolation" element ={<TORViolation />} />
              <Route path ="/tortrouble" element = {<TORTrouble /> } />       
            </Routes>
          </Router>

    
    </>
  ) 
}

export default App
