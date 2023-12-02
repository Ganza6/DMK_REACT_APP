import { IDish } from "../Models";
import { Dish } from "../Dish/Dish";
import styles from "./styles.module.css";

const { menu: menuClass, menu_el } = styles;

export function Menu({ menu }: { menu: IDish[] }) {
    return (
        <div className={menuClass}>
            {menu.map((dish) => (
                <Dish dish={dish} className={menu_el} />
            ))}
        </div>
    );
}
