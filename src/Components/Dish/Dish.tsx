import { IDish } from "../Models";
import { Counter } from "../Counter/Counter";
import { MAX_RATE_VALUE, MIN_RATE_VALUE } from "../constants/rateConstants";

export function Dish({ dish }: { dish: IDish }) {
    const { name, price } = dish;

    return (
        <h3>
            {name} {price}
            <br />
            <Counter
                props={{
                    min: MIN_RATE_VALUE,
                    max: MAX_RATE_VALUE,
                    getNewValue: (val: number) => {
                        // do something with new number of dish
                    },
                }}
            />
        </h3>
    );
}
