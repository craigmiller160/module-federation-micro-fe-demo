import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const UserList = () => {



    return (
        <h3>User List</h3>
    );
};
UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired
    })).isRequired,
    selectUser: PropTypes.func.isRequired
};