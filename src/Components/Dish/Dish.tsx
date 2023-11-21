import { useState } from "react";
import { IDish } from "../Models";

export function Dish({ dish }: { dish: IDish }) {
    const [dishNumber, setDishNumber] = useState(0);

    function increaseDishNumber() {
        if (dishNumber == 5) {
            return;
        } else {
            setDishNumber(dishNumber + 1);
        }
    }

    function decreaseDishNumber() {
        if (dishNumber == 0) {
            return;
        } else {
            setDishNumber(dishNumber - 1);
        }
    }
    return (
        <h3>
            {dish.name} {dish.price}
            <br />
            <button onClick={() => decreaseDishNumber()}>-</button>
            {dishNumber}
            <button onClick={() => increaseDishNumber()}>+</button>
        </h3>
    );
}
