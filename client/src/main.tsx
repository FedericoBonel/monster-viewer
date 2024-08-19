import React from "react";
import ReactDOM from "react-dom/client";
import QueryClientProvider from "@/lib/tanstackQuery/QueryClientProvider.tsx";
import ThemeProvider from "@/lib/mui/ThemeProvider.tsx";
import App from "@/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
