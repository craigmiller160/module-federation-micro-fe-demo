import React, {useEffect} from 'react';
import axios from 'axios';

export const UserList = () => {
    useEffect(() => {
        const request = async () => {
            const res = await axios.get('https://reqres.in/api/users');
            console.log(res.data);
        };

    }, []);

    return (
        <h3>User List</h3>
    );
};