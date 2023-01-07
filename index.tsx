import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container: HTMLElement | null = document.getElementById("root");
const root = container ? createRoot(container) : null;

root && root.render(<App />);
