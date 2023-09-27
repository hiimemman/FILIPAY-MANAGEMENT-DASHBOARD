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




//////////////////////////////////////////////////
//            INITIALIZE THE APPLICATION
//////////////////////////////////////////////////
const app = express();

const port = 3000;

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

app.use('/api/v1', EmployeeRouter)


/////////////////////////
// DATABASE CONNECTION
////////////////////////

const url ='mongodb://127.0.0.1:27017/FILIPAY'

connectToMongoDB(url);


////////////////////
// ESTABLISH
///////////////////

app.listen(port , ()=>{
    console.log(`APP IS RUNNING ON PORT localhost:${port}/`)
})