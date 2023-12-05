import { useState } from "react";
import styles from "./styles.module.css";
import { Layout } from "../../Components/Layout/component";
import { RestarauntList } from "../../Components/RestarauntList/RestarauntList";
import { Restaraunt } from "../../Components/Restaraunt/Restaraunt";
import { selectRandRestarauntId } from "../../Redux/features/entities/restaraunt/selectors";
import { useSelector } from "react-redux";

const { app_wrap, app } = styles;

export function RestarauntPage({}: {}) {
    console.log("Render", "RestarauntPage");
    const [currentRestarauntId, setCurrentRestarauntId] = useState(
        useSelector(selectRandRestarauntId)
    );

    return (
        <Layout
            children={
                <div>
                    <div className={app_wrap}>
                        <div className={app}>
                            <RestarauntList
                                setCurrentRestarauntId={setCurrentRestarauntId}
                            />
                            <Restaraunt restarauntId={currentRestarauntId} />
                        </div>
                    </div>
                </div>
            }
        ></Layout>
    );
}
