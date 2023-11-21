import { IRestaraunt } from "./Components/Models";
import { Restaraunt } from "./Components/Restaraunt/Restaraunt";
import { RestarauntList } from "./Components/RestarauntList/RestarauntList";

export function App({ restaurants }: { restaurants: IRestaraunt[] }) {
    return (
        <>
            <RestarauntList restaurants={restaurants} />
            {restaurants.map((restaraunt) => (
                <Restaraunt restaraunt={restaraunt} />
            ))}
        </>
    );
}
