
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserDetails from './UserDetails';

const AllUser = () => {
    const [usersFromDb, setUsersFromDb] = useState([]);
    const { isLoading, refetch } = useQuery('allusers', () => fetch("https://smart-drilling.herokuapp.com/allusers", {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()).then(data => {
        setUsersFromDb(data);
    }))

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='max-h-screen'>
            <h3 className='text-accent text-3xl font-bold text-center my-12'>All Users</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Role</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usersFromDb?.map((userFromDb, index) => <UserDetails
                                key={userFromDb._id}
                                userFromDb={userFromDb}
                                index={index}
                                refetch={refetch}
                            ></UserDetails>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;