import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodos,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        if(newTodoValue !== ''){
            event.preventDefault();
            addTodos(newTodoValue);
            setOpenModal(false);
        } else {
            alert('Ingresa una tarea')
        }
    }

    return (
        <form onSubmit={onSubmit} className="TodoForm">
            <div className="addCuadro">
                <label className="formTitle">Añade una nueva tarea</label>
                <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"/>
                <div>
                    <button 
                        className="cancelButton"
                        type="button"
                        onClick={onCancel}>
                            Cancelar
                    </button>
                    <button 
                        className="submitButton"
                        type="submit">
                            Añadir
                    </button>
                </div>
            </div>
        </form>
    );
}

export {TodoForm};