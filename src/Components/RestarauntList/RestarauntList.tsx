import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RestarauntNameButton } from "../RestarauntNameButton/components";
import { selectRestarauntIds } from "../../Redux/entities/restaraunt/selectors";
import { useEffect } from "react";
import { getRestaraunts } from "../../Redux/entities/restaraunt/thunks";
import { AppDispatch } from "../../Redux";
export function RestarauntList({
    setCurrentRestarauntId,
}: {
    setCurrentRestarauntId: Function;
}) {
    const disptatch: AppDispatch = useDispatch();
    useEffect(() => {
        disptatch(getRestaraunts());
    }, []);
    const restarauntIds = useSelector(selectRestarauntIds);

    if (!restarauntIds.length) {
        return "Рестораны загружаются ...";
    }
    console.log("Render", "RestarauntList");
    return (
        <div className={styles.restaraunts_div}>
            {restarauntIds.map((restarauntId: string) => (
                <RestarauntNameButton
                    restarauntId={restarauntId}
                    onClickFunc={(id: string) => setCurrentRestarauntId(id)}
                />
            ))}
        </div>
    );
}
