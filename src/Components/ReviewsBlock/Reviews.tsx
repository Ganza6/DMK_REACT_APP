import { IReview } from "../Models";
import { Review } from "../Review/Review";

export function Reviews({ reviews }: { reviews: IReview[] }) {
    return (
        <>
            <h2>Отзывы</h2>
            {reviews.map((review) => (
                <Review review={review} />
            ))}
        </>
    );
}
