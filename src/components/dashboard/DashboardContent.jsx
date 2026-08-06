import { buyerDashboard } from "../../data/buyerDashboard";
import { supplierDashboard } from "../../data/supplierDashboard";

import QuickActions from "./QuickActions";
import RecentOrders from "./RecentOrders";


const DashboardContent = ({ role }) => {

    const data =
        role === "buyer"
            ? buyerDashboard
            : supplierDashboard;

    return (
        <>

            <QuickActions
                role={role}
                actions={data.quickActions}
            />

            <div className="row mt-4">

                <div className="col-lg-8">

                    <RecentOrders
                        role={role}
                        orders={data.recentOrders}
                    />

                </div>

                

            </div>

            

        </>
    );

};

export default DashboardContent;