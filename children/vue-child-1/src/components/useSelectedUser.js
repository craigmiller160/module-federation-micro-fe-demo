import { useRoute } from 'vue-router';
import { computed } from 'vue';

export const useSelectedUser = (users) => {
    const route = useRoute();
    return computed(() => users.find((user) => user.id === parseInt(route.params.userId)));
}