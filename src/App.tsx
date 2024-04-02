import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import Shorten from "./pages/Shorten";
import AppLayout from "./ui/AppLayout";
import Redirect from "./pages/Redirect";

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <Toaster
                toastOptions={{ className: "bg-base-100 text-base-content" }}
            />

            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<AppLayout />}>
                            <Route path="/" element={<Shorten />} />
                            <Route path="*" element={<Redirect />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </>
    );
}

export default App;
