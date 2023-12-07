import { Menu } from "../Menu/Menu";
import { IRestaraunt } from "../Models";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import { ReviewsBlock } from "../ReviewsBlock/Reviews";

export function Restaraunt({
    restaraunt,
}: {
    restaraunt: IRestaraunt | undefined;
}) {
    if (restaraunt == undefined) {
        return "Такого ресторана не найдено";
    }
    const { name, menu, reviews } = restaraunt;
    return (
        <>
            <h1>{name}</h1>
            <Menu menu={menu} />
            <ReviewsBlock reviews={reviews} />
            <NewReviewForm />
        </>
    );
}
