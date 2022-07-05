import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChance = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value);
    };

    return(
        <input placeholder="Filtra tu tarea" 
            className="TodoSearch"
            onChange={onSearchValueChance}
            value={searchValue}
        />
    );
}

export {TodoSearch};