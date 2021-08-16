import { useEffect, useState } from 'react';
import classes from './Content.module.scss';
import { UserList } from './UserList';
import { UserDetails } from './UserDetails';
import axios from 'axios';
import { Route, useLocation } from 'react-router';

export const Content = () => {
    const location = useLocation();
    console.log(location); // TODO delete this
    const [state, setState] = useState({
        users: []
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

    return (
        <div className={ classes.Content }>
            <div className={ classes.title }>
                <h1>React Child 1</h1>
            </div>
            <div className={ classes.content }>
                <UserList
                    users={ state.users }
                />
                <Route
                    path="/:userId"
                    render={ () => (
                        <UserDetails
                            users={ state.users }
                        />
                    ) }
                />
            </div>
        </div>
    );
};