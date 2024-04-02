import { Outlet } from "react-router-dom";

function AppLayout() {
    return (
        <div className="mx-4 font-rubik">
            <Outlet />
        </div>
    );
}

export default AppLayout;
