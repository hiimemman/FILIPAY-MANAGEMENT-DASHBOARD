import mongoose from "mongoose";

const directionSchema = new mongoose.Schema({

    bound:{
        type: String,
        index: true,
        default: "SOUTH",
        required: true
    },

    origin:{
        type: String,
        index: true,
        default:"PITX",
        required: true
    },

    destination:{
        type:String,
        index: true,
        default:"TAYABAS",
        required: true
    },

    createdAt:{
        type:Date,
        index: true,
        default: Date.now()
    },


    updatedAt:{
        type: Date,
        index: true,
        default: Date.now()
    },

});

const DirectionModel = mongoose.model('DirectionRecords', directionSchema)

export default DirectionModel;