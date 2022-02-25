import React ,{createContext,useReducer,useRef,useContext,useState} from 'react';
import Form from './components/Form';
import List from './components/List';
import SuperForm from './components/SuperForm';
import SuperList from './components/SuperList';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table,Buttom } from 'reactstrap';
const HOST_API = "http://localhost:8080/api";

const initialState = {
  tabla: { list: [], item: {} }
};
const Store = createContext(initialState)



function reducer(state, action) {
  switch (action.type) {
    case 'update-item':
      const tablaUpItem = state.tabla;
      const listUpdateEdit = tablaUpItem.list.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
      tablaUpItem.list = listUpdateEdit;
      tablaUpItem.item = {};
      return { ...state, tabla: tablaUpItem }
    case 'delete-item':
      const tablaUpDelete = state.tabla;
      const listUpdate = tablaUpDelete.list.filter((item) => {
        return item.id !== action.id;
      });
      tablaUpDelete.list = listUpdate;
      return { ...state, tabla: tablaUpDelete }
    case 'update-list':
      const tablaUpList = state.tabla;
      tablaUpList.list = action.list;
      return { ...state, tabla: tablaUpList }
    case 'edit-item':
      const tablaUpEdit = state.tabla;
      tablaUpEdit.item = action.item;
      return { ...state, tabla: tablaUpEdit }
    case 'add-item':
      const tablaUp = state.tabla.list;
      tablaUp.push(action.item);
      return { ...state, tabla: {list: tablaUp, item: {}} }
    default:
      return state;
  }
}
const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  
  }
function App () {
  return <StoreProvider >
    <h3 className="text-center bg-info">To-Do List</h3>
    <center><SuperForm Store= {Store} HOST_API= {HOST_API} /></center>
      <SuperList Store= {Store} HOST_API= {HOST_API} />
  </StoreProvider>
  
}

export default App;
