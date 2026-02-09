import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Check if the app was pre-rendered (has children in #root)
if (container.hasChildNodes()) {
  // Hydrate pre-rendered HTML
  hydrateRoot(container, <App />);
} else {
  // Standard client-side render for development
  createRoot(container).render(<App />);
}
