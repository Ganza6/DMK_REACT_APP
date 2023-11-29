import { IDish } from "../Models";
import { Dish } from "../Dish/Dish";
import styles from "./styles.module.css";
export function Menu({ menu }: { menu: IDish[] }) {
    return (
        <div className={styles.menu}>
            {menu.map((dish) => (
                <Dish dish={dish} />
            ))}
        </div>
    );
}
