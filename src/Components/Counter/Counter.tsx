import { MouseEventHandler } from "react";
import styles from "./styles.module.css";
const { minus, plus, counter_elem } = styles;

export function Counter({
    min,
    max,
    value,
    increment,
    decrement,
    className,
}: {
    min: number;
    max: number;
    value: number;
    increment: Function;
    decrement: Function;
    className?: string;
}) {
    return (
        <div className={className ? className : ""}>
            <button
                className={minus + " " + counter_elem}
                disabled={value <= min}
                onClick={decrement as MouseEventHandler<HTMLButtonElement>}
            >
                -
            </button>
            <span className={counter_elem}>{value}</span>
            <button
                className={plus + " " + counter_elem}
                disabled={value >= max}
                onClick={increment as MouseEventHandler<HTMLButtonElement>}
            >
                +
            </button>
        </div>
    );
}
