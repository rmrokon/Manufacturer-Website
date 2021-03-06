import { useEffect, useState } from 'react';
import axiosPrivate from '../interceptor/axiosPrivate';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;
        const url = `https://smart-drilling.herokuapp.com/admin/${email}`;
        axiosPrivate.get(url).then(res => {
            setAdmin(res?.data?.admin)
            setAdminLoading(false);
        })
    }, [user])

    return [admin, adminLoading];
};

export default useAdmin;