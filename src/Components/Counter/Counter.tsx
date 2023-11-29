import { useState } from "react";
import styles from "./styles.module.css";
const { minus, plus, counter_elem } = styles;
export function Counter({
    min,
    max,
    step = 1,
    initialValue = 0,
    getNewCounterValue,
    className,
}: {
    min: number;
    max: number;
    getNewCounterValue: Function;
    step?: number;
    initialValue?: number;
    className?: string;
}) {
    const [counterValue, setCounterValue] = useState(initialValue);

    return (
        <div className={className ? className : ""}>
            <button
                className={minus + " " + counter_elem}
                disabled={counterValue <= min}
                onClick={() => {
                    const newCounterValue = counterValue - step;
                    getNewCounterValue(newCounterValue);
                    setCounterValue(newCounterValue);
                }}
            >
                -
            </button>
            <span className={counter_elem}>{counterValue}</span>
            <button
                className={plus + " " + counter_elem}
                disabled={counterValue >= max}
                onClick={() => {
                    const newCounterValue = counterValue + step;
                    getNewCounterValue(newCounterValue);
                    setCounterValue(newCounterValue);
                }}
            >
                +
            </button>
        </div>
    );
}
