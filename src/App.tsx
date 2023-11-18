import { IRestaraunt } from "./Components/Models";
import { RestarauntCart } from "./Components/RestarauntCart/RestarauntCart";
import { RestarauntList } from "./Components/RestarauntList/RestarauntList";

export function App({ restaurants }: { restaurants: IRestaraunt[] }) {
    return (
        <>
            <RestarauntList restaurants={restaurants} />
            {restaurants.map((restaraunt) => (
                <RestarauntCart restaraunt={restaraunt} />
            ))}
        </>
    );
}
