
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '../styles/LogIn.css'
import DefaultButton from '../components/Buttons'
import Carousel from '../components/Carousel';


const defaultFont = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export default function TestLogin() : JSX.Element {

    return(
        <>
            <div className="divmain">
        <div className="divform">
                <form id="loginform" className="loginform" method="POST">
                        <img src={import.meta.env.VITE_ASSET_URL+"/assets/Filipay-logo.png"} alt=""  />
                      
                    
                        <div className="loginInputs">
                            <div className="signinlabel">
                                <span className="" style ={{fontFamily:defaultFont}}>Sign In</span>
                            </div>

                            <div className="form-group" style={{marginBottom: '16px'}}>
                                <label htmlFor="exampleInputEmail1" style={{marginBottom: '0.5rem', fontFamily:defaultFont}}>Email address</label>
                                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" required /> 
                              
                              </div>
                              <div className="form-group" style={{marginBottom: '16px'}}>
                                <label htmlFor="exampleInputPassword1"  style={{marginBottom: '0.5rem', fontFamily:defaultFont}} >Password</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                               <div className="forgotP">
                               <a href="#" style ={{color:'#007BFF', fontFamily:defaultFont}}>forgot password?</a>
                               </div>
                              
                            </div>
                            <div  style ={{boxSizing: 'border-box', color:'#212529', display: 'block',  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', fontSize: '16px', fontWeight: '400', lineHeight:'24px', minHeight: '24px', position:'relative', textAlign:'left', textSizeAdjust:'100%'}}>
                                <input type="checkbox" className="custom-control-input" id="customCheck1" style={{backgroundPositionX: "50%", backgroundPositionY: "50%",backgroundRepeat: "no-repeat", backgroundSize:"50% 50%", boxSizing:"border-box"}}/>
                                <label className="custom-control-label" style={{ marginLeft:'5px'}} htmlFor="customCheck1">keep me logged in</label>
                              </div>
                              <button type="submit" className="btn btn-primary mt-3 submitbtn" style = {{fontFamily:defaultFont}}>SIGN IN</button>
                     
                        {/* <DefaultButton /> */}
                        </div>
                        <div className="msgicon">
                            <img src={import.meta.env.VITE_ASSET_URL+"/assets/message-icon.png"} alt="" />
                        </div>
                     
                </form>
        </div>
        
        <div className="divcarousel">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className=""></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2" className=""></li>
                
                </ol>
               
                <div className="carousel-inner">
                  <div className="carousel-item">
                    <img className="d-block w-100 carouselimg" src={import.meta.env.VITE_ASSET_URL+"/assets/background-image.JPG"} alt="Second slide" />
                    <img className="d-block w-20 firstslide" src={import.meta.env.VITE_ASSET_URL+"/assets/first-slide-text.png"}alt="First slide" />
                    <div className="social-links">
                        <a href=""><i className="fab fa-sharp fa-regular fa-globe" aria-hidden="true"></i></a>
                        <a href=""><i className="fab fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
                        <a href=""><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                        <a href=""><i className="fab fa-brands fa-instagram" aria-hidden="true"></i></a>
                        <a href=""><i className="fab fa-brands fa-twitter" aria-hidden="true"></i></a>
                        <a href=""><i className="fab fa-brands fa-youtube" aria-hidden="true"></i></a>
                    </div>
                </div>
                  <div className="carousel-item active">
                    <img className="d-block w-100 carouselimg" src={import.meta.env.VITE_ASSET_URL+"/assets/background-image.JPG"} alt="Second slide" />
                    <img className="d-block w-20 firstslide" src={import.meta.env.VITE_ASSET_URL+"/assets/second-slide-text.png"} alt="First slide" />
                    <h3 className="first-text">Interested about our automated fare collection system and fleet management system?<br /><br />Get in touch today.</h3>
                    
                    <button className="btn btn-primary btnlearnmore" type = "button">Learn more about FILIPAY</button>
                    <div className="social-links">
                        <a href=""><i className="fab fa-sharp fa-regular fa-globe" aria-hidden="true"></i></a>
                        <a href=""><i className="fab fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
                        <a href=""><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                        <a href=""><i className="fab fa-brands fa-instagram" aria-hidden="true"></i></a>
                        <a href=""><i className="fab fa-brands fa-twitter" aria-hidden="true"></i></a>
                        <a href=""><i className="fab fa-brands fa-youtube" aria-hidden="true"></i></a>
                    </div>
                </div>
                  <div className="carousel-item">
                    <img className="d-block w-100 carouselimg" src={import.meta.env.VITE_ASSET_URL+"/assets/background-image.JPG"} alt="Third slide" />
                    <div className="weatherContainer">
                            <div className="timenowContainer">
                                <div className="locationContainer">
                                    <input id="location" type="text" placeholder="Enter the city name" autoComplete="off" />
                                    <button id="edit-loc"><i className="fa-solid fa-pen"></i></button>
                                    <button id="get-loc"><i className="fa-solid fa-map-location-dot"></i></button>
                                </div>
                                  
                                <span id="time"></span>
                                <span id="date"></span>
                                  
                               
                            </div>
                            <div className="weathernowContainer">

                         <div className="ColWeatherRain">
                            <img src="" id="representation" />
                            <span id="weather"></span>
                            <div className="d-flex flex-direction-row raindiv">
                                <img className="water-drop" src={import.meta.env.VITE_ASSET_URL+"/assets/water-drop.png"} />
                                <span id="rain"></span>
                            </div>
                       
                         </div>
                                   <div className="ColWeather">
                                      <span id="temp"></span>
                                    <a href="#" className="btn btn-primary btnseefullforecast">See full forecast &gt;</a>
                                </div>
                                  

                            </div>
                    </div>
                    <div className="DivotherDetails">
                        <div className="otherDetailsleft">
                            <span className="otherDetailsTitle">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </span>
                            <span className="otherDetailsInfo">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio beatae pariatur officia ad nemo minima optio nostrum eveniet esse, quibusdam quia possimus sed numquam rerum sapiente quam reiciendis dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maiores facilis sapiente nobis cupiditate quidem nulla ullam illum nam reiciendis quas asperiores et, dolor non aliquam unde modi, culpa inventore!
                            </span>
                            <button type="button" className="btn btn-primary readmorebtn">Read more</button>
                        </div>
                        <div className="otherDetailsright">
                                <div className="otherDetailsrightContent" style={{marginBottom: '1em'}}>
                                
                                    <span className="otherDetailsTitle">
                                        Lorem, ipsum dolor sit amet, elit.
                                    </span>
                                <span className="otherDetailsInfo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea cupiditate, optio recusandae consequatur repudiandae nemo a suscipit velit amet vel eaque similique eius ipsa autem? Quidem, tempora! Eos, voluptatibus fugit.</span>
                                <button type="button" className="btn btn-primary readmorebtn">Read more</button>   
                            </div>
                                <div className="otherDetailsrightContent">
                                    <span className="otherDetailsTitle">
                                        Lorem, ipsum dolor sit amet, elit.
                                    </span>
                                <span className="otherDetailsInfo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea cupiditate, optio recusandae consequatur repudiandae nemo a suscipit velit amet vel eaque similique eius ipsa autem? Quidem, tempora! Eos, voluptatibus fugit.</span>
                                <button type="button" className="btn btn-primary readmorebtn">Read more</button>   
                                </div>
                        </div>
                    </div>
                    <div className="social-links">
                        <a href=""><i className="fab fa-sharp fa-regular fa-globe" aria-hidden="true"></i></a>
                        <a href=""><i className="fab fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
                        <a href=""><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                        <a href=""><i className="fab fa-brands fa-instagram" aria-hidden="true"></i></a>
                        <a href=""><i className="fab fa-brands fa-twitter" aria-hidden="true"></i></a>
                        <a href=""><i className="fab fa-brands fa-youtube" aria-hidden="true"></i></a>
                    </div>
                </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
          
        </div>

        


    </div>
        </>
    )

}