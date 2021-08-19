import { useRoute } from 'vue-router';
import { computed, watch } from 'vue';

export const useSelectedUser = (computedUsers) => {
    const route = useRoute();
    return computed(() => computedUsers.value.find((user) => user.id === parseInt(route.params.userId)));
}