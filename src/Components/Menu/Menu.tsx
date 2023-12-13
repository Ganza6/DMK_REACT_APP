import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestarauntDishes } from "../../Redux/entities/dish/thunks";
import { Dish } from "../Dish/Dish";
import styles from "./styles.module.css";
import { selectRestarauntMenu } from "../../Redux/entities/restaraunt/selectors";
import { State } from "../../Models/StateModel";
import { AppDispatch } from "../../Redux";

const { menu: menuClass, menu_el } = styles;

export function Menu({ restarauntId }: { restarauntId: string }) {
    if (!restarauntId) {
        return "Блюд нет";
    }
    const disptatch: AppDispatch = useDispatch();

    const menu: string[] = useSelector((state: State) =>
        selectRestarauntMenu(state, restarauntId)
    );

    useEffect(() => {
        disptatch(getRestarauntDishes(restarauntId));
    }, [restarauntId]);

    console.info("Render", "Menu");
    return (
        <div className={menuClass}>
            {menu.map((dishId) => (
                <Dish dishId={dishId} className={menu_el} />
            ))}
        </div>
    );
}
