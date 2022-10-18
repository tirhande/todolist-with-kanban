import React, { useCallback, useEffect, useState } from "react";
import { Main, Section, Header, Footer, Article } from "../styles/styles";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
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