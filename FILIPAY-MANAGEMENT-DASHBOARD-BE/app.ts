////////////////////////////////
// INITIALIZE ENV AND METADATA
///////////////////////////////
const dotenv = require('dotenv').config();
import "reflect-metadata";

/////////////////////////////
// INITIALIZE Libraries
////////////////////////////
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

//////////////////////////////
// ROUTES
/////////////////////////////
import EmployeeRouter from "./routes/EmployeeRoutes";

////////////////////////////
// DATABASE
///////////////////////////
import connectToMongoDB from './databases/DbConnection';
import AuthRouter from "./routes/AuthenticationRoutes";
import CardUserRouter from "./routes/CardUserRoutes";
import AuthTokenRouter from "./routes/AuthorizationTokenRoute";
import TORMainRouter from "./routes/TORMainRoutes";
import DirectionRouter from "./routes/DirectionRoutes";
import TORTicketRouter from "./routes/TORTicketRoutes";
import TORFuelRouter from "./routes/TORFuelRoutes";
import TORRemittanceRouter from "./routes/TORRemittanceRoutes";
import MasterCardRouter from "./routes/MasterCardRoutes";
import TORTripRouter from "./routes/TORTripRoutes";
import TORInspectionRouter from "./routes/TORInspectionRoutes";
import TORViolationRouter from "./routes/TORViolationRoutes";
import TORTroubleRouter from "./routes/TORTroubleRoutes";


//////////////////////////////////////////////////
//            INITIALIZE THE APPLICATION
//////////////////////////////////////////////////
const app = express();

const port = 3005;

//////////////////////////
// MIDDLEWARES
/////////////////////////

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(cors({
    origin: '*', // Change this to specify your allowed origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    preflightContinue: true,
}));

//////////////////////
// USED ROUTES
/////////////////////

const urlBackend = '/api/v1/filipay'

app.use(urlBackend, EmployeeRouter);

app.use(urlBackend, AuthRouter);

app.use(urlBackend, CardUserRouter);

app.use(urlBackend, AuthTokenRouter);

app.use(urlBackend, DirectionRouter);

app.use(urlBackend, MasterCardRouter);

app.use(urlBackend, TORMainRouter);

app.use(urlBackend, TORTicketRouter);

app.use(urlBackend, TORTripRouter);

app.use(urlBackend , TORFuelRouter);

app.use(urlBackend, TORRemittanceRouter);

app.use(urlBackend, TORInspectionRouter);

app.use(urlBackend, TORViolationRouter);

app.use(urlBackend, TORTroubleRouter);

/////////////////////////
// DATABASE CONNECTION
////////////////////////

const url ='mongodb://localhost:27017/filipay'

connectToMongoDB(url);

////////////////////
// ESTABLISH
///////////////////

app.listen(port , ()=>{
    console.log(`APP IS RUNNING ON PORT 192.168.1.31:${port}/`)
})