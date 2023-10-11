

import HeaderCard from "../components/HeaderCard";
import NavBar from "../components/NavBar";
import Paper from "../components/Paper";
import { DataGrid, GridColDef, GridRowsProp, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport, GridToolbarQuickFilter} from '@mui/x-data-grid';
import {useEffect,  useState} from 'react'
import Box from '@mui/material/Box';
import { Avatar,  LinearProgress, Stack } from "@mui/material";
import axios from 'axios';

const columns: GridColDef[] = [
  // {
  //   field: 'idPicture',
  //   headerName: "ID Picture",
  //   width: 180,
  //   headerClassName: 'super-app-theme--header',
  //   editable: true,
  //   headerAlign: 'center',
  //   align: 'center',
  //   renderCell: (params) => {
      
  //     return (
  //       <>
  //         <Avatar src={params.value} />
  //       </>
  //     );
  //   }
  // },
  { 
    field: 'lastName', 
    headerName: 'LAST NAME', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
    headerAlign: 'center',
    align: 'center',
   
  },
  { 
    field: 'firstName', 
    headerName: 'FIRST NAME', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  { field: 'middleName', 
    headerName: 'MIDDLE NAME', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'nameSuffix', 
    headerName: 'SUFFIX', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'empNo', 
    headerName: 'EMPLOYEE NO.',
    type:'number', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'empStatus', 
    headerName: 'STATUS', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },

  {
    field: 'empType', 
    headerName: 'EMPLOYEE TYPE', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },

  {
    field: 'idName', 
    headerName: 'ID Name', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },

  {
    field: 'designation', 
    headerName: 'DESIGNATION', 
    width: 180, 
    headerClassName: 'super-app-theme--header',
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  
  // {
  //   field: 'idSignature',
  //   headerName: "ID Signature",
  //   width: 180,
  //   headerClassName: 'super-app-theme--header',
  //   editable: true,
  //   headerAlign: 'center',
  //   align: 'center',
  // },
  {
    field: 'JTI_RFID',
    headerName: "JTI RFID",
    width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'accessPrivileges',
    headerName: "ACCESS PRIVILEGES",
    width: 180,
    headerClassName: 'super-app-theme--header',
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },

  {
    field: 'JTI_RFID_RequestDate',
    headerName: "JTI RFID REQUEST DATE",
    width: 270,
    headerClassName: 'super-app-theme--header',
    editable: true,
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

export function Employee(){

    const [clientTableRows, setClientTableRows] = useState(rows)
    const [isLoading ,setIsLoading ] = useState(false);

    useEffect(() =>{
      
        GetAllEmployees();
        setClientTableRows(rows)

        return () =>{}

    },[])

    useEffect(() =>{

      return () => {}
    },[isLoading])

    async function GetAllEmployees(){

      setIsLoading(true)

        try{
          
          const request = await axios.get(`${import.meta.env.VITE_BASE_URL}/employee`,{
            headers :{
                Authorization : `Bearer ${import.meta.env.VITE_TOKEN}`
            }
        })
            
            const response = await request.data;
        
            if(response.messages[0].code === '0'){

              setClientTableRows(
                
                response.response[0].map((employee : any ) =>{
                  return {id: employee.fieldData[0]._id, ...employee.fieldData[0]}
                })
              )

              setIsLoading(false);
            }
       
        }catch(e){
            console.log("ERROR IN GETTING ALL EMPLOYEE = "+ e)
            setIsLoading(false);
        }
      
    }   

    function NoRowsOverlay() {
      return (
        <Stack height="100%" alignItems="center" justifyContent="center">
          No rows in DataGrid
          <pre>(rows=&#123;[]&#125;)</pre>
        </Stack>
      );
    }
    
    function NoResultsOverlay() {
      return (
        <Stack height="100%" alignItems="center" justifyContent="center">
          No results in DataGrid
          <pre>(rows=&#123;rowData&#125;)</pre>
          But local filter returns no result
        </Stack>
      );
    }
    

    return(<>

    <NavBar>
    <HeaderCard title ="EMPLOYEE" />
        <Paper style={{width: '100%', marginTop: '10px' }}>
          
            <Box sx = {{
            '& .super-app-theme--header': {
            backgroundColor: '#161d6f',
            color:'white',
            },
            height:'400'
            }}>
        
            <DataGrid rows={clientTableRows} columns={columns}
            slots={{toolbar: CustomToolbar, loadingOverlay: LinearProgress, noResultsOverlay : NoResultsOverlay, noRowsOverlay: NoRowsOverlay}}
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
            initialState={{ 

              pagination: { 
                paginationModel: { 
                  pageSize: 5 
                } 
              }, 
            }} 
            pageSizeOptions={[5, 10, 25]}
           loading = {isLoading}
            />
        </Box>
        </Paper>
   </NavBar>
    </>)
}


