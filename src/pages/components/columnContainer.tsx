import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { DragDropContext, Droppable, DropResult, DraggableLocation } from 'react-beautiful-dnd';
import styled from "styled-components";
import Column from "./column";
import { setColumnOrder } from "../../redux/reducer/todoSlice";

const KanbanWrapper = styled.div`
  display: flex;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const ColumnContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  
  const columns = useAppSelector(({todos}) => todos.columns);
  const columnOrder = useAppSelector(({todos}) => todos.columnOrder);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) return;
    console.log('onDragEnd', type);
    if(type === "column") {
      console.log('hello? type')
      reorderCards(source, destination, draggableId);
    } else {
      const start = columns[source.droppableId];
      const finish = columns[destination.droppableId];
    }
  };

  const reorderCards = (source: DraggableLocation, destination: DraggableLocation, draggableId: string) => {
    const newColumnOrder = Array.from(columnOrder);
    newColumnOrder.splice(source.index, 1);
    newColumnOrder.splice(destination.index, 0, draggableId);
    dispatch(setColumnOrder(newColumnOrder));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <KanbanWrapper ref={provided.innerRef} {...provided.droppableProps}>
            {columnOrder.map((id, index) => {
              return (
                <Column
                  key={id}
                  colId={id}
                  index={index}
                />
              );
            })}
            {provided.placeholder}
          </KanbanWrapper>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default ColumnContainer;