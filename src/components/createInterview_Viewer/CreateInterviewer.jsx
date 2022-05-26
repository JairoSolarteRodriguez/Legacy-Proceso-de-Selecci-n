import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import "styled-components";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import "./CreateInterviewer.css"




const CreateInterviewer = () => {
 
  //1 - Configurar los hooks
  const [users, setUsers] = useState([]);

  //2 - Función para mostrar los datos con fetch
  const URL = "http://localhost:3000/entrevistadores";
  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    showData();
  }, []);

  const columns = [
    {
      name: "Entrevistador",
      selector: (row) => row.entrevistador,
      sortable: true, 
    },
    {
      name: "Rol Principal",
      selector: (row) => row.rol_principal,
      sortable: true, 
    },
    {
      name: "Fecha disponible",
      selector: (row) => row.date,
      sortable: true, 
    },
    {
      name: "Jornada disponible",
      selector: (row) => row.jornada_disponible,
      sortable: true, 
    },
    {
      name: "Habilitar",
      selector: (row) => <input type="checkbox" />,
      sortable: true, 
    },
    
    
  
  ];

  return (
    <div className="moderator_createviewer">
      <div >
      <DataTableExtensions
        columns={columns}
         data={users}
         >
        <DataTable
          title = "Entrevistadores"
          columns={columns}
          data={users}
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
          highlightOnHover
          center
          
          fixedHeader
          fixedHeaderScrollHeight="400px"
          responsive
          options={ { 
            selectableRowsHighlightColumnIndex: -1
          }
        }     />
        </DataTableExtensions>
        </div>
        <div>
          <button type="submit" className="btnadd_interviewer"> Asignar </button>
        </div>
    </div>
  );
};
export default CreateInterviewer;