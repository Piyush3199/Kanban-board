export interface CardType {
    id: string;
    title: string
}

export interface ColumnType {
    id: string;
    title: string;
    cards: CardType[];
}

export interface Card{
    id: string;
    title:string;
    description?: string;
}
export interface Board {
    id: string;
    title: string;
   // columns: ColumnType[];
   cards: Card[];
}