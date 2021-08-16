import React from 'react'; // TODO try getting rid of this
import classes from './App.module.scss';
import { UserList } from './UserList';
import { UserDetails } from './UserDetails';

export const App = () => {
    return (
        <div className={ classes.App }>
            <div className={ classes.title }>
                <h1>React Child 1</h1>
            </div>
            <div className={ classes.content }>
                <UserList />
                <UserDetails />
            </div>
        </div>
    );
};