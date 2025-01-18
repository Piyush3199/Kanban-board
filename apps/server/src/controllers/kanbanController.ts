import { Request, Response } from 'express';
import Board from '../models/Board';

export const getBoards = async (req: Request, res: Response) =>{
    try{
        const boards = await Board.find();
        res.json(boards);
    }catch(error){
       // res.status(500).json({message: error.message});
       console.log("Error in controller: ",error);
    }
};

export const createBoard = async (req: Request, res: Response) => {
    const { name } = req.body;
    try{
        const newBoard = new Board({name});
        await newBoard.save();
        res.status(201).json({newBoard});
    }catch(error){
        res.status(400).json({message: error});
    }
};

