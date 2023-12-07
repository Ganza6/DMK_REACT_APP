import styles from "./styles.module.css";
import { useContext } from "react";
import { ModeContext } from "../../Contexts/modeContext/context";
export function Header() {
    const contextPayload = useContext(ModeContext);
    return (
        <div className={styles.header}>
            <button>Заказ</button>
            <button onClick={() => contextPayload.changeMode()}>
                Смена темы
            </button>
        </div>
    );
}
