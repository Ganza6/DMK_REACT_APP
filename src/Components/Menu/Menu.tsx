import { Dish } from "../Dish/Dish";
import styles from "./styles.module.css";

const { menu: menuClass, menu_el } = styles;

export function Menu({ restarauntMenu }: { restarauntMenu: string[] }) {
    console.info("Render", "Menu");
    return (
        <div className={menuClass}>
            {restarauntMenu.map((dishId: string) => (
                <Dish dishId={dishId} className={menu_el} />
            ))}
        </div>
    );
}
