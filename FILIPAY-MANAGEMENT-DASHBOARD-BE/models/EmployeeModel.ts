import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  

    lastName: {
        type: String,
        default: '',
        index: true,
        required: true,
    },

    firstName: {
        type: String,
        default: '',
        index: true,
        required: true,
    },

    middleName:{
        type: String,
        default: '',
        index: true,
        required: false,
    },

    nameSuffix:{
        type: String,
        default: '',
        index: true,
        required: false,
    },

    empNo:{
        type: Number,
        default: '',
        index: true,
        required: true,
    },

    empStatus:{
        type: String,
        default: '',
        index: true,
        required: false,
    },

    empType:{
        type: String,
        default: '',
        index: true,
        required: false,
    },

    idName:{
        type: String,
        default:'',
        index: true,
        required: true,
    },

    designation:{
        type: String,
        default: '',
        index: true,
        required: false,
    },

    idPicture:{
        type: String,
        default:'',
        index: true,
        required: false,
    },

    idSignature:{
        type: String,
        default: '',
        index: true,
        required: false,
    },

    JTI_RFID:{
        type: String,
        default: '',
        index: true,
        required: false
    },

    accessPrivileges:{
        type: String,
        default: '',
        index: true,
        required: false,
    },

    JTI_RFID_RequestDate:{
        type: String,
        default: '',
        index: true,
        required: false
    }
});

const employeeDataSchema = new mongoose.Schema({
        recordId: {
        type: String
       },
       modId:{
        type: String
       },
       fieldData: [employeeSchema],
})



const EmployeeModel = mongoose.model('EmployeeRecords', employeeDataSchema);
export default EmployeeModel;