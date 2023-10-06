import mongoose from "mongoose";

const tripsSchema = new mongoose.Schema({

    UUID:{
        type: String,
        index: true,
        required: true,
        unique: true
    },


    device_id:{
        type: String,
        index: true,
        default:"",
    },

    control_no:{
        type: String,
        index: true,
        default:""
    },

    tor_no:{
        type:String,
        index: true,
        default:""
    },

    date_of_trip:{
        type:String,
        index: true,
        default:""
    },

    bus_no:{
        type: String,
        index: true,
        default: "0"
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
        default: 0
    },

    departed_place:{
        type: String,
        index: true,
        default:""
    },

    departed_time:{
        type: String,
        index: true,
        default:""
    },

    departed_dispatcher_id:{
        type: String,
        index: true,
        default:""
    },

    departed_dispatcher:{
        type: String,
        index: true,
        default:""
    },

    arrived_place:{
        type: String,
        index: true,
        default:""
    },

    arrived_time:{
        type: String,
        index: true,
        default:""
    },

    arrived_dispatcher_id:{
        type: String,
        index: true,
        default:""
    },

    arrived_dispatcher:{
        type: String,
        index: true,
        default:""
    },

    from_km:{
        type: Number,
        index: true,
        default: 0
    },

    to_km:{
        type: Number,
        index: true,
        default: 0
    },

    km_run:{
        type: Number,
        index: true,
        default: 0
    },

    ticket_revenue_atm:{
        type: Number,
        index: true,
        default:0
    },

    ticket_count_atm:{
        type: Number,
        index: true,
        default: 0
    },

    ticket_revenue_atm_passenger:{
        type: Number,
        index: true,
        default: 0
    },

    ticket_revenue_atm_baggage:{
        type:Number,
        index:true,
        default:0
    },

    ticket_count_atm_passenger:{
        type: Number,
        index: true,
        default: 0
    },

    ticket_count_atm_baggage:{
        type: Number,
        index: true,
        default: 0
    },

    ticket_revenue_punch:{
        type: Number,
        index: true,
        default: 0
    },

    ticket_count_punch:{
        type: Number,
        index: true,
        default: 0
    },

    ticket_revenue_punch_passenger : {
        type: Number,
        index: true,
        default: 0
    },

    ticket_revenue_punch_baggage:{
        type: Number,
        index: true,
        default:0
    },

    ticket_count_punch_passenger:{
        type: Number,
        index: true,
        default:0
    },

    ticket_count_punch_baggage:{
        type: Number,
        index: true,
        default: 0
    },

    ticket_revenue_charter:{
        type: Number,
        index: true,
        default:0
    },
    
    ticket_count_charter:{
        type: Number,
        index: true,
        default:0
    },

    ticket_revenue_waybill:{
        type: Number,
        index: true,
        default: 0
    },

    ticket_count_waybill:{
        type: Number,
        index: true,
        default:0
    },

    ticket_revenue_card:{
        type: String,
        index: true,
        default:""
    },

    ticket_count_card:{
        type: String,
        index: true,
        default:""
    },

    ticket_revenue_reserved:{
        type: String,
        index: true,
        default:""
    },

    ticket_count_reserved:{
        type: String,
        index: true,
        default:""
    },

    ticket_amount_cancelled:{
        type: Number,
        index: true,
        default: 0
    },

    ticket_count_cancelled:{
        type: Number,
        index: true,
        default:0
    },

    ticket_amount_passes:{
        type: String,
        index: true,
        default:""
    },

    ticket_count_passes:{
        type: String,
        index: true,
        default:""
    },

    passenger_revenue:{
        type: Number,
        index: true,
        default: 0
    },

    baggage_revenue:{
        type: Number,
        index: true,
        default: 0
    },

    gross_revenue:{
        type: Number,
        index: true,
        default:0
    },

    passenger_count:{
        type: Number,
        index: true,
        default:0
    },

    baggage_count:{
        type: Number,
        index: true,
        default:0
    },

    departure_timestamp:{
        type: String,
        index: true,
        default:"2023-01-01 12:00:00"
    },

    departure_lat:{
        type: String,
        index: true,
        default:""
    },

    departure_long:{
        type: String,
        index: true,
        default:""
    }


})

const TORTripSchema = new mongoose.Schema({
    portalId: {},
    recordId: {
        type: String,
        index: true,
        // required: true,
        // unique: true
    },

    modId:{
        type: String,
        index: true,
    },

    fieldData : [tripsSchema]
});

const TORTripModel = mongoose.model('TORTripRecords', TORTripSchema);

export default TORTripModel;