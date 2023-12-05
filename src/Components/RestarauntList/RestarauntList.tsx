import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectRestarauntIds } from "../../Redux/features/entities/restaraunt/selectors";
import { RestarauntNameButton } from "../RestarauntNameButton/components";
export function RestarauntList({
    setCurrentRestarauntId,
}: {
    setCurrentRestarauntId: Function;
}) {
    const restarauntIds = useSelector(selectRestarauntIds);
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
