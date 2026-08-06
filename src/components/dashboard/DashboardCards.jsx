// src/components/dashboard/DashboardCards.jsx

import { dashboardCards } from "../../data/dashboardCards";
import StatCard from "./StatCard";

const DashboardCards = ({ role }) => {

    const cards = dashboardCards[role] || [];

    return (

        <div className="row g-4 mb-4">

            {cards.map(card => (

                <StatCard
                    key={card.title}
                    {...card}
                />

            ))}

        </div>

    );

};

export default DashboardCards;