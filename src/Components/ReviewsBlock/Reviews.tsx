import { Review } from "../Review/Review";
import { useGetRestarauntReviewsQuery } from "../../Redux/services/api";
import { ReviewNormalized } from "../../Models/NormalizedModels";

export function ReviewsBlock({ restarauntId }: { restarauntId: string }) {
    console.info("Render", "ReviewsBlock");
    const { data: reviews, isFetching } =
        useGetRestarauntReviewsQuery(restarauntId);
    if (isFetching) {
        // фетчинг лучше, потому что при переходе на ресторан с незагруженными отзывами пользователь видит отзывы прошлого ресторана
        return "Загрузка отзывов";
    }
    return (
        <>
            <h2>Reviews</h2>
            {reviews.map((review: ReviewNormalized) => (
                <Review review={review} />
            ))}
        </>
    );
}
