// src/components/dashboard/Sidebar.jsx

import { NavLink } from "react-router-dom";
import { dashboardMenus } from "../../data/dashboardMenu";

const Sidebar = ({ role }) => {

    const menus = dashboardMenus[role] || [];

    return (

        <aside className="sidebar">

            <div className="sidebar-logo">

                <h3>TexoTrade</h3>

            </div>

            <ul className="sidebar-menu list-unstyled">

                {menus.map((menu) => {

                    const Icon = menu.icon;

                    return (

                        <li key={menu.title}>

                            <NavLink
                                to={menu.path}
                                className="sidebar-link"
                            >

                                <Icon className="me-2" />

                                {menu.title}

                            </NavLink>

                        </li>

                    );

                })}

            </ul>

        </aside>

    );

};

export default Sidebar;