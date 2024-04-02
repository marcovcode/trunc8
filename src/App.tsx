import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";

import AppLayout from "./ui/AppLayout";
import FullPageSpinner from "./ui/FullPageSpinner";

const queryClient = new QueryClient();

const Shorten = lazy(() => import("./pages/Shorten"));
const Redirect = lazy(() => import("./pages/Redirect"));

function App() {
    return (
        <>
            <Toaster
                toastOptions={{ className: "bg-base-100 text-base-content" }}
            />

            <QueryClientProvider client={queryClient}>
                <Suspense fallback={<FullPageSpinner />}>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<AppLayout />}>
                                <Route path="/" element={<Shorten />} />
                                <Route path="*" element={<Redirect />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            </QueryClientProvider>
        </>
    );
}

export default App;
