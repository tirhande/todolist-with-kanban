import React from "react";
import TodoList from "./pages/todolist";
import { GlobalStyles } from "./styles/styles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <TodoList />
    </>
  );
};


export default App;