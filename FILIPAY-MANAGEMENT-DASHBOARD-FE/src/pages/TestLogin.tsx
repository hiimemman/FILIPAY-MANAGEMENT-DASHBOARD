
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '../styles/LogIn.css'
import { FormEvent } from 'react';
import DefaultButton from '../components/Buttons'
import Carousel from '../components/Carousel';


const defaultFont = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';


async function handleSubmitLoggedIn(event : FormEvent){

    event.preventDefault();

    try{

        

    }catch(e){

    }

}

export default function TestLogin() : JSX.Element {

    return(
        <>
        <div className="divmain">
        <div className="divform">
                <form id="loginform" className="loginform" >
                        <img src={import.meta.env.VITE_ASSET_URL+"/assets/Filipay-logo.png"} alt=""  />
                      
                    
                        <div className="loginInputs">
                            <div className="signinlabel">
                                <span className="" style ={{fontFamily:defaultFont}}>Sign In</span>
                            </div>

                            <div className="form-group" style={{marginBottom: '16px'}}>
                                <label htmlFor="exampleInputEmail1" style={{marginBottom: '0.5rem', fontFamily:defaultFont}}>Email address</label>
                                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter your email" required /> 
                              
                              </div>
                              <div className="form-group" style={{marginBottom: '16px'}}>
                                <label htmlFor="password"  style={{marginBottom: '0.5rem', fontFamily:defaultFont}} >Password</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" />
                               <div className="forgotPassword">
                               <a href="#" style ={{color:'#007BFF', fontFamily:defaultFont}}>Forgot password?</a>
                             </div>
                              
                            </div>
                            <div  style ={{boxSizing: 'border-box', color:'#212529', display: 'block',  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', fontSize: '16px', fontWeight: '400', lineHeight:'24px', minHeight: '24px', position:'relative', textAlign:'left', textSizeAdjust:'100%'}}>
                                
                                <input type="checkbox" className="custom-control-input" id= {"checkIfLoggedIn"} style={{backgroundPositionX: "50%", backgroundPositionY: "50%",backgroundRepeat: "no-repeat", backgroundSize:"50% 50%", boxSizing:"border-box"}}/>

                                <label className="custom-control-label" style={{ marginLeft:'5px'}} htmlFor="checkIfLoggedIn">keep me logged in</label>

                              </div>
                              <button type="submit" className="btn btn-primary mt-3 submitbtn" style = {{fontFamily:defaultFont}}>SIGN IN</button>
                     
                        {/* <DefaultButton /> */}
                        </div>
                        <div className="msgicon">
                            <img src={import.meta.env.VITE_ASSET_URL+"/assets/message-icon.png"} alt="" />
                        </div>
                     
                </form>
        </div>
        
        <Carousel />
        


    </div>
        </>
    )

}