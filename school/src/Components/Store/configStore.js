import { createStore, combineReducers } from "redux";
import { studentReduser } from "./Redusers/studentReduser";

export const configStore = () => {
  const myStore = createStore(
    combineReducers({ studentReduser }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return myStore;
};