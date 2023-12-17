import { ReviewNormalized } from "../../Models/NormalizedModels";
import { usePostReviewMutation } from "../../Redux/services/api";
import { NewReviewForm } from "./NewReviewForm";

export function NewReviewFormPost({ restarauntId }: { restarauntId: string }) {
    const [createReview] = usePostReviewMutation();

    function sendFormValue(state: ReviewNormalized) {
        createReview({
            restarauntId,
            newReview: {
                text: state.text,
                rating: state.rating,
                userId: state.userId,
            },
        });
    }

    return <NewReviewForm getFormState={sendFormValue}></NewReviewForm>;
}
