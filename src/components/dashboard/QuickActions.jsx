import {
    FaStore,
    FaPlus,
    FaHeart,
    FaBoxOpen,
    FaShoppingBag,
    FaFileAlt
} from "react-icons/fa";

import { Link } from "react-router-dom";

const icons = {
    store: FaStore,
    add: FaPlus,
    wishlist: FaHeart,
    products: FaBoxOpen,
    orders: FaShoppingBag,
    rfq: FaFileAlt
};

const QuickActions = ({ actions }) => {

    return (

        <div className="card shadow-sm">

            <div className="card-header">

                <h5 className="mb-0">
                    Quick Actions
                </h5>

            </div>

            <div className="card-body">

                <div className="row g-3">

                    {actions.map(action => {

                        const Icon = icons[action.icon];

                        return (

                            <div
                                className="col-md-4"
                                key={action.title}
                            >

                                <Link
                                    to={action.path}
                                    className="dashboard-action"
                                >

                                    <Icon size={28} />

                                    <h6 className="mt-3">

                                        {action.title}

                                    </h6>

                                </Link>

                            </div>

                        );

                    })}

                </div>

            </div>

        </div>

    );

};

export default QuickActions;