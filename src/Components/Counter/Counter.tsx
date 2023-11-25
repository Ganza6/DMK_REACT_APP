import { useEffect, useState } from "react";

export function Counter({
    props: { min, max, step = 1, initialValue = 0, getNewValue },
}: {
    props: {
        min: number;
        max: number;
        getNewValue: Function;
        step?: number;
        initialValue?: number;
    };
}) {
    const [counterValue, setCounterValue] = useState(initialValue);
    useEffect(() => {
        getNewValue(counterValue);
    }, [counterValue]);
    return (
        <div>
            <button
                disabled={counterValue <= min}
                onClick={() => setCounterValue(counterValue - step)}
            >
                -
            </button>
            <span>{counterValue}</span>
            <button
                disabled={counterValue >= max}
                onClick={() => setCounterValue(counterValue + step)}
            >
                +
            </button>
        </div>
    );
}
