import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState } from 'react'
import LogIn from "./pages/LogIn";
import TestLogin from "./pages/TestLogin";
import TestArea from "./pages/TestArea";

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path ="/login" element ={<LogIn /> }/>
          <Route path ="/test/login" element = {<TestLogin />} />
          <Route path ="/test" element = {<TestArea />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
