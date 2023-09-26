import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState } from 'react'
import LogIn from "./pages/LogIn";
import TestLogin from "./pages/TestLogin";
import TestArea from "./pages/TestArea";
import { Dashboard } from "./pages/Dashboard";
import { Client } from "./pages/Client";
import  './styles/LogIn.css'
import { Employee } from "./pages/Employee";
function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path ="/testarea" element ={<LogIn /> }/>
          <Route path ="/dashboard" element ={<Dashboard />} />
          <Route path ="/employee" element = {<Employee />}/>
          <Route path="/client" element ={<Client />} />
          <Route path ="/login" element = {<TestLogin />} />
          <Route path ="/test" element = {<TestLogin />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
