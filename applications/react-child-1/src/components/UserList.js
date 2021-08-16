import classes from './UserList.module.scss';
import PropTypes from 'prop-types';
import { userPropType } from '../propTypes/userPropType';
import { Link } from 'react-router-dom';

export const UserList = (props) => {
    return (
        <div className={ classes.UserList }>
            <ul>
                {
                    props.users.map((user) => {
                        const className = user.id === props.selectedUser?.id ? classes.active : null;
                        return (
                            <Link to={ user.id } >
                                <li
                                    className={ className }
                                    key={ user.id }
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