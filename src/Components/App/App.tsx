import { ModeProvider } from "../../Contexts/modeContext/component";
import { RestarauntPage } from "../../Pages/RestarauntsPage/component";
import { Provider } from "react-redux";
import store from "../../Redux";

export function App() {
    return (
        <Provider store={store}>
            <ModeProvider>
                <RestarauntPage></RestarauntPage>
            </ModeProvider>
        </Provider>
    );
}
// Смена темы операция, которая в перспективе влияет на всё приложение.
// Поэтому считаю, что контекст для неё нужно поставить как можно выше в дерево элементов
// Честно говоря я бы вообще весь App обернул этим контекстом, если это не выглядит маргинально
