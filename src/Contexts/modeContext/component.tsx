import { ReactNode, useState } from "react";
import { appMode } from "../../Constants/appMode";
import { ModeContext } from "./context";

export function ModeProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState(appMode.simple);
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
