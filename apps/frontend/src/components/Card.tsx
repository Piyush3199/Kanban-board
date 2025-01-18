import React from "react";
import { CardType } from '../types';
//@ts-ignore
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

const Card: React.FC<{ card: CardType, index: number}> = ({ card, index}) =>{
    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided: DraggableProvided)=>{
                <div
                    className="card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <p>{card.title}</p>
                </div>
            }}
        </Draggable>
    )
}

export default Card;