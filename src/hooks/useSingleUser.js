import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useSingleUser = () => {
    const [user] = useAuthState(auth);
    const [userInfoFromDb, setUserInfoFromDb] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/getUserByEmail/${user?.email}`;

        fetch(url, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res => res.json()).then(data => setUserInfoFromDb(data))
    }, [user?.email])

    return [userInfoFromDb, setUserInfoFromDb]
};

export default useSingleUser;