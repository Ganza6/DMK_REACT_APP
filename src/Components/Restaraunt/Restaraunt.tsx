import { Menu } from "../Menu/Menu";
import { IRestaraunt } from "../Models";
import { Reviews } from "../ReviewsBlock/Reviews";

export function Restaraunt({
    restaraunt,
}: {
    restaraunt: IRestaraunt | undefined;
}) {
    if (restaraunt == undefined) {
        return "Пока ничего не выбрано";
    }
    const { name, menu, reviews } = restaraunt;
    return (
        <>
            <h1>{name}</h1>
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
            <br />
        </>
    );
}
