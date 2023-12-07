import { Counter } from "../Counter/Counter";
import { useState } from "react";
import { DISH_COUNTER_STEP, MAX_DISH_COUNT, MIN_DISH_COUNT } from "./constants";
import styles from "./styles.module.css";
import { selectDishById } from "../../Redux/features/entities/dish/selectors";
import { State } from "../../Models/StateModel";
import { useSelector } from "react-redux";

export function Dish({
    dishId,
    className,
}: {
    dishId: string;
    className: string;
}) {
    const [numberOfDish, setNumberOfDish] = useState(0);
    const { name, price } = useSelector((state: State) =>
        selectDishById(state, dishId)
    );

    return (
        <div className={(className ? className : "") + " " + styles.dish}>
            <h3>{name}</h3> Cost: <span>{price} у.е.</span>
            <br></br>
            <br></br>
            <Counter
                min={MIN_DISH_COUNT}
                max={MAX_DISH_COUNT}
                value={numberOfDish}
                increment={() =>
                    setNumberOfDish(numberOfDish + DISH_COUNTER_STEP)
                }
                decrement={() =>
                    setNumberOfDish(numberOfDish - DISH_COUNTER_STEP)
                }
            />
        </div>
    );
}
