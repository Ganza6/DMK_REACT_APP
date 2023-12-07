import { IReview } from "../Models";
import { Review } from "../Review/Review";

export function ReviewsBlock({ reviews }: { reviews: IReview[] }) {
    console.info("Render", "ReviewsBlock");
    return (
        <>
            <h2>Reviews</h2>
            {reviews.map((review) => (
                <Review review={review} />
            ))}
        </>
    );
}
