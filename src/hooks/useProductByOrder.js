import { useEffect, useState } from 'react';

const useProductByOrder = (productName) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://smart-drilling.herokuapp.com/productByName/${productName}`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productName]);

    return [product, setProduct];
};

export default useProductByOrder;