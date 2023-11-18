import { IReview } from "../Models";

export function Review({ review }: { review: IReview }) {
    return <h3>{review.text}</h3>;
}
