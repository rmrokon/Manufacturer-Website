import { useEffect, useState } from 'react';

const useOrders = (email) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://smart-drilling.herokuapp.com/myOrders/${email}`;
        fetch(url, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [email])
    return [orders, setOrders]
};

export default useOrders;