import React from "react";
import { Main } from "../styles/styles";
import AddColumn from "./components/addColumn";
import ColumnContainer from "./components/columnContainer";

const TodoList: React.FC = () => {
  return (
    <Main>
      <ColumnContainer />
      <AddColumn />
    </Main>
  )
}

export default TodoList;