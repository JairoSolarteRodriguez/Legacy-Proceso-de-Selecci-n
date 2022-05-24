import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "styled-components";
import "./ModeratorInterviewerTable.css";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useSelector } from "react-redux";
import axios from 'axios';
//import { columns, data } from "./data";


const ModeratorInterviewerTable= ()=> {
   //1 - Configurar los hooks
  const [users, setUsers] = useState([])
 
 // const token = useSelector((state) => state.token);
  async function showData() {
    const { data } = await axios.get(
    "http://localhost:3005/meets",
  /* {
    headers: { Authorization: token },
    }*/
    );
    setUsers(data);
    }


 
 /* //2 - Función para mostrar los datos con fetch
  const URL= "http://localhost:3002/interviewTable";
  const showData = async() =>{
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setUsers(data)

  }*/

  useEffect(()=>{
    showData()

  },[])
//3 
  const columns = [
   
    {
      name: "FECHA",
      selector: (row) => row.date,
      sortable:true
    },
    {
      name: "JORNADA",
      selector: (row) => row.shift,
      sortable:true
    },
    {
      name: "CONVOCATORIA",
      selector: (row) => row.titleConvocatory,
      sortable:true,
      
    },
    {
      name: "# ASPIRANTES",
      selector: (row) => row.usersNumber,
      sortable:true,
    
    },
    {
      name: "# ENTREVISTADORES",
      selector: (row) => row.interviewersNumber,
      sortable:true,
    
    },
    {
      name: "# OBSERVADORES",
      selector: (row) => row.observersNumber,
      sortable:true,
     
    },
    {
      name: "# SALAS",
      selector: (row) => row.interviewRooms,
      sortable:true

    },
    {
      name: "DETALLE",

      /*selector: (row) => row.detalle,*/
      selector: (row) => <a href="https://educamas.com.co/" target="_blank">ver detalles</a>,
      sortable:true
    },
  
  ];


  /*const tableData = {
    columns,
    data
  };*/

  return (
    <div className="tableInterview">
      <DataTableExtensions 
        columns={columns}
        data={users}
      >
        <DataTable
          columns={columns}
          data={users}
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
          highlightOnHover
          //scroll
          fixedHeader
          fixedHeaderScrollHeight="600px"
          noHeader
                  
        />
      </DataTableExtensions>
    </div>
  );
}
export default ModeratorInterviewerTable

