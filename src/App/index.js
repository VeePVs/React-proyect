/* import logo from './logo.svg'; */
/* import './App.css'; */
import React from "react";
import { AppUI } from "./appUI";
import { TodoProvider } from "../TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export { App };
