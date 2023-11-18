import { IDish } from "../Models";
import { Dish } from "../Dish/Dish";
export function Menu({ menu }: { menu: IDish[] }) {
    return (
        <>
            <h2>Меню</h2>
            {menu.map((dish) => (
                <Dish dish={dish} />
            ))}
        </>
    );
}
