import classes from './UserList.module.scss';
import PropTypes from 'prop-types';
import { userPropType } from '../propTypes/userPropType';

export const UserList = (props) => {
    return (
        <div className={ classes.UserList }>
            <ul>
                {
                    props.users.map((user) => {
                        const className = user.id === props.selectedUser?.id ? classes.active : null;
                        return (
                            <li
                                className={ className }
                                key={ user.id }
                                onClick={ () => props.selectUser(user) }
                            >
                                { user.first_name } { user.last_name }
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};
UserList.propTypes = {
    users: PropTypes.arrayOf(userPropType).isRequired,
    selectUser: PropTypes.func.isRequired,
    selectedUser: userPropType
};