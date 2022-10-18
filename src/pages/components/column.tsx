import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setColumns, setItems } from "../../redux/reducer/todoSlice";
import { Section, Header, Footer } from "../../styles/styles";
import { Droppable, Draggable } from 'react-beautiful-dnd';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ContentPasteGoRoundedIcon from '@mui/icons-material/ContentPasteGoRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Item from "./item";
import { TColumnProps } from "../../interface/interface";

const Column: React.FC<TColumnProps> = ({colId, index}) => {
  const dispatch = useAppDispatch();

  const items = useAppSelector(({todos}) => todos.items);
  const columns = useAppSelector(({todos}) => todos.columns);
  const column = columns[colId];
  const columnItems = column.itemIds.map((itemId) => items[itemId]);
  
  const [textValue, setTextValue] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => setTextValue(e.target.value);
  const onAddItem = () => {
    const maxNum = Object.keys(items).reduce((acc, cur) => {
      const tmpCur = Number(cur.replace("item-", ""));
      return (acc > tmpCur ? acc : tmpCur);
    }, 0);

    const newItem = {
      id: "item-" + maxNum + 1,
      content: textValue
    };
    dispatch(setItems({...items, [newItem.id]: newItem}));
    dispatch(
      setColumns({
        ...columns, [colId]: {
          ...column, itemIds: [...column.itemIds, newItem.id]
        }
      })
    );
    setTextValue("");
  };

  return (
    <Draggable draggableId={colId} index={index}>
      {(provided) => (
        <Section
          ref={provided.innerRef}
          {...provided.draggableProps}
          id={colId}
        >
          <Header {...provided.dragHandleProps}>
            <h3>{column.title}</h3>
            <span>
              <MoreHorizRoundedIcon />
            </span>
          </Header>
          <Droppable droppableId={colId} type="item">
            {(provided) => (
              <>
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {columnItems.map((item, index) => (
                    <Item key={item.id} index={index} item={item} />
                  ))}
                </div>
                {provided.placeholder}
              </>
            )}
          </Droppable>
          {isAdding ? (
            <>
              <textarea placeholder="Enter a title for this card..." value={textValue} onChange={onChangeTextarea}/>
              <Footer>
                <div className="add_item">
                  <button onClick={onAddItem}>Add card</button>
                  <CloseRoundedIcon onClick={(_) => setIsAdding(false)} />
                </div>
              </Footer>
            </>
          ) : (
            <Footer>
              <div className="new_item" onClick={(_) => setIsAdding(true)}>
                <AddRoundedIcon />
                Add a card
              </div>
              <ContentPasteGoRoundedIcon />
            </Footer>
          )}
        </Section>
      )}
    </Draggable>
  );
}

export default Column;