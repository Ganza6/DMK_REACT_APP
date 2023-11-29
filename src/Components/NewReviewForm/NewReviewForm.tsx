import { useReducer } from "react";
import { Counter } from "../Counter/Counter";
import { IReview } from "../Models";
import { MAX_RATE_VALUE, MIN_RATE_VALUE } from "../constants/rateConstants";
import styles from "./styles.module.css";

const DEFAULT_FORM_VALUE: IReview = { text: "", user: "", rating: 0, id: "1" };
const STEP_RATE: number = 0.5;

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
                min={MIN_RATE_VALUE}
                max={MAX_RATE_VALUE}
                step={STEP_RATE}
                getNewCounterValue={(rate: number) =>
                    dispatch({
                        payload: rate,
                        type: actionType.ChangeRate,
                    })
                }
                initialValue={DEFAULT_FORM_VALUE.rating}
            />
        </div>
    );
}
