import { useReducer } from "react";
import { Counter } from "../Counter/Counter";
import { DEFAULT_FORM_VALUE, STEP_RATE } from "./constants";
import styles from "./styles.module.css";
import { MIN_RATE, MAX_RATE } from "../../constants/reviewRateConstants";
import { ReviewNormalized } from "../../Models/NormalizedModels";

enum actionType {
    "ChangeName",
    "ChangeText",
    "ChangeRate",
}
interface IAction {
    payload: string | number;
    type: actionType;
}

function reducer(state: ReviewNormalized, action: IAction): ReviewNormalized {
    const { payload, type } = action;
    switch (type) {
        case actionType.ChangeName:
            return { ...state, userId: payload as string };
        case actionType.ChangeText:
            return { ...state, text: payload as string };
        case actionType.ChangeRate:
            return { ...state, rating: payload as number };
    }
}

export function NewReviewForm({
    defaultFormValue = DEFAULT_FORM_VALUE,
    getFormState,
}: {
    defaultFormValue?: ReviewNormalized;
    getFormState?: Function;
}) {
    const [state, dispatch] = useReducer(reducer, defaultFormValue);

    return (
        <div className={styles.review_form}>
            <input
                className={styles.review_form_element}
                placeholder="Имя"
                defaultValue={state.userId}
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
                defaultValue={defaultFormValue.text}
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
            <div>
                <button
                    onClick={() =>
                        getFormState
                            ? getFormState(state)
                            : console.log("На кнопку не назначено действий")
                    }
                >
                    Отправить
                </button>
            </div>
        </div>
    );
}
