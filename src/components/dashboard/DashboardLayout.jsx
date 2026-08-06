// src/components/dashboard/DashboardLayout.jsx

import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../../css/dashboard.css";
import DashboardContent from "./DashboardContent";

const DashboardLayout = ({ role }) => {

    const location = useLocation();

    return (

        <div className="dashboard-wrapper">

            <Sidebar role={role} />

            <div className="dashboard-main">

                <Topbar role={role} />

                <main className="dashboard-content">

                    {location.pathname === "/dashboard" && (
                        <Outlet />
                    )}
                    <DashboardContent role={role} />
                    {location.pathname !== "/dashboard" && (
                        <Outlet />
                    )}

                </main>

            </div>

        </div>

    );

};

export default DashboardLayout;