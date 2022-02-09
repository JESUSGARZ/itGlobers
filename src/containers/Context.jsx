import {  createContext } from "react";
import data from '../data.json'
export const AppContext= createContext();
var agency = '';

const ContextProvider =({children}) => {
  const dataFromApi = data;  
  
    return (
        <AppContext.Provider value={dataFromApi} >
            {children}
        </AppContext.Provider>
    )
}
export default ContextProvider;