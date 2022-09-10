import React, { useContext, useState, createContext } from "react";


export const DataContext = createContext({});

export function useDataProvider(){
    return useContext(DataContext)
}

const DataProvider = ({children}) => {
    const [todoList, setTodoList] = useState([
    {taskName:'dishes' , taskDescribe:'Washing Dishes'},
    {taskName:'car washing' , taskDescribe:'washing the Car'},
    {taskName:'bedings', taskDescribe:'Replace the bedings'},
    ]);

    const updateTodoList = (updatedTodoList) => {
        setTodoList(updatedTodoList);
    }



    return (
        <DataContext.Provider value={{todoList, updateTodoList}}>
            {children}
        </DataContext.Provider>
    );
}
export default DataProvider;
