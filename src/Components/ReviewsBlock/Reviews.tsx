import { useEffect } from "react";
import { Review } from "../Review/Review";
import { AppDispatch } from "../../Redux";
import { useDispatch, useSelector } from "react-redux";
import { selectRestarauntReviews } from "../../Redux/entities/restaraunt/selectors";
import { State } from "../../Models/StateModel";
import { getRestarauntReviews } from "../../Redux/entities/review/thunks";

export function ReviewsBlock({ restarauntId }: { restarauntId: string }) {
    console.info("Render", "ReviewsBlock");
    const disptatch: AppDispatch = useDispatch();
    const reviewsId = useSelector((state: State) =>
        selectRestarauntReviews(state, restarauntId)
    );
    useEffect(() => {
        disptatch(getRestarauntReviews(restarauntId));
    }, [restarauntId]);

    return (
        <>
            <h2>Reviews</h2>
            {reviewsId.map((id) => (
                <Review reviewId={id} />
            ))}
        </>
    );
}
