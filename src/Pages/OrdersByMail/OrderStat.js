import React from 'react';

const OrderStat = ({ orders }) => {
    return (
        <div class="stats shadow">

            <div class="stat place-items-center">
                <div class="stat-title">Payment Pending</div>
                <div class="stat-value">{orders?.length}</div>
            </div>

            <div class="stat place-items-center">
                <div class="stat-title">Active Orders</div>
                <div class="stat-value text-secondary">{orders?.length}</div>
            </div>

            <div class="stat place-items-center">
                <div class="stat-title">Shipped</div>
                <div class="stat-value">0</div>
            </div>

        </div>
    );
};

export default OrderStat;