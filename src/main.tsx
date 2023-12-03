import ReactDOM from "react-dom/client";
import { restaurants } from "./mock/mockRest.js";
import "./main.css";
import { App } from "./Components/App/App.js";
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(<App restaurants={restaurants} />);
