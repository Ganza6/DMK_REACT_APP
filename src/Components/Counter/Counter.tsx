import { useState } from "react";

export function Counter({
    min,
    max,
    step = 1,
    initialValue = 0,
    getNewCounterValue,
}: {
    min: number;
    max: number;
    getNewCounterValue: Function;
    step?: number;
    initialValue?: number;
}) {
    const [counterValue, setCounterValue] = useState(initialValue);

    return (
        <div>
            <button
                disabled={counterValue <= min}
                onClick={() => {
                    const newCounterValue = counterValue - step;
                    getNewCounterValue(newCounterValue);
                    setCounterValue(newCounterValue);
                }}
            >
                -
            </button>
            <span>{counterValue}</span>
            <button
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
