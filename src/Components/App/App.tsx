import { ModeProvider } from "../../Contexts/modeContext/component";
import { RestarauntPage } from "../../Pages/RestarauntsPage/component";
import { IRestaraunt } from "../Models";

export function App({ restaurants }: { restaurants: IRestaraunt[] }) {
    return (
        <ModeProvider>
            <RestarauntPage restaurants={restaurants}></RestarauntPage>
        </ModeProvider>
    );
}

// Смена темы операция, которая в перспективе влияет на всё приложение.
// Поэтому считаю, что контекст для неё нужно поставить как можно выше в дерево элементов
// Честно говоря я бы вообще весь App обернул этим контекстом, если это не выглядит маргинально
