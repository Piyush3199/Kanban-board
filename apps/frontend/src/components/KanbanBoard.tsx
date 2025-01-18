import React, { useState, useEffect } from "react";
import { getBoards } from '../api/kanbanApi';
import { Board } from '../types';
import Column from './Column';


const KanbanBoard: React.FC = () =>{
    const [boards, setBoards] = useState<Board[]>([]);

    useEffect(()=>{
        const fetchBoards = async () =>{
            const data = await getBoards();
            setBoards(data);
        };

        fetchBoards();
    },[]);

    return(
        <div>
            <h1>Kanban Board</h1>
            <div className="kanban-board">
                {boards.map(board =>(
                    <Column key={board.id} board={board} />
                ))}
            </div>
        </div>
    )
};

export default KanbanBoard;