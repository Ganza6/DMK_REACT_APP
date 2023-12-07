import { ModeContext } from "../../Contexts/modeContext/context";
import { appMode } from "../../Constants/appMode";
import { IRestaraunt } from "../Models";
import styles from "./styles.module.css";
import { useContext } from "react";
const { restaraunts_div, restaraunt_btn } = styles;
export function RestarauntList({
    restaurants,
    setCurrentRestarauntName,
}: {
    restaurants: IRestaraunt[];
    setCurrentRestarauntName: Function;
}) {
    const contextPayload = useContext(ModeContext);
    console.log("Render", "RestarauntList");
    console.info(contextPayload);
    return (
        <div className={restaraunts_div}>
            {restaurants.map((restaraunt) => (
                <button
                    className={
                        restaraunt_btn +
                        (contextPayload.currentMode === appMode.turbo
                            ? " " + styles.mode_advanced
                            : "")
                    }
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
