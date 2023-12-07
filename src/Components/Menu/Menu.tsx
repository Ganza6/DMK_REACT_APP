import { Dish } from "../Dish/Dish";
import styles from "./styles.module.css";

const { menu: menuClass, menu_el } = styles;

export function Menu({ menu }: { menu: string[] }) {
    console.info("Render", "Menu");
    return (
        <div className={menuClass}>
            {menu.map((dishId) => (
                <Dish dishId={dishId} className={menu_el} />
            ))}
        </div>
    );
}
