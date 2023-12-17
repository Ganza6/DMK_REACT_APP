import { Outlet, useNavigate } from "react-router-dom";
import { RestarauntNormalized } from "../../Models/NormalizedModels";
import { useGetRestarauntsQuery } from "../../Redux/services/api";
import { ButtonWithLink } from "../ButtonWithLink/components";
export function Restaraunt({ restarauntId }: { restarauntId: string }) {
    if (!restarauntId) {
        return "";
    }

    const { data, isFetching } = useGetRestarauntsQuery(null);
    if (isFetching) {
        return "Загрузка ресторана";
    }
    const restaraunt = (data as RestarauntNormalized[]).find(
        (restaraunt) => restaraunt.id === restarauntId
    );
    return (
        <>
            <h1>{restaraunt?.name}</h1>
            <ButtonWithLink
                buttonName="Menu"
                buttonLink="menu"
                className="down"
            ></ButtonWithLink>

            <ButtonWithLink
                buttonName="Review"
                buttonLink="reviews"
                className="down"
            ></ButtonWithLink>
            <br></br>
            <Outlet></Outlet>
        </>
    );
}
