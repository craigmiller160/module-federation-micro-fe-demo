import { useRouteMatch } from 'react-router';
import { useMemo } from 'react';

export const useSelectedUser = (users) => {
    const match = useRouteMatch();
    return useMemo(() =>
            users.find((user) => user.id === parseInt(match.params.userId)),
        [match.params.userId, users]);
};