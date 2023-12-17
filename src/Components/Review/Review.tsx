import { useState } from "react";
import { MAX_RATE } from "../../constants/reviewRateConstants";
import {
    ReviewNormalized,
    UserNormalized,
} from "../../Models/NormalizedModels";
import { useGetUsersQuery } from "../../Redux/services/api";
import { NewReviewFormPatch } from "../NewReviewForm/ChangeContainerNewReviewForm";

export function Review({ review }: { review: ReviewNormalized }) {
    console.log("Render Review");
    const { data: user, isFetching } = useGetUsersQuery(null);
    const [showChangeForm, setShowChangeForm] = useState(false);

    function changeNewFormReviewVisability() {
        setShowChangeForm(!showChangeForm);
    }

    const { text, rating, userId, id } = review;
    const userName = isFetching
        ? "Ноунейм"
        : (user as UserNormalized[]).find((user) => user.id == userId)?.name;
    if (!showChangeForm) {
        return (
            <div>
                <h3>{text}</h3>
                <span>{userName}</span>
                <span>{` ${rating}/${MAX_RATE}`}</span>
                <br />
                <button onClick={() => setShowChangeForm(true)}>
                    Изменить отзыв
                </button>
            </div>
        );
    } else {
        return (
            <div>
                <NewReviewFormPatch
                    defaultFormValue={{ userId, rating, text, userName, id }}
                    onClickSend={changeNewFormReviewVisability}
                ></NewReviewFormPatch>
            </div>
        );
    }
}
