import { useReducer } from "react";
import { Counter } from "../Counter/Counter";
import { DEFAULT_FORM_VALUE, STEP_RATE } from "./constants";
import styles from "./styles.module.css";
import { MIN_RATE, MAX_RATE } from "../../constants/reviewRateConstants";
import {
    usePatchReviewMutation,
    usePostReviewMutation,
} from "../../Redux/services/api";
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
    restarauntId,
    defaultFormValue = DEFAULT_FORM_VALUE,
    isPostForm = true, // что будет происходить после нажатия кнопки Отправить POST or PATCH
    onClick,
}: {
    restarauntId: string;
    defaultFormValue: any;
    isPostForm?: boolean;
    onClick?: Function;
}) {
    const [createReview] = usePostReviewMutation();
    const [patchReview] = usePatchReviewMutation();
    const [state, dispatch] = useReducer(reducer, defaultFormValue);

    return (
        <div className={styles.review_form}>
            <input
                readOnly={isPostForm ? false : true}
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
                defaultValue={state.text}
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
                    onClick={
                        isPostForm
                            ? () => {
                                  createReview({
                                      restarauntId,
                                      newReview: {
                                          text: state.text,
                                          rating: state.rating,
                                          userId: state.userId,
                                      },
                                  });
                              }
                            : () => {
                                  patchReview({
                                      reviewId: state.id,
                                      changedReview: {
                                          text: state.text,
                                          rating: state.rating,
                                          userId: state.userId,
                                      },
                                  });
                                  if (onClick) {
                                      onClick(false);
                                  }
                              }
                    }
                >
                    Отправить
                </button>
            </div>
        </div>
    );
}
