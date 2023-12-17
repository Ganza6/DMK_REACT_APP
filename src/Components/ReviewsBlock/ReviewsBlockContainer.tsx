import { useParams } from "react-router-dom";
import { ReviewsBlock } from "./Reviews";

export function ReviewsBlockContainer() {
    const { restarauntId } = useParams();
    return <ReviewsBlock restarauntId={restarauntId ?? ""}></ReviewsBlock>;
}
