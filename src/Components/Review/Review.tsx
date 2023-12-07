import { MAX_RATE } from "../../Constants/reviewRateConstants";
import { selectReviewById } from "../../Redux/features/entities/review/selectors";
import { useSelector } from "react-redux";
import { State } from "../../Models/StateModel";
import { selectUserNameById } from "../../Redux/features/entities/user/selectors";

export function Review({ reviewId }: { reviewId: string }) {
    const { text, rating, userId } = useSelector((state: State) =>
        selectReviewById(state, reviewId)
    );
    const userName = useSelector((state: State) =>
        selectUserNameById(state, userId)
    );
    return (
        <div>
            <h3>{text}</h3>
            <span>{userName}</span>
            <span>{` ${rating}/${MAX_RATE}`}</span>
        </div>
    );
}
