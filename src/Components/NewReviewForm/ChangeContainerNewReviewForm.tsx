import { ReviewNormalized } from "../../Models/NormalizedModels";
import { usePatchReviewMutation } from "../../Redux/services/api";
import { NewReviewForm } from "./NewReviewForm";

export function NewReviewFormPatch({
    defaultFormValue,
    onClick,
}: {
    defaultFormValue: ReviewNormalized;
    onClick?: Function;
}) {
    const [patchReview] = usePatchReviewMutation();

    function sendFormValue(state: ReviewNormalized) {
        patchReview({
            reviewId: state.id,
            changedReview: {
                text: state.text,
                rating: state.rating,
                userId: state.userId,
            },
        });
        onClick ? onClick() : "";
    }

    return (
        <NewReviewForm
            defaultFormValue={defaultFormValue}
            getFormState={sendFormValue}
        ></NewReviewForm>
    );
}
