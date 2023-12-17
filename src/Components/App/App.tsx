import { ModeProvider } from "../../Contexts/modeContext/component";
import { RestarauntPage } from "../../Pages/RestarauntsPage/component";
import { Provider } from "react-redux";
import store from "../../Redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RestarauntUrlContainer } from "../Restaraunt/RestarauntUrlContainer";
import { ContainerMenu } from "../Menu/ContainerMenu";
import { ReviewsBlockContainer } from "../ReviewsBlock/ReviewsBlockContainer";

export function App() {
    return (
        <Provider store={store}>
            <ModeProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/restaraunts" element={<RestarauntPage />}>
                            <Route
                                path=":restarauntId"
                                element={<RestarauntUrlContainer />}
                            >
                                <Route
                                    index
                                    element={<Navigate to="menu" replace />}
                                />
                                <Route
                                    path="menu"
                                    element={<ContainerMenu />}
                                ></Route>
                                <Route
                                    path="reviews"
                                    element={<ReviewsBlockContainer />}
                                ></Route>
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ModeProvider>
        </Provider>
    );
}
// Смена темы операция, которая в перспективе влияет на всё приложение.
// Поэтому считаю, что контекст для неё нужно поставить как можно выше в дерево элементов
// Честно говоря я бы вообще весь App обернул этим контекстом, если это не выглядит маргинально
