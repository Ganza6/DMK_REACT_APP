import { useState } from "react";
import styles from "./styles.module.css";
import { Layout } from "../../Components/Layout/component";
import { IRestaraunt } from "../../Components/Models";
import { RestarauntList } from "../../Components/RestarauntList/RestarauntList";
import { Restaraunt } from "../../Components/Restaraunt/Restaraunt";

const { app_wrap, app } = styles;

export function RestarauntPage({
    restaurants,
}: {
    restaurants: IRestaraunt[];
}) {
    console.log("Render", "RestarauntPage");
    const [currentRestarauntName, setCurrentRestarauntName] = useState(
        restaurants[0].name
    );

    const currentRestoran = restaurants.find(
        (restaraunt) => restaraunt.name === currentRestarauntName
    );
    return (
        <Layout
            children={
                <div>
                    <div className={app_wrap}>
                        <div className={app}>
                            <RestarauntList
                                restaurants={restaurants}
                                setCurrentRestarauntName={
                                    setCurrentRestarauntName
                                }
                            />
                            <Restaraunt restaraunt={currentRestoran} />
                        </div>
                    </div>
                </div>
            }
        ></Layout>
    );
}
