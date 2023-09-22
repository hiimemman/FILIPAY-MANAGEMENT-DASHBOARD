

import HeaderCard from "../components/HeaderCard";
import MuiDatagrid from "../components/MuiDatagrid";
import NavBar from "../components/NavBar";
import Paper from "../components/Paper";
import SearchInput from "../components/SearchInput";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { DataGrid, GridColDef, GridRowsProp, GridToolbarContainer, useGridApiContext, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport, GridToolbarQuickFilter} from '@mui/x-data-grid';
import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import { Button, Chip, LinearProgress } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useDemoData } from '@mui/x-data-grid-generator';


const columns: GridColDef[] = [
    { field: 'lastname', 
    headerName: 'Last Name', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  { field: 'firstname', 
    headerName: 'First Name', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  { field: 'middlename', 
    headerName: 'Middle Name', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  {field: 'contact', 
  headerName: 'Contact Number', 
  width: 180, 
  headerClassName: 'super-app-theme--header',
  editable: true,
  },
  { field: 'email', 
    headerName: 'Email Address', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  { field: 'birth_date', 
    headerName: 'Birthdate', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  { field: 'cooperative', 
    headerName: 'Transport Cooperative', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  { field: 'classification', 
    headerName: 'Classification', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  { field: 'card_uid', 
    headerName: 'Card UI', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  { field: 'card_sn', 
    headerName: 'Card SN', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  { field: 'status', 
    headerName: 'Status', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
    renderCell: (cellValues) => {
          
        return(
        <>
      {cellValues.value === "Active" ? (<Chip icon={<CheckIcon/>} label="active  " color ="success" size = "small" variant = "outlined"/>) : (<Chip icon={<CloseIcon/>} label="inactive" color ="error" size = "small" variant = "outlined"/>)}
        </>
        );//end of return
      }
  },
  { field: 'action', 
    headerName: 'Action', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  ];
  
  const rows: GridRowsProp = [
    {
        id:1, 
        firstname: "Emmanuel",
        middlename: "Test",
        lastname: "test",
        contact: "0924232421",
        email:"test",
        birth_date: "test",
        cooperative: "test",
        classification: "test",
        card_uid: "test",
        card_sn: "test",
        status:"Active"
    },
    {
        id:2, 
        firstname: "Test",
        middlename: "Test",
        lastname: "test",
        contact: "0924232421",
        email:"test",
        birth_date: "test",
        cooperative: "test",
        classification: "test",
        card_uid: "test",
        card_sn: "test",
        status:"Active"
    },
    {
        id:3, 
        firstname: "Test",
        middlename: "Test",
        lastname: "test",
        contact: "0924232421",
        email:"test",
        birth_date: "test",
        cooperative: "test",
        classification: "test",
        card_uid: "test",
        card_sn: "test",
        status:"Inactive"
    },
    {
        id:4, 
        firstname: "Test",
        middlename: "Test",
        lastname: "test",
        contact: "0924232421",
        email:"test",
        birth_date: "test",
        cooperative: "test",
        classification: "test",
        card_uid: "test",
        card_sn: "test",
        status:"Active"
    },

  ];

  //Toolbar
function CustomToolbar() {

    return (<>
        
        <GridToolbarContainer>
          <Button variant="text"  color ="success" startIcon = {<PersonAddIcon />}> Add</Button>
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



export function Client(){
    const [clientTableRows, setClientTableRows] = useState(rows)

    useEffect(() =>{

        setClientTableRows(rows)

        return () =>{}

    },[])

    return(<>
    <NavBar>
    <HeaderCard  title="Client"/>
     <div style={{ height: '400px', width: '100%', marginTop: '10px' }}>
        <Paper>
            <Box sx = {{
            '& .super-app-theme--header': {
            backgroundColor: '#161d6f',
            color:'white',
            },
        }}>
            <DataGrid rows={clientTableRows} columns={columns}
            slots={{toolbar: CustomToolbar, loadingOverlay: LinearProgress}}
            slotProps={{
                toolbar: {
                showQuickFilter: true,
                quickFilterProps: {
                    variant: 'filled',
                    size: "medium"
                }
                },
            }}
            sx={{
            
            }}
            />
        </Box>
        </Paper>
     
    </div>
 
       
    </NavBar>
    </>)
}


