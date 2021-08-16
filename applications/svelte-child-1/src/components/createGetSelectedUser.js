import { useParams } from 'svelte-navigator';
import { onDestroy, onMount } from 'svelte';

export const createGetSelectedUser = () => {
    const params = useParams();
    let userId = 0;

    let paramsUnsubscribe;

    paramsUnsubscribe = params.subscribe((paramDetails) => {
        userId = paramDetails.userId ? parseInt(paramDetails.userId) : 0;
    });

    onDestroy(() => {
        if (paramsUnsubscribe) {
            paramsUnsubscribe();
        }
    });

    return (users) => {
        if (userId === 0) {
            return null;
        }
        return users.find((user) => user.id === userId);
    };
}