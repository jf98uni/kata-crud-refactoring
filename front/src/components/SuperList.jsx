import React, { useContext,  useEffect, createContext } from 'react';
import SuperComponent from './SuperCompnent';
const HOST_API = "http://localhost:8080/api";


const List = ({Store}) => {

    
    const { dispatch, state: { tabla } } = useContext(Store);
    const currentList = tabla.list;


    
    useEffect(() => {
      fetch(HOST_API + "/tablas")
        .then(response => response.json())
        .then((list) => {
          dispatch([{ type: "update-list", list }])
        })
    }, [dispatch]);
  
    

    const onDelete = (id) => {
      fetch(HOST_API + "/" + id + "/tabla", {
        method: "DELETE"
      }).then((list) => {
        dispatch({ type: "delete-item", id })
      })
    };
  

  
    const decorationDone = {
      textDecoration: 'line-through'
    };
    
    return <div>
      <table className='table table-bordered'>
        <thead>
          <tr>
          </tr>
        </thead>
        <tbody>
          
          {currentList.map((tabla) => {
            if(tabla.name != null){
            return <tr><td><SuperComponent title = {tabla.name}></SuperComponent>
            <button onClick={() => onDelete(tabla.id)} className = "bg-danger">Eliminar</button></td></tr>
            }
            else{
              return <h1>Ingrese un nombre valido no vacio</h1>
            }
          })}
        </tbody>  
        
      </table>
    </div>
  }

  export default List