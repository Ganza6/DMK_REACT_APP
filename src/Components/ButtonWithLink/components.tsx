import styles from "./styles.module.css";
import { useContext } from "react";
import { ModeContext } from "../../Contexts/modeContext/context";
import { appMode } from "../../Constants/appMode";
import { NavLink } from "react-router-dom";

export function ButtonWithLink({
    buttonName,
    buttonLink,
    className,
}: {
    buttonName: string;
    buttonLink: string;
    className: string;
}) {
    const contextPayload = useContext(ModeContext);
    return (
        <>
            <button
                className={
                    styles.restaraunt_btn +
                    (contextPayload.currentMode === appMode.turbo
                        ? " " + styles.mode_advanced
                        : "")
                }
                onClick={() => {
                    //onClickFunc(restarauntId);
                }}
            >
                <NavLink to={`${buttonLink}`} className={className}>
                    {buttonName}
                </NavLink>
            </button>
        </>
    );
}
