import { ReactNode, useState } from "react";
import { ModeContext } from "./context";
import { appMode } from "../../Constants/appMode";

export function ModeProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState(appMode.simple);
    console.log("Render ModeProvider");
    return (
        <ModeContext.Provider
            value={{
                currentMode: mode,
                changeMode: () =>
                    mode === appMode.simple
                        ? setMode(appMode.turbo)
                        : setMode(appMode.simple),
            }}
        >
            {children}
        </ModeContext.Provider>
    );
}
