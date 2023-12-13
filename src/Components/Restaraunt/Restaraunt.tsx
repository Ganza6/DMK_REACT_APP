import { Menu } from "../Menu/Menu";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import { ReviewsBlock } from "../ReviewsBlock/Reviews";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../Models/StateModel";
import { selectRestarauntById } from "../../Redux/entities/restaraunt/selectors";
import { useEffect } from "react";
import { getUsers } from "../../Redux/entities/user/thunks";
import { AppDispatch } from "../../Redux";

export function Restaraunt({ restarauntId }: { restarauntId: string }) {
    if (!restarauntId) {
        // комментарий по поводу условного вызова хуков
        // "Проблема с условными вызовами хуков заключается в том, что React полагается на порядок вызова хуков для правильного отслеживания их состояния. Если хуки вызываются условно (например, внутри if, циклов или функций), React не может гарантировать, что порядок хуков будет одинаковым при каждом рендеринге компонента."
        return;
    }
    const restaraunt = useSelector((state: State) =>
        selectRestarauntById(state, restarauntId)
    );

    const disptatch: AppDispatch = useDispatch();
    useEffect(() => {
        disptatch(getUsers());
    }, []);

    return (
        <>
            <h1>{restaraunt.name}</h1>
            <Menu restarauntId={restarauntId} />
            <ReviewsBlock restarauntId={restarauntId} />
            <NewReviewForm />
        </>
    );
}
