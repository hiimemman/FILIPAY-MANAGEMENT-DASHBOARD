import mongoose from "mongoose";

export default function connectToMongoDB(connectionString : string){
  console.log('Connecting to database...')
  mongoose.connect(connectionString)
  const db = mongoose.connection;
  db.on('error', (error) => {
    console.error(error)
    console.log("Reconnecting to database...")
    setTimeout(connectToMongoDB, 1000)
  })
  db.once('open', () => console.log("Connected to database"))
}