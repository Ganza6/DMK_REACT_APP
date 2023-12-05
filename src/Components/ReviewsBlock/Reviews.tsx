import { Review } from "../Review/Review";

export function ReviewsBlock({ reviewsId }: { reviewsId: string[] }) {
    console.info("Render", "ReviewsBlock");
    return (
        <>
            <h2>Reviews</h2>
            {reviewsId.map((id) => (
                <Review reviewId={id} />
            ))}
        </>
    );
}
