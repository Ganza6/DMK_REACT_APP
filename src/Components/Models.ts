export interface IRestaraunt {
    id: string;
    name: string;
    menu: IDish[];
    reviews: IReview[];
}

export interface IDish {
    id: string;
    name: string;
    price: number;
    ingredients: string[];
}

export interface IReview {
    id: string;
    user: string;
    text: string;
    rating: number;
}
