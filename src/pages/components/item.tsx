import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setItems } from "../../redux/reducer/todoSlice";
import { Article, ArticleDiv } from "../../styles/styles";
import { Draggable } from 'react-beautiful-dnd';
import { TItemProps } from "../../interface/interface";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DoneIcon from '@mui/icons-material/Done';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Item: React.FC<TItemProps> = ({index, item}) => {
  const dispatch = useAppDispatch();

  const items = useAppSelector(({todos}) => todos.items);

  const [itemText, setItemText] = useState(item.content);
  const [isHover, setIsHover] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const onEditItem = () => setIsEdit(true);
  
  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setItemText(e.target.value);
  const onItemTextChange = (e: React.FormEvent) => {
    e.preventDefault();
    if(itemText === "") {
      alert("내용을 입력해주세요.");
      return;
    }
    dispatch(setItems({...items, [item.id]: {...item, content: itemText}}));
    setIsEdit(false);
  };

  const onEditCancel = () => {
    setIsEdit(false);
    setItemText(item.content);
  };

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
            <ArticleDiv>
              <textarea placeholder="Enter a title for this card..." value={itemText} onChange={onTextChange} autoFocus />
              <div>
                <span onClick={onItemTextChange}><DoneIcon /></span>
                <span onClick={onEditCancel}><CloseRoundedIcon /></span>
              </div>
            </ArticleDiv>
          : 
          <>
            <h3>
              {item.content}
            </h3>
            {isHover ? <span onClick={onEditItem}><EditRoundedIcon /></span> : <></>}
          </>}
        </Article>
      )}
    </Draggable>
  )
}



export default Item;