import { useParams } from "react-router-dom";
import { Menu } from "./Menu";
import { useGetRestarauntsQuery } from "../../Redux/services/api";
import { RestarauntNormalized } from "../../Models/NormalizedModels";

export function ContainerMenu() {
    const { restarauntId } = useParams();
    const { data } = useGetRestarauntsQuery(null);
    const restaraunt = (data as RestarauntNormalized[]).find(
        (restaraunt) => restaraunt.id === restarauntId
    );
    console.log(restarauntId, "restarauntId");
    return <Menu restarauntMenu={restaraunt?.menu ?? []}></Menu>;
}
