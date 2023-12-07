import { createContext } from "react";
import { appMode } from "../../Constants/appMode";

export const ModeContext = createContext({
    currentMode: appMode.simple,
    changeMode: () => {},
});
