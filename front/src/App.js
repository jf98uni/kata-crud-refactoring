import React ,{createContext,useReducer,useRef,useContext,useState} from 'react';
import Form from './components/Form';
import List from './components/List';
import SuperForm from './components/SuperForm';

const HOST_API = "http://localhost:8080/api";

const initialState = {
  todo: { list: [], item: {} }
};
const Store = createContext(initialState)



function reducer(state, action) {
  switch (action.type) {
    case 'update-item':
      const todoUpItem = state.todo;
      const listUpdateEdit = todoUpItem.list.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
      todoUpItem.list = listUpdateEdit;
      todoUpItem.item = {};
      return { ...state, todo: todoUpItem }
    case 'delete-item':
      const todoUpDelete = state.todo;
      const listUpdate = todoUpDelete.list.filter((item) => {
        return item.id !== action.id;
      });
      todoUpDelete.list = listUpdate;
      return { ...state, todo: todoUpDelete }
    case 'update-list':
      const todoUpList = state.todo;
      todoUpList.list = action.list;
      return { ...state, todo: todoUpList }
    case 'edit-item':
      const todoUpEdit = state.todo;
      todoUpEdit.item = action.item;
      return { ...state, todo: todoUpEdit }
    case 'add-item':
      const todoUp = state.todo.list;
      todoUp.push(action.item);
      return { ...state, todo: {list: todoUp, item: {}} }
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
  return <StoreProvider>
    <h3>To-Do List</h3>
      <SuperForm Store= {Store} HOST_API= {HOST_API}/>
      <Form Store= {Store} HOST_API= {HOST_API}/>
      <List Store= {Store} HOST_API= {HOST_API}/>

  </StoreProvider>
}

export default App;
