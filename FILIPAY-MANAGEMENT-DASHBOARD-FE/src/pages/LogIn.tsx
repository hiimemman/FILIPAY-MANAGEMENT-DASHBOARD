import { useState } from "react";
import DefaultButton from "../components/Buttons";
import InputFieldNormal from "../components/InputField";
import  '../styles/LogIn.css'
export default function LogIn() : JSX.Element {

    const inputInitialState = {
        value: '',
        status: '',
        statusMessage: '',    
    }

    const [inputEmail , setInputEmail] = useState(inputInitialState)

    const [inputPassword, setInputPassword] = useState(inputInitialState)

    console.log(import.meta.env.VITE_ASSET_URL)

    return(
    <>
<div className="divmain">
  <div className="mainform">
    <form className="loginform">
      <img src ={import.meta.env.VITE_ASSET_URL+'/assets/Filipay-logo.png'} alt = "Failed to load image" />
      <span className="text-5xl font-bold">Sign In</span>
                <div className="mb-4">

                        <InputFieldNormal 
                                id = "email"
                                name="email"
                                type="email"
                                defaultValue=""
                                isRequired = {true}
                                onChange={(event) =>{}}
                                placeHolder="Enter your email address here:"
                                status="success"
                                statusMessage=""
                                title="Email address"
                                value={inputEmail.value}
                        />
                            

                  

                        <InputFieldNormal 
                                id = "password"
                                name="password"
                                type="password"
                                defaultValue=""
                                isRequired = {true}
                                onChange={(event) =>{}}
                                placeHolder="Enter your password address here:"
                                status="success"
                                statusMessage=""
                                title="Password"
                                value={inputEmail.value}
                          />
                </div>
        <DefaultButton/>  
    </form>
  </div>    
</div>

    </>)

}