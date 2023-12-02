import { IDish } from "../Models";
import { Counter } from "../Counter/Counter";
import { useState } from "react";
import { DISH_COUNTER_STEP, MAX_DISH, MIN_DISH } from "./constants";
import styles from "./styles.module.css";

export function Dish({ dish }: { dish: IDish }) {
    const [numberOfDish, setNumberOfDish] = useState(0);
    const { name, price } = dish;

    return (
        <div className={styles.dish}>
            <h3>{name}</h3> Cost: <span>{price} у.е.</span>
            <br></br>
            <br></br>
            <Counter
                min={MIN_DISH}
                max={MAX_DISH}
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
