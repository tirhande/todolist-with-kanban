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
    if(columnTitle === ""){
      alert("내용을 입력해주세요.");
      return;
    }

    const maxNum = columnOrder.reduce((acc, cur) => {
      const tmpCur = Number(cur.replace("column-", ""));
      return (acc > tmpCur ? acc : tmpCur);
    }, 0);

    const newColumn = {
      id: "column-" + (maxNum + 1),
      title: columnTitle,
      itemIds: []
    };
    dispatch(setColumns({...columns, [newColumn.id]: newColumn}));
    const newColumnOrder = Array.from(columnOrder);
    newColumnOrder.push(newColumn.id);
    dispatch(setColumnOrder(newColumnOrder));
    setColumnTitle("");

    const nextSibling = document.querySelector(
      `section#addColumn input`
    ) as HTMLElement;
    if (nextSibling !== null) {
      nextSibling.focus();
    }
  };
  const onClose = () => {
    setIsAdding(false);
    setColumnTitle("");
  }
  return (
    <AddSection id="addColumn" isAdding={isAdding}>
      {isAdding ? 
        <div>
          <input type="text" placeholder="Enter list title..." value={columnTitle} onChange={onChangeInput} onBlur={onClose} autoFocus required/>
          <div>
            <button onMouseDown={(e) => e.preventDefault()} onClick={onAddColumn}>Add list</button>
            <span>
              <CloseRoundedIcon onClick={onClose} />
            </span>
          </div>
        </div>
      : <div onClick={() => setIsAdding(true)}>
          <p>+ Add another list</p>
        </div>}
    </AddSection>
  )
};

export default AddColumn;