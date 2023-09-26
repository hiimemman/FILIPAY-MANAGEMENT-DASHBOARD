import express from 'express';
import connectToMongoDB from './databases/DbConnection';
import FetchFromOtherServerRoutes from './routes/FetchFromOtherServerRoutes';

const app = express();

const port = 3000;


app.use('/api/v1', FetchFromOtherServerRoutes)

const url ='mongodb://127.0.0.1:27017/admin'

connectToMongoDB(url);

app.listen(port , ()=>{
    console.log(`APP IS RUNNING ON PORT ${port}`)
})