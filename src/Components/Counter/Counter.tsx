import { MouseEventHandler } from "react";

export function Counter({
    min,
    max,
    value,
    increment,
    decrement,
}: {
    min: number;
    max: number;
    value: number;
    increment: Function;
    decrement: Function;
}) {
    return (
        <div>
            <button
                disabled={value <= min}
                onClick={decrement as MouseEventHandler<HTMLButtonElement>}
            >
                -
            </button>
            <span>{value}</span>
            <button
                disabled={value >= max}
                onClick={increment as MouseEventHandler<HTMLButtonElement>}
            >
                +
            </button>
        </div>
    );
}
