import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { Section, Header } from "../../styles/styles";
import { Droppable, Draggable } from 'react-beautiful-dnd';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import Item from "./item";
import { TColumnProps } from "../../interface/interface";

const Column: React.FC<TColumnProps> = ({colId, index}) => {
  const items = useAppSelector(({todos}) => todos.items);
  const column = useAppSelector(({todos}) => todos.columns[colId]);
  const columnItems = column.itemIds.map((itemId) => items[itemId]);
  return (
    <Draggable draggableId={colId} index={index}>
      {(provided) => (
        <Section ref={provided.innerRef} {...provided.draggableProps} id={colId}>
          <Header {...provided.dragHandleProps}>
            <h3>
              {column.title}
            </h3>
            <span><MoreHorizRoundedIcon /></span>
          </Header>
          <Droppable droppableId={colId} type="item">
            {(provided) => (
              <>
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {columnItems.map((item, index) => (
                    <Item
                      key={item.id}
                      index={index}
                      item={item}
                    />
                  ))}
                </div>
                {provided.placeholder}
              </>
            )}
          </Droppable>
        </Section>
      )}
    </Draggable>
  )
}



export default Column;