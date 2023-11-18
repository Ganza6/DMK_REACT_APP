import { IDish } from "../Models";

export function Dish({ dish }: { dish: IDish }) {
    return (
        <h3>
            {dish.name} {dish.price}
        </h3>
    );
}
