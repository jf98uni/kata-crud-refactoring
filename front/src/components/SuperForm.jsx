import React, { useContext, useRef, useState,createContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table,Buttom } from 'reactstrap';
const HOST_API = "http://localhost:8080/api";
const SuperForm = ({Store}) => {
    
    const formRef = useRef(null);
    const { dispatch, state: { tabla } } = useContext(Store);
    const item = tabla.item;
    const [state, setState] = useState(item);
  
    const onAdd = (event) => {
      event.preventDefault();
  
      const request = {
        name: state.name,
        id: null,
        completed: false
      };
  
  
      fetch(HOST_API + "/tabla", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((tabla) => {
          dispatch({ type: "add-item", item: tabla });
          setState({ name: "" });
          formRef.current.reset();
        });
    }
  
    const onEdit = (event) => {
      event.preventDefault();
  
      const request = {
        name: state.name,
        id: item.id,
        isCompleted: item.isCompleted
      };
  
  
      fetch(HOST_API + "/tabla", {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((tabla) => {
          dispatch({ type: "update-item", item: tabla });
          setState({ name: "" });
          formRef.current.reset();
        });
    }
  
    return <form ref={formRef}>

      <input
        type="text"
        name="name"
        placeholder="¿Qué piensas hacer hoy?"
        defaultValue={item.name}
        onChange={(event) => {
          setState({ ...state, name: event.target.value })
        }}  ></input>
      {!item.id && <button onClick={onAdd} className = "bg-success">Crear</button>}
    </form>
  }

  
  export default SuperForm