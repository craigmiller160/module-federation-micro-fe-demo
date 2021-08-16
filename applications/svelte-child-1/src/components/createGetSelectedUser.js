import { useParams } from 'svelte-navigator';
import { onDestroy } from 'svelte';

export const createGetSelectedUser = () => {
    const params = useParams();
    let userId = 0;
    const paramsUnsubscribe = params.subscribe((paramDetails) => {
        userId = paramDetails.userId ? parseInt(paramDetails.userId) : 0;
    });

    onDestroy(() => {
        paramsUnsubscribe();
    });

    return (users) => {
        if (userId === 0) {
            return null;
        }
        return users.find((user) => user.id === userId);
    };
}