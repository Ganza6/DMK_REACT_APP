import { useState } from "react";
import { IRestaraunt } from "./Components/Models";
import { Restaraunt } from "./Components/Restaraunt/Restaraunt";
import { RestarauntList } from "./Components/RestarauntList/RestarauntList";
import styles from "./app.module.css";

const { app_wrap, app } = styles;

export function App({ restaurants }: { restaurants: IRestaraunt[] }) {
    const [currentRestarauntName, setCurrentRestarauntName] = useState(
        restaurants[0].name
    );
    const currentRestoran = restaurants.find(
        (restaraunt) => restaraunt.name === currentRestarauntName
    );

    return (
        <div className={app_wrap}>
            <div className={app}>
                <div>
                    <RestarauntList
                        restaurants={restaurants}
                        setCurrentRestarauntName={setCurrentRestarauntName}
                    />
                </div>
                <div>
                    <Restaraunt restaraunt={currentRestoran} />
                </div>
            </div>
        </div>
    );
}
