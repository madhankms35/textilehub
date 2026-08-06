// src/components/dashboard/Topbar.jsx

import { FaBell, FaUserCircle } from "react-icons/fa";

const Topbar = ({ role }) => {

    return (

        <header className="topbar">

            <div>

                <h4 className="mb-0 text-capitalize">

                    {role} Dashboard

                </h4>

            </div>

            <div className="d-flex align-items-center gap-3">

                <FaBell size={20} />

                <FaUserCircle size={32} />

            </div>

        </header>

    );

};

export default Topbar;