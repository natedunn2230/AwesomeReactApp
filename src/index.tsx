import { createRoot } from "react-dom/client";
import App from "./Hello";
import ResponsiveAppBar from "./ResponsiveAppBar";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <App />
);
