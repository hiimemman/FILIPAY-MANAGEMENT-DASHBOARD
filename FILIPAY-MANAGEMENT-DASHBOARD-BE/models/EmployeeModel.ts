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
        required: true,
    },

    nameSuffix:{
        type: String,
        default: '',
        index: true,
        required: true,
    },

    empNo:{
        type: String,
        default: '',
        index: true,
        required: true,
    },

    empStatus:{
        type: String,
        default: '',
        index: true,
        required: true,
    },

    empType:{
        type: String,
        default: '',
        index: true,
        required: true,
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
        required: true,
    },

    idPicture:{
        type: String,
        default:'',
        index: true,
        required: true,
    },

    idSignature:{
        type: String,
        default: '',
        index: true,
        required: true,
    },

    JTI_RFID:{
        type: String,
        default: '',
        index: true,
        required: true
    },

    accessPrivileges:{
        type: String,
        default: '',
        index: true,
        required: true,
    },

    JTI_RFID_RequestDate:{
        type: String,
        default: '',
        index: true,
        required: true
    }
});

const employeeDataSchema = new mongoose.Schema({
    recordId: {
        type: Number
       },
       modId:{
        type: Number
       },
       fieldData: [employeeSchema],
})



const EmployeeModel = mongoose.model('EmployeeRecords', employeeDataSchema);
export default EmployeeModel;