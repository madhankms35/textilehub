// src/components/dashboard/StatCard.jsx

const StatCard = ({ title, value, color }) => {

    return (

        <div className="col-md-6 col-xl-3">

            <div className={`card border-start border-4 border-${color} shadow-sm`}>

                <div className="card-body">

                    <h6 className="text-muted">

                        {title}

                    </h6>

                    <h3>

                        {value}

                    </h3>

                </div>

            </div>

        </div>

    );

};

export default StatCard;