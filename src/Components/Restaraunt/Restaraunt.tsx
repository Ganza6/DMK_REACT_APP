import { Menu } from "../Menu/Menu";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import { ReviewsBlock } from "../ReviewsBlock/Reviews";
import { selectRestarauntById } from "../../Redux/features/entities/restaraunt/selectors";
import { useSelector } from "react-redux";
import { State } from "../../Models/StateModel";

export function Restaraunt({ restarauntId }: { restarauntId: string }) {
    const restaraunt = useSelector((state: State) =>
        selectRestarauntById(state, restarauntId)
    );

    const { name, menu, reviews } = restaraunt;
    return (
        <>
            <h1>{name}</h1>
            <Menu menu={menu} />
            <ReviewsBlock reviewsId={reviews} />
            <NewReviewForm />
        </>
    );
}
