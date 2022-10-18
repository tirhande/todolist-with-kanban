import React from "react";
import { Article } from "../../styles/styles";
import { Draggable } from 'react-beautiful-dnd';
import { TItemProps } from "../../interface/interface";


const Item: React.FC<TItemProps> = ({index, item}) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <Article
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item.content}
        </Article>
      )}
    </Draggable>
  )
}



export default Item;