import { useReducer } from "react";
import { Counter } from "../Counter/Counter";
import { IReview } from "../Models";
import { DEFAULT_FORM_VALUE, STEP_RATE } from "./constants";
import styles from "./styles.module.css";
import { MIN_RATE, MAX_RATE } from "../constants/reviewRateConstants";

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
        <div className={styles.review_form}>
            <h2>Your review</h2>
            <input
                className={styles.review_form_element}
                placeholder="Имя"
                onBlur={(e) =>
                    dispatch({
                        payload: e.target.value,
                        type: actionType.ChangeName,
                    })
                }
            />
            <textarea
                className={styles.review_form_element}
                placeholder="Введите ваш отзыв"
                onBlur={(e) =>
                    dispatch({
                        payload: e.target.value,
                        type: actionType.ChangeText,
                    })
                }
            ></textarea>
            <Counter
                className={styles.review_form_element}
                min={MIN_RATE}
                max={MAX_RATE}
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
