import { Double } from "mongodb";
import mongoose  from "mongoose";

const torSchema = new mongoose.Schema({

    UUID:{
        type: String,
        index: true,
        default: "",
        required: false,
    },

    device_id:{
        type: String,
        index: true,
        default: "",
        required: false,
    },

    control_no:{
        type: String,
        index: true,
        default: "",
        required: false,
    },

    tor_no:{
        type: String,
        index: true,
        default: "",
        required: false,
    },

    date_of_trip:{
        type: String,
        index: true,
        default: "",
        required: false
    },

    bus_no :{
        type: String,
        index: true,
        default: "",
    },

    route:{
        type: String,
        index: true,
        default:""
    },

    route_code:{
        type: String,
        index: true,
        default: ""
    },

    emp_no_driver_1:{
        type: String, 
        index: true,
        default: ""
    },

    emp_no_driver_2:{
        type: String,
        index: true,
        default:""
    },

    emp_no_conductor:{
        type: String,
        index: true,
        default: ""
    },

    emp_name_driver_1:{
        type: String,
        index: true,
        default:""
    },

    emp_name_driver_2:{
        type: String,
        index: true,
        default:""
    },

    emp_name_conductor:{
        type: String,
        index: true,
        default:""
    },

    eskirol_id_driver:{
        type: String,
        index: true,
        default: ""
    },

    eskirol_id_conductor:{
        type:String,
        index: true,
        default:""
    },

    eskirol_name_driver:{
        type: String,
        index:true,
        default:""
    },

    eskirol_name_conductor:{
        type: String,
        index:true,
        default: ""
    },

    no_of_trips:{
        type: Number,
        index: true,
        default: 0
    },

    ticket_revenue_atm:{
        type: Number,
        index: true,
        default: 0
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
        type: Number,
        index: true,
        default:0
    },

    ticket_count_atm_passenger:{
        type: Number,
        index: true,
        default:0
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

    ticket_revenue_punch_passenger:{
        type: Number,
        index: true,
        default: 0
    },

    ticket_revenue_punch_baggage:{
        type:Number,
        index: true,
        default: 0
    },

    ticket_count_punch_passenger:{
        type: Number,
        index: true,
        default: 0 
    },

    ticket_count_punch_baggage:{
        type: Number,
        index: true,
        default: 0
    },

    ticket_revenue_charter: {
        type: Number,
        index: true,
        default: 0
    },

    ticket_count_charter:{
        type: Number,
        index: true,
        default: 0
    },

    ticket_revenue_waybill:{
        type: Number,
        index: true,
        default: 0
    },

    ticket_count_waybill:{
        type: Number,
        index: true,
        default: 0
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
        default :""
    },

    ticket_count_reserved:{
        type:String,
        index: true,
        default: ""
    },

    ticket_amount_cancelled:{
        type: Number,
        index: true,
        default: 0
    },

    ticket_count_cancelled:{
        type:Number,
        index: true,
        default: 0
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
        type:Number,
        index: true,
        default: 0
    },

    gross_revenue:{
        type: Number,
        index: true,
        default: 0
    },

    passenger_count:{
        type: Number,
        index: true,
        default: 0
    },

    baggage_count:{
        type: Number,
        index: true,
        default: 0
    },

    commission_driver1_passenger:{
        type: String,
        index: true,
        default:""
    },

    auto_commission_driver1_passenger:{
        type: Double,
        index: true,
        default: 0.00
    },


    commission_driver1:{
        type: Number,
        index: true,
        default: 0
    },

    auto_commission_driver1:{
        type: Double,
        index: true,
        default: 0
    },

    commission_driver2_passenger:{
        type: String,
        index: true,
        default: ""
    },

    auto_commission_driver2_passenger:{
        type: Number,
        index: true,
        default: 0,
    },

    commission_driver2_baggage:{
        type: String,
        index: true,
        default: ""
    },

    auto_commission_driver2_baggage:{
        type: Number,
        index: true,
        default: 0,
    },

    commission_driver2:{
        type: Number,
        index: true,
        default: 0
    },

    auto_commission_driver2:{
        type: String,
        index: true,
        default: ""
    },

    commission_conductor_passenger:{
        type: String,
        index: true,
        default: ""
    },

    auto_commission_conductor_passenger:{
        type: Double,
        index: true,
        default: 0.00
    },

    commission_conductor_baggage:{
        type: String,
        index: true,
        default: ""
    },

    auto_commission_conductor_baggage:{
        type: Double,
        index: true,
        default: 0.00
    },
    
    commission_conductor:{
        type: Number,
        index: true,
        default: 0
    },

    auto_commission_conductor:{
        type: Double,
        index: true,
        default: 0.00
    },

    incentive_driver1:{
        type: Number,
        index: true,
        default: 0
    },

    incentive_driver2:{
        type: Number,
        index: true,
        default:0
    },

    incentive_conductor:{
        type: Number,
        index: true,
        default: 0
    },

    allowance_driver1:{
        type: Number,
        index: true,
        default:0
    },

    allowance_driver2:{
        type: Number,
        index: true,
        default: 0
    },

    allowance_conductor:{
        type: Number,
        index: true,
        default: 0
    },

    eskirol_commission_driver: {
        type: Number,
        index: true,
        default: 0
    },

    eskirol_commission_conductor:{
        type: Number,
        index: true,
        default: 0
    },

    eskirol_cash_bond_driver:{
        type: Number,
        index: true,
        default: 0
    },

    eskirol_cash_bond_conductor:{
        type: Number,
        index: true,
        default: 0
    },

    toll_fees:{
        type: Number,
        index: true,
        default: 0
    },

    parking_fee:{
        type: Number,
        index: true,
        default: 0
    },

    diesel:{
        type: Number,
        index: true,
        default: 0
    },

    diesel_no_of_liters:{
        type: Number,
        index: true,
        default:0,
    },

    others:{
        type: Number,
        index: true,
        default: 0
    },

    services:{
        type: Number,
        index: true,
        default: 0
    },
    
    callers_fee:{
        type: Number,
        index: true,
        default:0
    },

    employee_benefits:{
        type: Number,
        index: true,
        default: 0
    },

    repair_maintenance:{
        type:Number,
        index: true,
        default: 0
    },

    materials:{
        type: Number,
        index: true,
        default:0
    },

    representation:{
        type: Number,
        index: true,
        default:0
    },

    total_expenses:{
        type: Number,
        index: true,
        default:0
    },

    net_collections:{
        type: Number,
        index: true,
        default:0
    },

    total_cash_remitted:{
        type: Number,
        index: true,
        default:0
    },

    final_remittance:{
        type: Number,
        index: true,
        default:0
    },

    final_cash_remitted:{
        type: Number,
        index: true,
        default:0
    },

    overage_shortage:{
        type: Number,
        index: true,
        default:0
    },

    tellers_id:{
        type: String,
        index: true,
        default:""
    },

    tellers_name:{
        type: String,
        index: true,
        default:""
    },

    coding:{
        type: String,
        index: true,
        default:""
    },

    remarks:{
        type: String,
        index: true,
        default:""
    }



})
const TORModel = mongoose.model('TORRecords', torSchema)
export default TORModel;