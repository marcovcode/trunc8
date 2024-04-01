import { Outlet } from "react-router-dom";

function AppLayout() {
    return (
        <div className="font-rubik m-4">
            <Outlet />
        </div>
    );
}

export default AppLayout;
