import {createContext, useContext, useState} from "react";

const paginationContext =createContext(null);

export  function PaginationProvider({ children }) {
    const [currentPage, setCurrentPage] = useState(0);
    
    const getPages =(count) =>{
        let pages = 0; 
        while (count > 0){
            count -= 6;
            pages++;
        }
        return pages;
    }
    
   
    return (
        <paginationContext.Provider value={{currentPage, setCurrentPage, getPages}}>
            {children}
        </paginationContext.Provider>
    )
}

export function usePagination() {

    const context = useContext(paginationContext);
    
    if(!context){
        throw new Error('usePagination must be inside PaginationProvider');
    }
    
    return context;
}