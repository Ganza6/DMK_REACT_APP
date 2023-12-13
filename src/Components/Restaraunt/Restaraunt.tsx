import { RestarauntNormalized } from "../../Models/NormalizedModels";
import { useGetRestarauntsQuery } from "../../Redux/services/api";
import { Menu } from "../Menu/Menu";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import { ReviewsBlock } from "../ReviewsBlock/Reviews";

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
            <Menu restarauntMenu={restaraunt?.menu ?? []} />
            <ReviewsBlock restarauntId={restarauntId} />
            <NewReviewForm restarauntId={restarauntId} />
        </>
    );
}
