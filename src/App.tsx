import { BrowserRouter, Route, Routes } from "react-router-dom";

import Shorten from "./pages/Shorten";
import AppLayout from "./ui/AppLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Shorten />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
