import { useState } from "react";
import styles from "./styles.module.css";
import { Layout } from "../../Components/Layout/component";
import { IRestaraunt } from "../../Components/Models";
import { RestarauntList } from "../../Components/RestarauntList/RestarauntList";
import { Restaraunt } from "../../Components/Restaraunt/Restaraunt";
import { ModeContext } from "./context";
import { appMode } from "../../constants/appMode";

const { app_wrap, app } = styles;

export function RestarauntPage({
    restaurants,
}: {
    restaurants: IRestaraunt[];
}) {
    const [currentRestarauntName, setCurrentRestarauntName] = useState(
        restaurants[0].name
    );
    const [mode, setMode] = useState(appMode.simple);

    const currentRestoran = restaurants.find(
        (restaraunt) => restaraunt.name === currentRestarauntName
    );
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
            <Layout
                children={
                    <div>
                        <div className={app_wrap}>
                            <div className={app}>
                                <RestarauntList
                                    restaurants={restaurants}
                                    setCurrentRestarauntName={
                                        setCurrentRestarauntName
                                    }
                                />
                                <Restaraunt restaraunt={currentRestoran} />
                            </div>
                        </div>
                    </div>
                }
            ></Layout>
        </ModeContext.Provider>
    );
}
