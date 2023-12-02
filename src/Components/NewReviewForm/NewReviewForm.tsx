import { useReducer } from "react";
import { Counter } from "../Counter/Counter";
import { IReview } from "../Models";
import {
    MIN_RATE_VALUE,
    MAX_RATE_VALUE,
    DEFAULT_FORM_VALUE,
    STEP_RATE,
} from "./constants";

enum actionType {
    "ChangeName",
    "ChangeText",
    "ChangeRate",
}
interface IAction {
    payload: string | number;
    type: actionType;
}

function reducer(state: IReview, action: IAction): IReview {
    const { payload, type } = action;
    switch (type) {
        case actionType.ChangeName:
            return { ...state, user: payload as string };
        case actionType.ChangeText:
            return { ...state, text: payload as string };
        case actionType.ChangeRate:
            return { ...state, rating: payload as number };
    }
}

export function NewReviewForm() {
    const [state, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
    console.log(state);

    return (
        <div>
            <h2>Новый отзыв</h2>
            <input
                placeholder="Имя"
                onBlur={(e) =>
                    dispatch({
                        payload: e.target.value,
                        type: actionType.ChangeName,
                    })
                }
            />
            <br />
            <textarea
                placeholder="Введите ваш отзыв"
                style={{ width: "300px", height: "100px" }}
                onBlur={(e) =>
                    dispatch({
                        payload: e.target.value,
                        type: actionType.ChangeText,
                    })
                }
            ></textarea>
            <br />
            <Counter
                min={MIN_RATE_VALUE}
                max={MAX_RATE_VALUE}
                value={state.rating}
                decrement={() =>
                    dispatch({
                        type: actionType.ChangeRate,
                        payload: state.rating - STEP_RATE,
                    })
                }
                increment={() =>
                    dispatch({
                        type: actionType.ChangeRate,
                        payload: state.rating + STEP_RATE,
                    })
                }
            />
        </div>
    );
}
