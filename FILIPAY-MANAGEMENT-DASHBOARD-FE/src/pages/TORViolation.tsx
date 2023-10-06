import NavBar from "../components/NavBar";
import Paper from "../components/Paper";
import { DataGrid, GridColDef, GridRowsProp, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport, GridToolbarQuickFilter} from '@mui/x-data-grid';
import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import { Button, LinearProgress } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import axios from 'axios';
import HeaderCard from "../components/HeaderCard";

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
    field: 'inspector_emp_no', 
    headerName: 'INSPECTOR EMP NO', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'inspector_emp_name', 
    headerName: 'INSPECTOR EMP NAME', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'onboard_time', 
    headerName: 'ONBOARD TIME', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'onboard_place', 
    headerName: 'ONBOARD PLACE', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'onboard_km_post', 
    headerName: 'ONBOARD KM POST', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'offboard_time', 
    headerName: 'OFFBOARD TIME', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'offboard_place', 
    headerName: 'OFFBOARD PLACE', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'offboard_km_post', 
    headerName: 'OFFBOARD KM POST', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'ticket_no_beginning', 
    headerName: 'TICKET NO BEGINNING', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'ticket_no_ending', 
    headerName: 'TICKET NO ENDING', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'passenger_count_paid', 
    headerName: 'PASSENGER COUNT PAID', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'passenger_count_with_pass', 
    headerName: 'TRIP NO', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'passenger_count_transfer', 
    headerName: 'PASSENGER COUNT TRANSFER', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'passenger_count_total', 
    headerName: 'PASSENGER COUNT TOTAL', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'actual', 
    headerName: 'ACTUAL COUNT', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },

  { 
    field: 'total_discrepancy', 
    headerName: 'TOTAL DISCREPANCY', 
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
    field: 'timestamp', 
    headerName: 'TIMESTAMP', 
    headerClassName: 'super-app-theme--header',
    editable: false,
    width: 180,
    headerAlign: 'center',
    align: 'center',
  },
 
 
  ];
  
  const rows: GridRowsProp = [
   
  ];

  //Toolbar
function CustomToolbar() {

    return (<>
        
        <GridToolbarContainer>
          {/* <Button variant="text"  color ="success" startIcon = {<PersonAddIcon />}> Add</Button> */}
          <GridToolbarColumnsButton />
          <GridToolbarFilterButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
          <GridToolbarQuickFilter />
        </GridToolbarContainer>
        {/* <AddEmployee  open ={formOpenType === 'employee'}/>  */}
      </>
      );

}   



export function TORViolation(){

    const [tableRows, setTableRows] = useState(rows)

    const [isLoading , setIsLoading] = useState(false);

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
          
          const request = await axios.get(`${import.meta.env.VITE_BASE_URL}/tor/violation`,{
            headers :{
                Authorization : `Bearer ${import.meta.env.VITE_TOKEN}`
            }
        })
            
            const response = await request.data;
        
   

            if(response.messages[0].code === '0'){

              setTableRows(
                
                response.response.map((data : any) =>{
                 console.log(data.fieldData[0])
                  return {id: data.fieldData[0].UUID, ...data.fieldData[0]}
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

    return(<>

    <NavBar>
      <HeaderCard title="TOR VIOLATION"/>
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


