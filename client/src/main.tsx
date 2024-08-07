import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import QueryClientProvider from "./lib/tanstackQuery/QueryClientProvider.tsx";
import ThemeProvider from "./lib/mui/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
