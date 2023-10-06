import mongoose from "mongoose";

const violationSchema = new mongoose.Schema({

    UUID:{
        type: String,
        index: true,
        required: true,
        unique: true
    },

    device_id:{
        type: String,
        index: true,
        required: true
    },

    control_no:{
        type: String,
        index: true,
        required: true
    },

    tor_no:{
        type: String,
        index: true,
        required: true
    },

    date_of_trip:{
        type: Date,
        index: true,
        required: true
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
        default:0
    },

    inspector_emp_no:{
        type: String,
        index: true,
        default:""
    },

    inspector_emp_name:{
        type: String,
        index: true,
        default:""
    },

    onboard_time:{
        type: String,
        index: true,
        default:""
    },

    onboard_place:{
        type: String,
        index: true,
        default:""
    },

    onboard_km_post:{
        type: Number,
        index: true,
        default: 0
    },

    offboard_time:{
        type:String,
        index: true,
        default:""
    },

    offboard_place:{
        type: String,
        index: true,
        default:""
    },

    offboard_km_post:{
        type: String,
        index: true,
        default:""
    },

    ticket_no_beginning:{
        type: String,
        index: true,
        default:""
    },

    ticket_no_ending:{
        type: String,
        index: true,
        default:""
    },

    passenger_count_paid:{
        type: String,
        index: true,
        default:""
    },

    passenger_count_with_pass:{
        type: String,
        index: true,
        default:""
    },

    passenger_count_transfer:{
        type: String,
        index : true,
        default:""
    },

    passenger_count_total:{
        type: Number,
        index: true,
        default: 0
    },

    actual_count:{
        type: Number,
        index: true,
        default: 0
    },

    total_discrepancy:{
        type:Number,
        index: true,
        default: 0
    },

    remarks:{
        type: String,
        index: true,
        default:""
    },

    lat:{
        type: String,
        index: true,
        default:""
    },

    long:{
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


const torViolationSchema = new mongoose.Schema({
    portalId: {},
    recordId: {
        type: String,
        index: true,
    },

    modId:{
        type: String,
        index: true,
    },

    fieldData: [violationSchema]
})

const TORViolationModel = mongoose.model("TorViolationRecords", torViolationSchema);

export default TORViolationModel;