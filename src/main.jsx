import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
const root = createRoot(document.getElementById("main-container"));
root.render(
  <>
    <App />
    <Footer />
  </>,
);
