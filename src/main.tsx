import ReactDOM from "react-dom/client";
import { restaurants } from "./mock/mockRest.js";
import { App } from "./App.tsx";
import "./main.css";
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(<App restaurants={restaurants} />);
