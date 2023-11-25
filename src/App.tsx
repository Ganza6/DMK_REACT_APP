import { useState } from "react";
import { IRestaraunt } from "./Components/Models";
import { Restaraunt } from "./Components/Restaraunt/Restaraunt";
import { RestarauntList } from "./Components/RestarauntList/RestarauntList";

export function App({ restaurants }: { restaurants: IRestaraunt[] }) {
    const [currentRestarauntName, setCurrentRestarauntName] =
        useState("Nothing");
    const currentRestoran = restaurants.find(
        (restaraunt) => restaraunt.name === currentRestarauntName
    );

    return (
        <>
            <RestarauntList
                restaurants={restaurants}
                setCurrentRestarauntName={setCurrentRestarauntName}
            />

            <Restaraunt restaraunt={currentRestoran} />
        </>
    );
}
