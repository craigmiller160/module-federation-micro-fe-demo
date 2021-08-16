import classes from './UserDetails.module.scss';
import { userPropType } from '../propTypes/userPropType';

export const UserDetails = (props) => {
    return (
        <div className={ classes.UserDetails }>
            {
                props.selectedUser &&
                <img src={ props.selectedUser?.avatar } alt="avatar" />
            }
            <p>
                <strong>Name: </strong>
                { props.selectedUser?.first_name } { props.selectedUser?.last_name }
            </p>
            <p>
                <strong>Email: </strong>
                { props.selectedUser?.email }
            </p>
        </div>
    );
};
UserDetails.propTypes = {
    selectedUser: userPropType
};