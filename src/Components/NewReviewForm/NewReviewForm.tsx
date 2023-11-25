import { useReducer } from "react";
import { Counter } from "../Counter/Counter";
import { IReview } from "../Models";
import { MAX_RATE_VALUE, MIN_RATE_VALUE } from "../constants/rateConstants";

const DEFAULT_FORM_VALUE: IReview = { text: "", user: "", rating: 0, id: "1" };
const STEP_RATE: number = 0.5;

export function NewReviewForm() {
    const getNewRating = (rate: number) => {
        dispatch({
            payload: rate,
            type: actionType.ChangeRate,
        });
    };

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
                props={{
                    min: MIN_RATE_VALUE,
                    max: MAX_RATE_VALUE,
                    step: STEP_RATE,
                    getNewValue: getNewRating,
                    initialValue: DEFAULT_FORM_VALUE.rating,
                }}
            />
        </div>
    );
}
