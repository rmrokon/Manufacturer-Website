import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../interceptor/axiosPrivate';

const UserDetails = ({ userFromDb, index, refetch }) => {
    const { role, email } = userFromDb;

    const handleMakeAdmin = () => {
        axiosPrivate.put(`https://smart-drilling.herokuapp.com/user/admin/${email}`).then(res => {
            if (res?.data?.modifiedCount === 1) {
                refetch();
                toast.success("admin added");
                console.log(res)
            }
        })
    }

    const handleRemoveUser = async () => {
        const url = `https://smart-drilling.herokuapp.com/user/delete/${email}`;
        await axiosPrivate.delete(url).then(res => {
            if (res?.data?.deletedCount === 1) {
                refetch();
                toast.success("User deleted successfully");
                console.log(res);
            }
        })
    }
    return (
        <tr key={index}>
            <th>{index + 1}</th>
            <td className='text-center'>{email}</td>
            <td className='text-center'>
                {role === "Admin" ? "Admin" : <button onClick={handleMakeAdmin} className='btn btn-accent btn-sm'>Make Admin</button>}
            </td>
            <td><button onClick={handleRemoveUser} className='btn btn-accent btn-sm'>Remove User</button></td>
        </tr>
    );
};

export default UserDetails;