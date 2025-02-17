import { createRoot } from "react-dom/client";
import "./CSS/index.css";
import App from "./App.tsx";
import CustomContext from "./context/custom-context.tsx";

createRoot(document.getElementById("root")!).render(
  <CustomContext>
    <App />
  </CustomContext>
);
