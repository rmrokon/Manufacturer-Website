import React from 'react';

const OrderStat = ({ orders }) => {
    return (
        <div className="stats shadow">

            <div className="stat place-items-center">
                <div className="stat-title">Payment Pending</div>
                <div className="stat-value">{orders?.length}</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Active Orders</div>
                <div className="stat-value text-secondary">{orders?.length}</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Shipped</div>
                <div className="stat-value">0</div>
            </div>

        </div>
    );
};

export default OrderStat;