import NavBar from "../components/NavBar";
import Paper from "../components/Paper";
import { DataGrid, GridColDef, GridRowsProp, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport, GridToolbarQuickFilter} from '@mui/x-data-grid';
import {useEffect, useId, useState} from 'react'
import Box from '@mui/material/Box';
import { Button, LinearProgress } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import axios from 'axios';
import HeaderCard from "../components/HeaderCard";
import SyncIcon from '@mui/icons-material/Sync';

const columns: GridColDef[] = [
  
  { 
    field: 'UUID', 
    headerName: 'UUID', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'device_id', 
    headerName: 'DEVICE ID', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'control_no', 
    headerName: 'CONTROL NO', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'tor_no', 
    headerName: 'TOR NO', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'date_of_trip', 
    headerName: 'DATE OF TRIP', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'bus_no', 
    headerName: 'BUS NO', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'route', 
    headerName: 'ROUTE', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'route_code', 
    headerName: 'ROUTE CODE', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'bound', 
    headerName: 'BOUND', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'trip_no', 
    headerName: 'TRIP NO', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'refuel_date', 
    headerName: 'REFUEL DATE', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'refuel_time', 
    headerName: 'REFUEL TIME', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'fuel_station', 
    headerName: 'FUEL STATION', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'fuel_liters', 
    headerName: 'FUEL LITERS', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'fuel_amount', 
    headerName: 'FUEL AMOUNT', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'fuel_price_per_liter', 
    headerName: 'FUEL PRICE PER LITER', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'fuel_attendant_id', 
    headerName: 'FUEL ATTENDANT ID', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'fuel_attendant', 
    headerName: 'FUEL ATTENDANT', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'fuel_tank', 
    headerName: 'FUEL TANK', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'timestamp', 
    headerName: 'TIMESTAMP', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'lat', 
    headerName: 'LAT', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'long', 
    headerName: 'LONG', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'remakrs', 
    headerName: 'REMARKS', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  
  ];
  
  const rows: GridRowsProp = [
   
  ];




export function TORFuel(){

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

  
    async function GetAllData(){

      setIsLoading(true);
      try{
          
          const request = await axios.get(`${import.meta.env.VITE_BASE_URL}/sync/tor/fuel`,{
            headers :{
                Authorization : `Bearer ${import.meta.env.VITE_TOKEN}`
            }
        })
            
            const response = await request.data;
        
            console.log(response.response)

            if(response.messages[0].code === '0'){

              setTableRows(
                
                response.response.map((data : any) =>{
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
      <HeaderCard title ="TOR FUEL"/>
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


