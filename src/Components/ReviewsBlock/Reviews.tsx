import { Review } from "../Review/Review";
import { useGetRestarauntReviewsQuery } from "../../Redux/services/api";
import { ReviewNormalized } from "../../Models/NormalizedModels";

export function ReviewsBlock({ restarauntId }: { restarauntId: string }) {
    console.info("Render", "ReviewsBlock");
    const { data: reviews, isLoading } =
        useGetRestarauntReviewsQuery(restarauntId);
    if (isLoading) {
        // тут лоадинг, чтоб добавление нового отзыва не перезагружало весь блок отзывов
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
