import { IDish } from "../Models";
import { Counter } from "../Counter/Counter";
import { MAX_RATE_VALUE, MIN_RATE_VALUE } from "../constants/rateConstants";
import styles from "./styles.module.css";
export function Dish({ dish }: { dish: IDish }) {
    const { name, price } = dish;

    return (
        <div className={styles.dish}>
            <h3>{name}</h3> Cost: <span>{price} у.е.</span>
            <br></br>
            <br></br>
            <Counter
                min={MIN_RATE_VALUE}
                max={MAX_RATE_VALUE}
                getNewCounterValue={(val: number) => {
                    // do something with new number of dish
                }}
            />
        </div>
    );
}
