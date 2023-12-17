import { useParams } from "react-router-dom";
import { Restaraunt } from "./Restaraunt";

export function RestarauntUrlContainer() {
    const { restarauntId } = useParams();
    return <Restaraunt restarauntId={restarauntId as string}></Restaraunt>;
}
