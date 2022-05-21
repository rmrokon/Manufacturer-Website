import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import SingleProductCard from './SingleProductCard';

const Inventory = () => {
    const { data: products, isLoading } = useQuery('products', () => fetch("http://localhost:5000/allproducts").then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-16'>
            <h3 className='text-primary text-center text-3xl font-bold'>Tools</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-8'>
                {
                    products.map(p => <SingleProductCard key={p._id} product={p}></SingleProductCard>)
                }
            </div>
        </div>
    );
};

export default Inventory;