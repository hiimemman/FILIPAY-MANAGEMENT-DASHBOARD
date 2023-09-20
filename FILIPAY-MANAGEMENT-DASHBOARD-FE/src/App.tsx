import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState } from 'react'
import LogIn from "./pages/LogIn";
import TestLogin from "./pages/TestLogin";
import TestArea from "./pages/TestArea";
import { Dashboard } from "./pages/Dashboard";
import { Client } from "./pages/Client";

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path ="/login" element ={<LogIn /> }/>
          <Route path ="/dashboard" element ={<Dashboard />} />
          <Route path="/client" element ={<Client />} />
          <Route path ="/test/login" element = {<TestLogin />} />
          <Route path ="/test" element = {<TestArea />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
