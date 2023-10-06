import mongoose from "mongoose";

const masterSchema = new mongoose.Schema({

    UID:{
        type: String,
        unique: true,
        required: true,
    },

    balance:{
        type: Number,
        default: 0.00,
        required: true,
    },

    createdAt:{
        type: Date,
        default: new Date,
        required: true,
    },

    updatedAt:{
        type: Date,
        default: new Date,
        required: true,
    }

})

const masterCardModel = mongoose.model("MasterCardRecords", masterSchema);

export default masterCardModel;