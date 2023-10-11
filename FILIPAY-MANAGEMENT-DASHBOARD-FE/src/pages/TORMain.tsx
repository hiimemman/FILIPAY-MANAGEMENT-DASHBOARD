import NavBar from "../components/NavBar";
import Paper from "../components/Paper";
import { DataGrid, GridColDef, GridRowsProp, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport, GridToolbarQuickFilter} from '@mui/x-data-grid';
import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import { Button, LinearProgress } from "@mui/material";
import SyncIcon from '@mui/icons-material/Sync';
import axios from 'axios';
import HeaderCard from "../components/HeaderCard";


const columns: GridColDef[] = [
  
  { 
    field: 'UUID', 
    headerName: 'UUID', 
    width: 280,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'device_id', 
    headerName: 'DEVICE ID', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'control', 
    headerName: 'CONTROL NO', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'tor_no', 
    headerName: 'TOR NO', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'date_of_trip', 
    headerName: 'DATE OF TRIP', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'bus_no', 
    headerName: 'BUS NO', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'route', 
    headerName: 'ROUTE', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'route_code', 
    headerName: 'ROUTE CODE', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'emp_no_driver_1', 
    headerName: 'EMP DRIVER 1', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'emp_no_driver_2', 
    headerName: 'EMP DRIVER 2', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'emp_no_conductor', 
    headerName: 'EMP NO CONDUCTOR', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'emp_name_driver_1', 
    headerName: 'EMP NAME DRIVER 1', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'emp_name_driver_2', 
    headerName: 'EMP NAME DRIVER 2', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'emp_name_conductor', 
    headerName: 'EMP NAME CONDUCTOR', 
     width: 200,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'eskirol_id_driver', 
    headerName: 'ESKIROL ID DRIVER', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'eskirol_id_conductor', 
    headerName: 'ESKIROL ID CONDUCTOR', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'eskirol_name_driver', 
    headerName: 'ESKIROL NAME DRIVER', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'eskirol_name_conductor', 
    headerName: 'ESKIROL NAME CONDUCTOR', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'no_of_trips', 
    headerName: 'TRIPS', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'ticket_revenue_atm', 
    headerName: 'TICKET REVENUE ATM', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
    valueFormatter: (params) => `₱ ${params.value}`
  },

  { 
    field: 'ticket_count_atm', 
    headerName: 'TICKET COUNT ATM', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'ticket_revenue_atm_passenger', 
    headerName: 'TICKET REVENUE ATM PASSENGER', 
     width: 270,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
    valueFormatter: (params) => `₱ ${params.value}`
  },

  { 
    field: 'ticket_revenue_atm_baggage', 
    headerName: 'TICKET REVENUE ATM BAGGAGE', 
     width: 270,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
    valueFormatter: (params) => `₱ ${params.value}`
  },

  { 
    field: 'ticket_count_atm_passenger', 
    headerName: 'TICKET COUNT ATM PASSENGER', 
     width: 250,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'ticket_count_atm_baggage', 
    headerName: 'TICKET COUNT ATM BAGGAGE', 
     width: 230,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'ticket_revenue_punch', 
    headerName: 'TICKET REVENUE PUNCH', 
     width: 200,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
    valueFormatter: (params) => `₱ ${params.value}`
  },

  { 
    field: 'ticket_count_punch', 
    headerName: 'TICKET COUNT PUNCH', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'ticket_revenue_punch_passenger', 
    headerName: 'TICKET REVENUE PUNCH PASSENGER', 
     width: 300,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
    valueFormatter: (params) => `₱ ${params.value}`
  },

  { 
    field: 'ticket_revenue_punch_baggage', 
    headerName: 'TICKET REVENUE PUNCH BAGGAGE', 
     width: 270,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
    valueFormatter: (params) => `₱ ${params.value}`
  },

  { 
    field: 'ticket_count_punch_passenger', 
    headerName: 'TICKET COUNT PUNCH PASSENGER', 
     width: 270,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'ticket_count_punch_baggage', 
    headerName: 'TICKET COUNT PUNCH BAGGAGE', 
     width: 250,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'ticket_revenue_charter', 
    headerName: 'TICKET REVENUE CHARTER', 
     width: 220,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
    valueFormatter: (params) => `₱ ${params.value}`
  },

  { 
    field: 'ticket_count_charter', 
    headerName: 'TICKET COUNT CHARTER', 
     width: 200,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'ticket_revenue_waybill', 
    headerName: 'TICKET REVENUE WAYBILL', 
     width: 220,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
    valueFormatter: (params) => `₱ ${params.value}`
  },

  { 
    field: 'ticket_count_waybill', 
    headerName: 'TICKET COUNT WAYBILL', 
     width: 190,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'ticket_revenue_card', 
    headerName: 'TICKET REVENUE CARD', 
     width: 190,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'ticket_count_card', 
    headerName: 'TICKET COUNT CARD', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'ticket_revenue_reserved', 
    headerName: 'TICKET REVENUE RESERVED', 
     width: 220,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'ticket_count_reserved', 
    headerName: 'TICKET COUNT RESERVED', 
     width: 210,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'ticket_amount_cancelled', 
    headerName: 'TICKET AMOUNT CANCELLED', 
     width: 220,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'ticket_count_cancelled', 
    headerName: 'TICKET COUNT CANCELLED', 
     width: 210,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'ticket_amount_passes', 
    headerName: 'TICKET AMOUNT PASSES', 
     width: 200,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'ticket_count_passes', 
    headerName: 'TICKET COUNT PASSES', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'passenger_revenue', 
    headerName: 'PASSENGER REVENUE', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
    valueFormatter: (params) => `₱ ${params.value}`
  },

  { 
    field: 'baggage_revenue', 
    headerName: 'BAGGAGE REVENUE', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
    valueFormatter: (params) => `₱ ${params.value}`
  },

  { 
    field: 'gross_revenue', 
    headerName: 'GROSS REVENUE', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
    valueFormatter: (params) => `₱ ${params.value}`
  },

  { 
    field: 'passenger_count', 
    headerName: 'PASSENGER COUNT', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'baggage_count', 
    headerName: 'BAGGAGE COUNT', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'commission_driver1_passenger', 
    headerName: 'COMMISSION DRIVER1 PASSENGER', 
     width: 270,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
    
  },

  { 
    field: 'auto_commission_driver1_passenger', 
    headerName: 'AUTO TEST COMMISSION DRIVER1 PASSENGER', 
     width: 350,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'commission_driver1_baggae', 
    headerName: 'COMMISSION DRIVER1 BAGGAGE', 
     width: 250,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  // { 
  //   field: 'auto_commission_driver1_passenger', 
  //   headerName: 'AUTO COMMISSION DRIVER1 PASSENGER', 
  //    width: 180,
  //   headerClassName: 'super-app-theme--header',
  //   editable: true,
  //  headerAlign: 'center',
  //   align: 'center',
  // },

  { 
    field: 'commission_driver1_baggage', 
    headerName: 'COMMISSION DRIVER1 BAGGAGE', 
     width: 250,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'auto_commission_driver1_baggage', 
    headerName: 'AUTO COMMISSION DRIVER1 BAGGAGE', 
     width: 300,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'commission_driver2_passenger', 
    headerName: 'COMMISSION DRIVER2 PASSENGER', 
     width: 290,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'auto_commission_driver2_passenger', 
    headerName: 'AUTO COMMISSION DRIVER2 PASSENGER', 
     width: 310,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'commission_driver2_baggage', 
    headerName: 'COMMISSION DRIVER2 BAGGAGE', 
     width: 250,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'auto_commission_driver2_baggage', 
    headerName: 'AUTO COMMISSION DRIVER2 BAGGAGE', 
     width: 300,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'commission_driver2', 
    headerName: 'COMMISSION DRIVER2', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'auto_commission_driver2', 
    headerName: 'AUTO COMMISSION DRIVER2', 
     width: 220,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'commission_conductor_passenger', 
    headerName: 'COMMISSION CONDUCTOR PASSENGER', 
     width: 300,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'auto_commission_conductor_passenger', 
    headerName: 'AUTO COMMISSION CONDUCTOR PASSENGER', 
     width: 340,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'commission_conductor_baggage', 
    headerName: 'COMMISSION CONDUCTOR BAGGAGE', 
     width: 280,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },


  // { 
  //   field: 'auto_commission_conductor_baggage', 
  //   headerName: 'AUTO COMMISSION CONDUCTOR BAGGAGE', 
  //    width: 180,
  //   headerClassName: 'super-app-theme--header',
  //   editable: true,
  //  headerAlign: 'center',
  //   align: 'center',
  // },
 

  { 
    field: 'commission_conductor', 
    headerName: 'COMMISSION CONDUCTOR', 
     width: 210,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'auto_commission_conductor', 
    headerName: 'AUTO COMMISSION CONDUCTOR', 
     width: 250,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'incentive_driver1', 
    headerName: 'INCENTIVE DRIVER1', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'incentive_driver2', 
    headerName: 'INCENTIVE DRIVER2', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'incentive_conductor', 
    headerName: 'INCENTIVE CONDUCTOR', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'allowance_driver1', 
    headerName: 'ALLOWANCE DRIVER1', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'allowance_driver2', 
    headerName: 'ALLOWANCE DRIVER2', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'allowance_conductor', 
    headerName: 'ALLOWANCE CONDUCTOR', 
     width: 200,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'eskirol_commission_driver', 
    headerName: 'ESKIROL COMMISSION DRIVER', 
     width: 240,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'eskirol_commission_conductor', 
    headerName: 'ESKIROL COMMISSION CONDUCTOR', 
     width: 270,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'eskirol_cash_bond_driver', 
    headerName: 'ESKIROL CASH BOND DRIVER', 
     width: 230,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'eskirol_cash_bond_conductor', 
    headerName: 'ESKIROL CASH BOND CONDUCTOR', 
     width: 260,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'toll_fees', 
    headerName: 'TOLL FEES', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'parking_fee', 
    headerName: 'PARKING FEE', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'diesel', 
    headerName: 'DIESEL', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'diesel_no_of_liters', 
    headerName: 'DIESEL NO OF LITERS', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'others', 
    headerName: 'OTHERS', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'services', 
    headerName: 'SERVICES', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'callers_fee', 
    headerName: 'CALLERS FEE', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'employee_benefits', 
    headerName: 'EMPLOYEE BENEFITS', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'repair_maintenance', 
    headerName: 'REPAIR MAINTENANCE', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'materials', 
    headerName: 'MATERIALS', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'representation', 
    headerName: 'REPRESENTATION', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'total_expenses', 
    headerName: 'TOTAL EXPENSES', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'net_collections', 
    headerName: 'NET COLLECTIONS', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'total_cash_remitted', 
    headerName: 'TOTAL CASH REMITTED', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'final_remittance', 
    headerName: 'FINAL REMITTANCE', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'final_cash_remitted', 
    headerName: 'FINAL CASH REMITTED', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'overage_shortage', 
    headerName: 'OVERAGE SHORTAGE', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'tellers_id', 
    headerName: 'TELLERS ID', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'tellers_name', 
    headerName: 'TELLERS NAME', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'coding', 
    headerName: 'CODING', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'remarks', 
    headerName: 'REMARKS', 
     width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
   headerAlign: 'center',
    align: 'center',
  },
  ];
  
  const rows: GridRowsProp = [
   
  ];

 

  



export function TORMain(){

    const [tableRows, setTableRows] = useState(rows)

    const [isLoading , setIsLoading] = useState(false);

    const [isSyncing, setIsSyncing] = useState(false);

    useEffect(() =>{
      
        GetAllData();
        setTableRows(rows)

        return () =>{}

    },[])

    const styles = (theme : any) => ({
      activeSortIcon: {
        opacity: 1,
        color : 'blue',
      },
      inactiveSortIcon: {
        opacity: 0.4,
        color : 'green',
      },
    });

    async function SyncData(){
      setIsSyncing(true);
      try{

        const request = await axios.get(`${import.meta.env.VITE_BASE_URL}/tor/main`,{
          headers :{
              Authorization : `Bearer ${import.meta.env.VITE_TOKEN}`
          }
      })
          
          const response = await request.data;

          if(response.messages[0].code === '0'){

            setIsSyncing(false);
           
          }

          setIsSyncing(false);
      }catch(e){
        console.error("Error in syncing data: "+e);
        setIsSyncing(false);
      }

    }

  
    async function GetAllData(){

      setIsLoading(true);
      try{
          
          const request = await axios.get(`${import.meta.env.VITE_BASE_URL}/tor/main`,{
            headers :{
                Authorization : `Bearer ${import.meta.env.VITE_TOKEN}`
            }
        })
            
            const response = await request.data;
        
            // console.log(response.response.response.data)

            if(response.messages[0].code === '0'){

              setTableRows(
                
                response.response.response.data.map((data : any) =>{
                  console.log(data.fieldData)
                  return {id: data.fieldData.UUID, ...data.fieldData}
                })
              )
            }
            setIsLoading(false)

            // setClientTableRows(newRows)
        }catch(e){
          setIsLoading(false)
            console.log("ERROR = "+ e)
        }
      
    }   

    useEffect(() =>{

    },[tableRows])


    //Toolbar
  function CustomToolbar() {
    const spinnerStyle = {
      animation: 'spin 1s linear infinite',
    };
  
    const keyframesStyle = `
      @keyframes spin {
        0% { transform: rotate(360deg); }
        100% { transform: rotate(0deg); }
      }
    `;


    
  
    return (
      <>
       
        <GridToolbarContainer>
          {isSyncing ?  (<style>{keyframesStyle}</style>) : null}
          <Button variant="text"  onClick ={SyncData} color="success" startIcon={<SyncIcon style={spinnerStyle} />}>{isSyncing ? "SYNCING..." : "SYNC"}</Button>
          <GridToolbarColumnsButton />
          <GridToolbarFilterButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
          <GridToolbarQuickFilter />
        </GridToolbarContainer>
      </>
    );
  }

    return(<>

    <NavBar>
      <HeaderCard title ="TOR MAIN"/>
        <Paper style={{width: '100%', marginTop: '10px' }}>
            <Box sx = {{
            '& .super-app-theme--header': {
            backgroundColor: '#161d6f',
            color:'white',
            },
            height:'400'
            }}>

            <DataGrid rows={tableRows} columns={columns}
            slots={{toolbar: CustomToolbar, loadingOverlay: LinearProgress}}
            loading ={isLoading}
            slotProps={{
                toolbar: {
                showQuickFilter: true,
                quickFilterProps: {
                    variant: 'filled',
                    size: "medium"
                },  
              },
            }}
           sx={{
              '& .MuiDataGrid-cell': {
                fontSize: '1rem',
                padding: '15px',
              },
            }}
            />
        </Box>
        </Paper>
     

 
       
    </NavBar>
    </>)
}


