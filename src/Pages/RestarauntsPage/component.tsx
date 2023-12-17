import { useState } from "react";
import styles from "./styles.module.css";
import { Layout } from "../../Components/Layout/component";
import { RestarauntList } from "../../Components/RestarauntList/RestarauntList";
import { Restaraunt } from "../../Components/Restaraunt/Restaraunt";

const { app_wrap, app } = styles;

export function RestarauntPage({}: {}) {
    console.log("Render", "RestarauntPage");
    //const [currentRestarauntId, setCurrentRestarauntId] = useState("");

    return (
        <Layout
            children={
                <div>
                    <div className={app_wrap}>
                        <div className={app}>
                            <RestarauntList
                            //setCurrentRestarauntId={setCurrentRestarauntId}
                            />
                            <Restaraunt restarauntId={""} />
                        </div>
                    </div>
                </div>
            }
        ></Layout>
    );
}
