import mongoose from "mongoose"

const torTicketSchema = new mongoose.Schema({

    UUID:{
        type: String,
        index: true,
        default: ""
    },

    device_id:{
        type: String,
        index:true,
        default:"",
    },

    control_no:{
        type: String,
        index: true,
        default:""
    },

    tor_no:{
        type: String,
        index: true,
        default:""
    },

    date_of_trip:{
        type: String,
        index: true,
        default:""
    },

    bus_no:{
        type:Number,
        index: true,
        default: 0,
    },

    route:{
        type: String,
        index: true,
        default:""
    },

    route_code:{
        type:String,
        index: true,
        default:"AAAA-0000-1111-BBBB"
    },

    bound:{
        type: String,
        index: true,
        default:"SOUTH"
    },

    trip_no:{
        type: Number,
        index: true,
        default: 5
    },

    ticket_no:{
        type: String,
        index: true,
        default:""
    },

    ticket_type:{
        type: String,
        index: true,
        default:"S"
    },

    ticket_status:{
        type: String,
        index: true,
        default:"",
    },

    timestamp:{
        type: String,
        index: true,
        default: ""
    },

    from_place:{
        type: String,
        index: true,
        default: ""
    },

    to_place:{
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
        default:0
    },

    km_run:{
        type: Number,
        index: true,
        default: 0
    },

    fare:{
        type: Number,
        index: true,
        default: 0
    },
    card_no:{
        type: Number,
        index: true,
        default: 0
    },

    status:{
        type: String,
        index: true,
        default: ""
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

    created_on:{
        type: Date,
        index: true,
        default: Date.now()
    }, 

    updated_on:{
        type: String,
        index: true,
        default:""
    },

    previous_balance:{
        type:String,
        index: true,
        default: "0.00"
    },

    current_balance:{
        type:String,
        index: true,
        default:"0.00"
    }

})