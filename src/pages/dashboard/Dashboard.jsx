// src/pages/dashboard/Dashboard.jsx

import { useLocation } from "react-router-dom";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import DashboardCards from "../../components/dashboard/DashboardCards";

const Dashboard = () => {

    const location = useLocation();

    const role = location.state?.role || "buyer";

    return (

        <DashboardLayout role={role}>

            <DashboardCards role={role} />

            <div className="card">

                <div className="card-body">

                    <h4>

                        Welcome to TexoTrade

                    </h4>

                    <p>

                        This area will dynamically load Marketplace,
                        Products, Orders, RFQs, Profile and Settings.

                    </p>

                </div>

            </div>

        </DashboardLayout>

    );

};

export default Dashboard;