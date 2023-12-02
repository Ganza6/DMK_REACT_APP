import { IRestaraunt } from "../Models";
import styles from "./styles.module.css";
const { restaraunts_div, restaraunt_btn } = styles;
export function RestarauntList({
    restaurants,
    setCurrentRestarauntName,
}: {
    restaurants: IRestaraunt[];
    setCurrentRestarauntName: Function;
}) {
    return (
        <div className={restaraunts_div}>
            {restaurants.map((restaraunt) => (
                <button
                    className={restaraunt_btn}
                    onClick={() => {
                        setCurrentRestarauntName(restaraunt.name);
                    }}
                >
                    {restaraunt.name}
                </button>
            ))}
        </div>
    );
}
