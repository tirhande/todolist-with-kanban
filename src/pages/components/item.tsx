import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setItems } from "../../redux/reducer/todoSlice";
import { Article } from "../../styles/styles";
import { Draggable } from 'react-beautiful-dnd';
import { TItemProps } from "../../interface/interface";
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const Item: React.FC<TItemProps> = ({index, item}) => {
  const dispatch = useAppDispatch();

  const items = useAppSelector(({todos}) => todos.items);

  const [itemText, setItemText] = useState(item.content);
  const [isHover, setIsHover] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const onEditItem = () => setIsEdit(true);
  
  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setItemText(value);
  }
  const onItemTextChange = (e: React.FormEvent) => {
    e.preventDefault();
    if(itemText === "") {
      alert("내용을 입력해주세요.");
      return;
    }
    dispatch(setItems(items.map(val => val.id === item.id ? {...val, content: itemText} : val)));
    setIsEdit(false);
  }

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <Article
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
        >
          {isEdit ? 
            <form onSubmit={onItemTextChange}>
              <input type="text" placeholder="Enter a title for this card..." value={itemText} onChange={onTextChange} autoFocus />
            </form>
          : <>
            <span>
              {item.content}
            </span>
            {isHover ? <EditRoundedIcon onClick={onEditItem} /> : <></>}
          </>}
        </Article>
      )}
    </Draggable>
  )
}



export default Item;