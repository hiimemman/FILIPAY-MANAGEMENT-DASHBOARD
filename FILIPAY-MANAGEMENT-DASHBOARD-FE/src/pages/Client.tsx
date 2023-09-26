

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
    headerName: 'LAST NAME', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
   
  },
  { field: 'firstname', 
    headerName: 'FIRST NAME', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  { field: 'middlename', 
    headerName: 'MIDDLE NAME', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  {field: 'contact', 
  headerName: 'CONTACT NUMBER', 
  width: 180, 
  headerClassName: 'super-app-theme--header',
  editable: true,
  },
  { field: 'email', 
    headerName: 'EMAIL ADDRESS', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  { field: 'birth_date', 
    headerName: 'BIRTHDATE', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  { field: 'cooperative', 
    headerName: 'TRANSPORT COOPERATIVE', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  { field: 'classification', 
    headerName: 'CLASSIFICATION', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  { field: 'card_uid', 
    headerName: 'CARD UI', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  { field: 'card_sn', 
    headerName: 'CARD SN', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  { field: 'status', 
    headerName: 'STATUS', 
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
    headerName: 'ACTION', 
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

    return(<>
    <NavBar>
    <HeaderCard  title="Client"/>
     <div style={{ width: '100%', marginTop: '10px' }}>
        <Paper>
            <Box sx = {{
            '& .super-app-theme--header': {
            backgroundColor: '#161d6f',
            color:'white',
            width: '400'
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
                },  
              },
            }}
           
            />
        </Box>
        </Paper>
     
    </div>
 
       
    </NavBar>
    </>)
}


