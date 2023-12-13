import styles from "./styles.module.css";
import { useContext } from "react";
import { ModeContext } from "../../Contexts/modeContext/context";
import { appMode } from "../../Constants/appMode";

export function RestarauntNameButton({
    restarauntName,
    onClickFunc,
    restarauntId,
}: {
    restarauntName: string;
    onClickFunc: Function;
    restarauntId: string;
}) {
    const contextPayload = useContext(ModeContext);
    return (
        <button
            className={
                styles.restaraunt_btn +
                (contextPayload.currentMode === appMode.turbo
                    ? " " + styles.mode_advanced
                    : "")
            }
            onClick={() => {
                onClickFunc(restarauntId);
            }}
        >
            {restarauntName}
        </button>
    );
}
