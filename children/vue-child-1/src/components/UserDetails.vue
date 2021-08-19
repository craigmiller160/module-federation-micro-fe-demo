<template>
  <div class="UserDetails">
    <img v-if="!!selectedUser" :src="selectedUser?.avatar" alt="avatar" />
    <p>
      <strong>Name: </strong>
      {{ selectedUser?.first_name }} {{ selectedUser?.last_name }}
    </p>
    <p>
      <strong>Email: </strong>
      {{ selectedUser?.email }}
    </p>
    <span>
      <strong>Notes:</strong>
    </span>
    <textarea v-if="!!selectedUser" v-model="notes" />
  </div>
</template>

<script>
import { useSelectedUser } from './useSelectedUser';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
const { subscribe, updateState, getState } = await import('globalStore');

export default {
  props: [
      'users'
  ],
  setup(props) {
    const selectedUser = useSelectedUser(
        computed(() => props.users)
    );
    const notesValue = ref('');
    watch(selectedUser, () => {
      notesValue.value = getState().userNotes?.[selectedUser?.value?.id] ?? '';
    });

    const storeUnsubscribe = subscribe((state) => {
      notesValue.value = state.userNotes?.[selectedUser?.value?.id] ?? '';
    });

    onUnmounted(() => {
      storeUnsubscribe();
    });

    const updateNotes = (text) => updateState((draft) => {
      const userNotes = draft.userNotes ?? {};
      userNotes[selectedUser?.value?.id] = text;
      draft.userNotes = userNotes;
    });

    const notes = computed({
      get: () => notesValue.value,
      set: (value) => updateNotes(value)
    });

    return {
      selectedUser,
      notes
    }
  }
}
</script>

<style scoped lang="scss">
  @import "src/styles/common";

  .UserDetails {
    margin: 1rem;
    padding: 2rem;
    font-size: $text-size-content;

    @include border-light;

    textarea {
      width: 100%;
      height: 10rem;
      resize: none;
    }
  }
</style>