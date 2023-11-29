import { IReview } from "../Models";
import { MAX_RATE_VALUE } from "../constants/rateConstants";

export function Review({ review }: { review: IReview }) {
    return (
        <div>
            <h3>{review.text}</h3>
            <span>{review.user}</span>
            <span>{` ${review.rating}/${MAX_RATE_VALUE}`}</span>
        </div>
    );
}
