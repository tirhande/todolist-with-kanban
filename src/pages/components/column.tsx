import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setColumns, setItems } from "../../redux/reducer/todoSlice";
import { Section, Header, Footer, ItemSection } from "../../styles/styles";
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Item from "./item";
import { TColumnProps } from "../../interface/interface";
import Title from "./title";
import AddItem from "./addItem";

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
    if(textValue === ""){
      alert("내용을 입력해주세요.");
      return;
    }

    const maxNum = Object.keys(items).reduce((acc, cur) => {
      const tmpCur = Number(cur.replace("item-", ""));
      return (acc > tmpCur ? acc : tmpCur);
    }, 0);

    const newItem = {
      id: "item-" + (maxNum + 1),
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
    
    const nextSibling = document.querySelector(
      `section#${colId} textarea`
    ) as HTMLElement;
    if (nextSibling !== null) {
      nextSibling.focus();
    }
  };

  const onClose = () => {
    setIsAdding(false);
    setTextValue("");
  }
  console.log(columnItems.length);
  return (
    <Draggable draggableId={colId} index={index}>
      {(provided) => (
        <Section
          ref={provided.innerRef}
          {...provided.draggableProps}
          id={colId}
        >
          <Header {...provided.dragHandleProps}>
            <Title title={column.title} id={colId}/>
          </Header>
          <Droppable droppableId={colId} type="item">
            {(provided) => (
              <>
                <ItemSection ref={provided.innerRef} {...provided.droppableProps} >
                  <div>
                    {columnItems.map((item, index) => <Item key={item.id} index={index} item={item} />)}
                    {isAdding ?
                      <article>
                        <textarea placeholder="Enter a title for this card..." value={textValue} onChange={onChangeTextarea} onBlur={onClose} autoFocus/>
                      </article>
                    : <></>}
                  </div>
                </ItemSection>
                {provided.placeholder}
              </>
            )}
          </Droppable>
          <Footer>
            <AddItem
              isAdding={isAdding}
              onClose={() => onClose()}
              setIsAdding={(is:boolean) => setIsAdding(is)}
              onAddItem={() => onAddItem()}
            />
          </Footer>
        </Section>
      )}
    </Draggable>
  );
}

export default Column;