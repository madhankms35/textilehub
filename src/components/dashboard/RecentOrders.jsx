const RecentOrders = ({ role, orders }) => {

    return (

        <div className="card shadow-sm">

            <div className="card-header">

                <h5>

                    {role === "buyer"
                        ? "Recent Orders"
                        : "Sales Orders"}

                </h5>

            </div>

            <div className="card-body p-0">

                <table className="table mb-0">

                    <thead>

                        {role === "buyer" ? (

                            <tr>

                                <th>ID</th>

                                <th>Supplier</th>

                                <th>Amount</th>

                                <th>Status</th>

                            </tr>

                        ) : (

                            <tr>

                                <th>Buyer</th>

                                <th>Product</th>

                                <th>Qty</th>

                                <th>Status</th>

                            </tr>

                        )}

                    </thead>

                    <tbody>

                        {orders.map((order, index) => (

                            <tr key={index}>

                                {role === "buyer" ? (
                                    <>
                                        <td>{order.id}</td>
                                        <td>{order.supplier}</td>
                                        <td>{order.amount}</td>
                                        <td>{order.status}</td>
                                    </>
                                ) : (
                                    <>
                                        <td>{order.buyer}</td>
                                        <td>{order.product}</td>
                                        <td>{order.qty}</td>
                                        <td>{order.status}</td>
                                    </>
                                )}

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default RecentOrders;