import mongoose from "mongoose";

const fuelSchema = new mongoose.Schema({
    
    UUID:{
        type: String,
        index: true,
        default:"",
        unique: true
    },

    device_id:{
        type: String,
        index: true,
        default: "",
        required: true
    },

    control_no:{
        type: String,
        index: true,
        default:"",
        required: true
    },

    tor_no:{
        type: String,
        index: true,
        default: "",
        required: true
    },

    date_of_trip:{
        type: Date,
        index: true,
        default: new Date
    },

    bus_no:{
        type: String,
        index: true,
        default:""
    },

    route:{
        type: String,
        index: true,
        default:""
    },

    route_code:{
        type: String,
        index: true,
        default:""
    },

    bound:{
        type: String,
        index: true,
        default:"SOUTH"
    },

    trip_no:{
        type: Number,
        index: true,
        default: ""
    },

    remittance_date:{
        type: String,
        index: true,
        default:""
    },

    remittance_time:{
        type: String,
        index: true,
        default:""
    },

    remittance_amount:{
        type: Number,
        index: true,
        default: ""
    },

    remittance_type:{
        type: String,
        index: true,
        default:""
    },

    ctr_no:{
        type: String,
        index: true,
        default:""
    },

    waybill_ticket_no:{
        type: String,
        index: true,
        default:""
    },

    cashier_emp_no:{
        type: String,
        index: true,
        default:""
    },

    cashier_emp_name:{
        type: String,
        index: true,
        default:""
    },

    lat:{
        type:String,
        index: true,
        default:""
    },

    long:{
        type: String,
        index: true,
        default:""
    },

    remarks:{
        type: String,
        index: true,
        default:""
    },

    timestamp:{
        type: Date,
        index: true,
        default: new Date
    }
})

const torRemittanceSchema = new mongoose.Schema({
    portalData: {},
    recordId: {
        type: String,
        index: true,
        required: true
    },

    modId:{
        type: String,
        index: true,
        required: true
    },
    
    fieldData: [fuelSchema]
});

const TORRemittanceModel = mongoose.model("TORRemittanceRecords", torRemittanceSchema);

export default TORRemittanceModel;