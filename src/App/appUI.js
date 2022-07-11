import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";
import './AppUI.css'
import { TodoForm } from "../TodoForm";
import { TodoLoad } from "../ContentLoader/ContentLoader";
import FadeIn from "react-fade-in/lib/FadeIn";
import {ChromePicker} from "react-color"
import Tippy from "@tippyjs/react";

function AppUI() {
  const {
    error,
    loading, 
    searchedTodos, 
    completeTodos, 
    deleteTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  const [getColorR, setColorR] = React.useState();
  const [showColorPickerR, setShowColorPickerR] = React.useState(false);

    return(
    <React.Fragment>
      <div className="area" style={{
        backgroundColor: getColorR,
        height: "100vh",
        }}>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
            <FadeIn>
              {error && <p>Desespérate, hubo un error...</p>}
              {loading && <TodoLoad/>}
              {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}   
              {searchedTodos.map(todo => (
                  <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodos(todo.text)}
                  onDelete={() => deleteTodos(todo.text)}
                  />
              ))}
          </FadeIn>
        </TodoList>

          {!!openModal && (
              <Modal>
                  <TodoForm/>
              </Modal>
            )
          }

          <CreateTodoButton
            setOpenModal={setOpenModal}
            openModal={openModal}
          />
        <div className="SettingScreen">
            <p>Background:</p>
            <button 
              className="buttonR buttonColor"
              onClick={() => setShowColorPickerR(showColorPickerR => !showColorPickerR)}
              style={{backgroundColor: getColorR}}
            >
            </button>
            {
            showColorPickerR && (
                <ChromePicker
                   className="paletaColor"
                   color={getColorR}
                   onChangeComplete={(getColorR) => {setColorR(getColorR.hex)}}    
                   disableAlpha
                />
               )
            }
        </div>
      </div>
    </React.Fragment>
    );
}

export {AppUI};