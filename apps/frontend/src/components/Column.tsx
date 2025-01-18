import React from "react";
import { ColumnType } from '../types';
import Card from './Card';
//@ts-ignorets-ignore
import { DragDropContext, Droppable, DroppableProvided } from 'react-beautiful-dnd';

const Column: React.FC< {board: ColumnType}> = ({ board }) =>{

    return(
        <div className="column">
            <h3>{board.title}</h3>
            <DragDropContext>
                <Droppable droppableId={board.id}>
                    {(provided: DroppableProvided) =>(
                        <div
                            className="column-cards"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {board.cards.map((card, index)=>(
                                <Card key={card.id} card={card} index={index} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}

export default Column;