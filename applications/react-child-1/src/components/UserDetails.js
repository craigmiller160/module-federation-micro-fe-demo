import classes from './UserDetails.module.scss';
import { userPropType } from '../propTypes/userPropType';
import PropTypes from 'prop-types';
import { useSelectedUser } from './useSelectedUser';

export const UserDetails = (props) => {
    const selectedUser = useSelectedUser(props.users);

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
            <span>
                <strong>Notes:</strong>
            </span>
            <textarea />
        </div>
    );
};
UserDetails.propTypes = {
    users: PropTypes.arrayOf(userPropType).isRequired
};