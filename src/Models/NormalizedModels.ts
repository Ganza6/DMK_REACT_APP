export interface RestarauntNormalized {
    id: string;
    name: string;
    menu: string[];
    reviews: string[];
}

export interface UserNormalized {
    id: string;
    name: string;
}
export interface ReviewNormalized {
    id: string;
    userId: string;
    text: string;
    rating: number;
}
export interface DishNormalized {
    id: string;
    name: string;
    price: number;
    ingredients: string[];
}
