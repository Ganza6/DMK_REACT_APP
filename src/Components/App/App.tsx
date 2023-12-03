import { RestarauntPage } from "../../Pages/RestarauntsPage/component";
import { IRestaraunt } from "../Models";

export function App({ restaurants }: { restaurants: IRestaraunt[] }) {
    return <RestarauntPage restaurants={restaurants}></RestarauntPage>;
}
