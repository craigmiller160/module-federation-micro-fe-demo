import classes from './UserDetails.module.scss';
import { userPropType } from '../propTypes/userPropType';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router';
import { useMemo } from 'react';

export const UserDetails = (props) => {
    const match = useRouteMatch();
    const selectedUser = useMemo(() =>
            props.users.find((user) => user.id === parseInt(match.params.userId)),
        [match.params.userId]);

    return (
        <div className={ classes.UserDetails }>
            {
                selectedUser &&
                <img src={ selectedUser?.avatar } alt="avatar" />
            }
            <p>
                <strong>Name: </strong>
                { selectedUser?.first_name } { selectedUser?.last_name }
            </p>
            <p>
                <strong>Email: </strong>
                { selectedUser?.email }
            </p>
        </div>
    );
};
UserDetails.propTypes = {
    users: PropTypes.arrayOf(userPropType).isRequired
};