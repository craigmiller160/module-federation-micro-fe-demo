import { useEffect, useState } from 'react';
import classes from './App.module.scss';
import { UserList } from './UserList';
import { UserDetails } from './UserDetails';
import axios from 'axios';

export const App = () => {
    const [state, setState] = useState({
        users: [],
        selectedUser: null
    });

    useEffect(() => {
        const request = async () => {
            const res = await axios.get('https://reqres.in/api/users');
            setState((prevState) => ({
                ...prevState,
                users: res.data.data
            }));
        };
        request();
    }, []);

    const selectUser = (selectedUser) => setState((prevState) => ({
        ...prevState,
        selectedUser
    }));

    return (
        <div className={ classes.App }>
            <div className={ classes.title }>
                <h1>React Child 1</h1>
            </div>
            <div className={ classes.content }>
                <UserList
                    users={ state.users }
                    selectUser={ selectUser }
                    selectedUser={ state.selectedUser }
                />
                <UserDetails
                    selectedUser={ state.selectedUser }
                />
            </div>
        </div>
    );
};