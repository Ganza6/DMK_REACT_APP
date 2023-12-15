import styles from "./styles.module.css";
import { RestarauntNameButton } from "../RestarauntNameButton/components";
import { useGetRestarauntsQuery } from "../../Redux/services/api";
import { RestarauntNormalized } from "../../Models/NormalizedModels";
export function RestarauntList({
    setCurrentRestarauntId,
}: {
    setCurrentRestarauntId: Function;
}) {
    const { data: restaraunts, isLoading } = useGetRestarauntsQuery(null);

    if (isLoading) {
        return "Рестораны загружаются ...";
    }
    console.log("Render", "RestarauntList");
    return (
        <div className={styles.restaraunts_div}>
            {restaraunts.map((restaraunt: RestarauntNormalized) => (
                <RestarauntNameButton
                    restarauntName={restaraunt.name}
                    onClickFunc={(id: string) => setCurrentRestarauntId(id)}
                    restarauntId={restaraunt.id}
                />
            ))}
        </div>
    );
}
