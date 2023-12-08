import { useSelector } from "react-redux";
import { MAX_RATE } from "../../Constants/reviewRateConstants";
import { State } from "../../Models/StateModel";
import { selectReviewById } from "../../Redux/entities/review/selectors";
import { selectUserNameById } from "../../Redux/entities/user/selectors";

export function Review({ reviewId }: { reviewId: string }) {
    const {
        text,
        rating,
        userId,
        id: reviewIdFromStore,
    } = useSelector(
        (state: State) =>
            selectReviewById(state, reviewId) ?? {
                text: "",
                rating: "",
                userId: "",
            }
    );

    const userName = useSelector(
        (state: State) =>
            selectUserNameById(state, userId) ?? "Неизвестный пользователь"
    );

    if (!reviewIdFromStore) {
        return; // пока не получили ревью из стора - возвращаем пустоту
    } else {
        return (
            <div>
                <h3>{text}</h3>
                <span>{userName}</span>
                <span>{` ${rating}/${MAX_RATE}`}</span>
            </div>
        );
    }
}
