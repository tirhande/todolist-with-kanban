import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import Column from "./column";
import { setColumns, setColumnOrder } from "../../redux/reducer/todoSlice";
import { IMoveItem } from "../../interface/interface";
import { KanbanWrapper } from "../../styles/styles";

const ColumnContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  
  const columns = useAppSelector(({todos}) => todos.columns);
  const columnOrder = useAppSelector(({todos}) => todos.columnOrder);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;

    // 다른 영역으로 드래그 했거나 동일한 위치로 드래그 했을경우 return
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) return;

    if(type === "column") { 
      // 컬럼을 드래그 했을때
      dispatch(
        setColumnOrder(
          getNewArray(columnOrder, source.index, destination.index, draggableId)
        )
      );
    } else {
      // 아이템을 드래그 했을때
      const start = columns[source.droppableId];
      const finish = columns[destination.droppableId];

      if (start.id === finish.id) {
        // 동일한 컬럼으로 드래그 했을때
        dispatch(
          setColumns({
            ...columns,
            [start.id]: {
              ...start,
              itemIds: getNewArray(start.itemIds, source.index, destination.index, draggableId)
            }
          })
        );
      } else {
        // 다른 컬럼으로 드래그 했을때
        const [srcItems, destItems] = moveItem({
          start,
          finish,
          srcIdx: source.index,
          destIdx: destination.index,
          draggableId
        });

        dispatch(
          setColumns({
            ...columns,
            [start.id]: { ...start, itemIds: srcItems },
            [finish.id]: { ...finish, itemIds: destItems },
          })
        );
      }
    }
  };

  const getNewArray = (array: string[], srcIdx: number, destIdx: number, dragId: string) => {
    const tmpArray = Array.from(array);
    tmpArray.splice(srcIdx, 1);
    tmpArray.splice(destIdx, 0, dragId);
    return tmpArray;
  };

  const moveItem = ({start, finish, srcIdx, destIdx, draggableId}: IMoveItem) => {
    const startItemIds = Array.from(start.itemIds);
    startItemIds.splice(srcIdx, 1);

    const finishItemIds = Array.from(finish.itemIds);
    finishItemIds.splice(destIdx, 0, draggableId);
    return [startItemIds, finishItemIds];
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