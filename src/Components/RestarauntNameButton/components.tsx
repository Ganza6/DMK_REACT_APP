import { useSelector } from "react-redux";
import { selectRestarauntById } from "../../Redux/features/entities/restaraunt/selectors";
import styles from "./styles.module.css";
import { useContext } from "react";
import { ModeContext } from "../../Contexts/modeContext/context";
import { appMode } from "../../Constants/appMode";
import { State } from "../../Models/StateModel";

export function RestarauntNameButton({
    restarauntId,
    onClickFunc,
}: {
    restarauntId: string;
    onClickFunc: Function;
}) {
    const restarauntName = useSelector(
        (state: State) => selectRestarauntById(state, restarauntId).name
    );
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
