

import HeaderCard from "../components/HeaderCard";
import NavBar from "../components/NavBar";
import Paper from "../components/Paper";
import { DataGrid, GridColDef, GridRowsProp, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport, GridToolbarQuickFilter} from '@mui/x-data-grid';
import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import { Button, LinearProgress } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import axios from 'axios';

const columns: GridColDef[] = [
  
  { 
    field: 'lastName', 
    headerName: 'LAST NAME', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
   
  },
  { 
    field: 'firstName', 
    headerName: 'FIRST NAME', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  { field: 'middleName', 
    headerName: 'MIDDLE NAME', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  {
    field: 'nameSuffix', 
    headerName: 'SUFFIX', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  {
    field: 'empNo', 
    headerName: 'EMPLOYEE NO.',
    type:'number', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  {
    field: 'empStatus', 
    headerName: 'STATUS', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },

  {
    field: 'empType', 
    headerName: 'EMPLOYEE TYPE', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },

  {
    field: 'idName', 
    headerName: 'ID Name', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },

  {
    field: 'designation', 
    headerName: 'DESIGNATION', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },

  {
    field: 'JTI_RFID', 
    headerName: 'RFID', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },

  {
    field: 'accessPrivileges', 
    headerName: 'Privileges', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },

  {
    field: 'JTI_RFID_RequestDate', 
    headerName: 'RFID Request Date', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  
//   { field: 'status', 
//     headerName: 'STATUS', 
//     width: 180, 
//     headerClassName: 'super-app-theme--header',
//     editable: true,
//     renderCell: (cellValues) => {
          
//         return(
//         <>
//       {cellValues.value === "Active" ? (<Chip icon={<CheckIcon/>} label="active  " color ="success" size = "small" variant = "outlined"/>) : (<Chip icon={<CloseIcon/>} label="inactive" color ="error" size = "small" variant = "outlined"/>)}
//         </>
//         );
//       }
//   },
  { field: 'action', 
    headerName: 'ACTION', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
  },
  ];
  
  const rows: GridRowsProp = [
   
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



export function Employee(){
    const [clientTableRows, setClientTableRows] = useState(rows)

    useEffect(() =>{

        GetAllEmployees();
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

  
    async function GetAllEmployees(){

        try{
          
          const request = await axios.get('http://localhost:3000/api/v1/sync/employee')
            
            const response = await request.data;
    
            console.log("THIS IS THE RESPONSE = "+ JSON.stringify(response))

            let row = 0;
            let newRows = response.employee_data.map((employee : any) =>{
                row = row + 1;
                console.log("Employee ["+row+"] : "+ JSON.stringify(employee.fieldData))
                return employee.fieldData = {...employee.fieldData, "id": employee.fieldData.empNo};
            })

            setClientTableRows(newRows)
        }catch(e){
            console.log("ERROR IN GETTING ALL EMPLOYEE = "+ e)
        }
      
    }   

    return(<>
    <NavBar>
    <HeaderCard  title="Employee"/>

        <Paper style={{width: '100%', marginTop: '10px' }}>
            <Box sx = {{
            '& .super-app-theme--header': {
            backgroundColor: '#161d6f',
            color:'white',
            },
            height:'400'
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
     

 
       
    </NavBar>
    </>)
}


