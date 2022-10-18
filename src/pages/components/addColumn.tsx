import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setColumnOrder, setColumns } from "../../redux/reducer/todoSlice";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { AddSection } from "../../styles/styles";

const AddColumn: React.FC = () => {
  const dispatch = useAppDispatch();
  const [columnTitle, setColumnTitle] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const columns = useAppSelector(({todos}) => todos.columns);
  const columnOrder = useAppSelector(({todos}) => todos.columnOrder);
  
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setColumnTitle(e.target.value);
  const onAddColumn = () => {
    const maxNum = columnOrder.reduce((acc, cur) => {
      const tmpCur = Number(cur.replace("column-", ""));
      return (acc > tmpCur ? acc : tmpCur);
    }, 0);

    const newColumn = {
      id: "column-" + maxNum + 1,
      title: columnTitle,
      itemIds: []
    };
    dispatch(setColumns({...columns, [newColumn.id]: newColumn}));
    const newColumnOrder = Array.from(columnOrder);
    newColumnOrder.push(newColumn.id);
    dispatch(setColumnOrder(newColumnOrder));
    setColumnTitle("");
  }

  return (
    <AddSection isAdding={isAdding}>
      {isAdding ? 
        <div>
          <input type="text" placeholder="Enter list title..." value={columnTitle} onChange={onChangeInput}/>
          <div>
            <button onClick={onAddColumn}>Add list</button>
            <span onClick={_ => setIsAdding(false)}><CloseRoundedIcon /></span>
          </div>
        </div>
      : <div onClick={_ => setIsAdding(true)}>
          <p>+ Add another list</p>
        </div>}
    </AddSection>
  )
};

export default AddColumn;