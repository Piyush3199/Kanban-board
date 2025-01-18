import axios from "axios";

const API_URL = 'http://localhost:5000/api';

export const getBoards = async () =>{
    const response = await axios.get(`${API_URL}/boards`);
    console.log(response.data);
    return response.data;
};

export const createBoard = async (title: string) =>{
    const response = await axios.post(`${API_URL}/boards`,{title});
    console.log(response.data);
    return response.data;
};

export const updateBoard = async (id: string, title: string) =>{
    const response = await axios.put(`${API_URL}/boards/${id}`,{title});
    console.log(response.data);
    return response.data;
};