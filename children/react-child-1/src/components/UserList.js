import classes from './UserList.module.scss';
import PropTypes from 'prop-types';
import { userPropType } from '../propTypes/userPropType';
import { Link } from 'react-router-dom';
import { useSelectedUser } from './useSelectedUser';

export const UserList = (props) => {
    const selectedUser = useSelectedUser(props.users);
    // TODO this can be done with useRouteMatch('/:userId');
    return (
        <div className={ classes.UserList }>
            <ul>
                {
                    props.users.map((user) => {
                        const className = user.id === selectedUser?.id ? classes.active : null;
                        return (
                            <Link to={ `${user.id}` } key={ user.id }>
                                <li
                                    className={ className }
                                >
                                    { user.first_name } { user.last_name }
                                </li>
                            </Link>
                        );
                    })
                }
            </ul>
        </div>
    );
};
UserList.propTypes = {
    users: PropTypes.arrayOf(userPropType).isRequired
};