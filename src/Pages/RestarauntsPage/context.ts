import { createContext } from "react";
import { appMode } from "../../constants/appMode";

export const ModeContext = createContext({
    currentMode: appMode.simple,
    changeMode: () => {},
});
