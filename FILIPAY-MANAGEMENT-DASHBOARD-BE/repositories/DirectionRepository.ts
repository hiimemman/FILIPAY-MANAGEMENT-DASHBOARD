import DirectionModel from "../models/DirectionModel";


interface IDirections{

    bound: string,

    origin: string,

    destination: string,

}

class Directions{

    async GetAllDirections(){

        try{

            const directions = await DirectionModel.find();

            return directions;

        }catch(e){
            console.error("Error in direction repository: "+e)
            return false;
        }
       

    }

    async AddNewDirection(direction : IDirections){
        
        try{

            const newDirection = new DirectionModel(direction);
            const saveNewDirection = await newDirection.save();

            return true;

        }catch(e){
            console.error("Error in direction repository: "+e);
            return false;
        }
    }

}

export const directionRepo = new Directions();