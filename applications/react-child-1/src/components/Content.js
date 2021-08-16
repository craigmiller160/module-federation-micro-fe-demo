import { useEffect, useState } from 'react';
import classes from './Content.module.scss';
import { UserList } from './UserList';
import { UserDetails } from './UserDetails';
import axios from 'axios';
import { Redirect, Route, Switch, useLocation } from 'react-router';

export const Content = () => {
    const location = useLocation();
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
            <Switch>
                <Route
                    path="/:userId"
                    render={ () => (
                        <div className={ classes.content }>
                            <UserList
                                users={ state.users }
                            />
                            <UserDetails
                                users={ state.users }
                            />
                        </div>
                    ) }
                />
                <Redirect to="/0" />
            </Switch>
        </div>
    );
};