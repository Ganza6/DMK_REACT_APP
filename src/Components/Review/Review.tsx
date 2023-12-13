import { MAX_RATE } from "../../constants/reviewRateConstants";
import {
    ReviewNormalized,
    UserNormalized,
} from "../../Models/NormalizedModels";
import { useGetUsersQuery } from "../../Redux/services/api";

export function Review({ review }: { review: ReviewNormalized }) {
    const { text, rating, userId } = review;

    const { data: user, isFetching } = useGetUsersQuery(null);
    const userName = isFetching
        ? "Ноунейм"
        : (user as UserNormalized[]).find((user) => user.id == userId)?.name;
    return (
        <div>
            <h3>{text}</h3>
            <span>{userName}</span>
            <span>{` ${rating}/${MAX_RATE}`}</span>
        </div>
    );
}
