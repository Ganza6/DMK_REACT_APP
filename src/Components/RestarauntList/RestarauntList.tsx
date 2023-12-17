import styles from "./styles.module.css";
import { ButtonWithLink } from "../ButtonWithLink/components";
import { useGetRestarauntsQuery } from "../../Redux/services/api";
import { RestarauntNormalized } from "../../Models/NormalizedModels";
import { Outlet } from "react-router-dom";
export function RestarauntList({}: {}) {
    const { data: restaraunts, isLoading } = useGetRestarauntsQuery(null);

    if (isLoading) {
        return "Рестораны загружаются ...";
    }
    console.log("Render", "RestarauntList");
    return (
        <div>
            <div className={styles.restaraunts_div}>
                {restaraunts.map((restaraunt: RestarauntNormalized) => (
                    <ButtonWithLink
                        buttonName={restaraunt.name}
                        buttonLink={restaraunt.id + ""}
                        className={"up"}
                    />
                ))}
            </div>
            <Outlet></Outlet>
        </div>
    );
}
