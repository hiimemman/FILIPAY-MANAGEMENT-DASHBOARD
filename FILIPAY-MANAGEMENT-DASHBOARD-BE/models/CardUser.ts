import mongoose from "mongoose";

const cardUserSchema = new mongoose.Schema({

    cardId: {

        type: String,
        index: true,
        required: false,

    },

    username: {

        type: String,
        index: true,
        required: false,
        
    },

    password: {

        type: String,
        index: true,
        required: false,

    },

    recordId: {
        type: String,
        index: true,
        required: false,
    },
    
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

const CardUserModel = mongoose.model('CardUserRecords', cardUserSchema)
export default CardUserModel;



// const EmployeeModel = mongoose.model('EmployeeRecords', employeeDataSchema);
// export default EmployeeModel;