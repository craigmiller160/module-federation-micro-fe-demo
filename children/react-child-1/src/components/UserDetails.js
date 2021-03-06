import classes from './UserDetails.module.scss';
import { userPropType } from '../propTypes/userPropType';
import PropTypes from 'prop-types';
import { useSelectedUser } from './useSelectedUser';
import { useEffect, useState } from 'react';
const { subscribe, updateState } = await import('globalStore').catch((ex) => alert(ex.message));

export const UserDetails = (props) => {
    const [state, setState] = useState({
        notes: ''
    });
    const selectedUser = useSelectedUser(props.users);
    useEffect(() => {
        // TODO am I subscribing multiple times?
        return subscribe((state) => {
            const notes = state.userNotes?.[selectedUser?.id] ?? '';
            setState((prevState) => ({
                ...prevState,
                notes
            }));
        });
    }, [selectedUser]);

    const updateNotes = (text) => updateState((draft) => {
        const userNotes = draft.userNotes ?? {};
        userNotes[selectedUser.id] = text;
        draft.userNotes = userNotes;
    });

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
            {
                selectedUser &&
                <textarea
                    onChange={ (event) => updateNotes(event.target.value) }
                    value={ state.notes }
                />
            }
        </div>
    );
};
UserDetails.propTypes = {
    users: PropTypes.arrayOf(userPropType).isRequired
};
