import mongoose from "mongoose"

const torSchema = new mongoose.Schema({

 UUID:{
    type: String,
    index: true,
    unique: true,
 },

 device_id:{
    type: String,
    index: true,
    default: ""
},

control_no:{
    type: String,
    index: true,
    default: ""
},

tor_no:{
    type: String,
    index: true,
    default: ""
},

date_of_trip:{
    type: String,
    index: true,
    default:""
},

bus_no:{
    type: String,
    index: true,
    default: ""
},

route:{
    type:String,
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
    default: ""
},

trip_no:{
    type: Number,
    index: true,
    default:0
},

ticket_no:{
    type: String,
    index: true,
    default: ""
},

ticket_type:{
    type:String,
    index: true,
    default:""
},

ticket_status:{
    type: String,
    index: true,
    default:""
},

timestamp:{
    type: Date,
    index: true,
    default: Date.now,
},

from_place:{
    type: String,
    index: true,
    default:""
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
    default: 0
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
    type: String,
    index: true,
    default:""
},

status:{
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
    type:String,
    index: true,
    default:""
},

created_on:{
    type: Date,
    index: true,
    default: Date.now
},

updated_on:{
    type: Date,
    index: true,
    default: Date.now
},

previous_balance:{
    type: Number,
    index: true,
    default:0
},

current_balance:{
    type: Number,
    index: true,
    default: 0
}
})

const torTicketSchema = new mongoose.Schema({
    portalData: [],
    recordId: {
        type: String,
        index: true,
        default:"",
        unique: false
    },
    modId:{
        type: String,
        index: true,
        default:""
    },
    fieldData: [torSchema],
})

torTicketSchema.pre("save", function (next) {
    this.recordId = this._id.toString();
    next();
});

const TORTicketModel = mongoose.model('TORTicketRecords', 
torTicketSchema
);

export default TORTicketModel;