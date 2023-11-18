import { Menu } from "../Menu/Menu";
import { IRestaraunt } from "../Models";
import { Reviews } from "../ReviewsBlock/Reviews";

export function RestarauntCart(props: { restaraunt: IRestaraunt }) {
    const { name, menu, reviews } = props.restaraunt;
    return (
        <>
            <h1>{name}</h1>
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
            <br />
        </>
    );
}
