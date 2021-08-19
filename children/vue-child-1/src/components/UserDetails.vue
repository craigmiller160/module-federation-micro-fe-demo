<template>
  <div class="UserDetails">
<!--    <img v-if="!!selectedUser" :src="selectedUser?.avatar" alt="avatar" />-->
<!--    <p>-->
<!--      <strong>Name: </strong>-->
<!--      {{ selectedUser?.first_name }} {{ selectedUser?.last_name }}-->
<!--    </p>-->
<!--    <p>-->
<!--      <strong>Email: </strong>-->
<!--      {{ selectedUser?.email }}-->
<!--    </p>-->
<!--    <span>-->
<!--      <strong>Notes:</strong>-->
<!--    </span>-->
<!--    <textarea v-if="!!selectedUser" />-->
  </div>
</template>

<script>
import { useSelectedUser } from './useSelectedUser';
import { onMounted, onUnmounted, ref } from 'vue';
const globalStorePromise = import('globalStore');

// TODO import() is great for resiliency, but figure out an alternative

export default {
  props: [
      'users'
  ],
  setup(props) {
    const selectedUser = useSelectedUser(props.users);
    const notes = ref('');

    let storeUnsubscribe;

    onMounted(() => {
      globalStorePromise.then(({ subscribe }) => {
        storeUnsubscribe = subscribe((state) => {
          notes.value = state.userNotes?.[selectedUser?.value?.id] ?? '';
        });
      });
    });

    onUnmounted(() => {
      if (storeUnsubscribe) {
        storeUnsubscribe();
      }
    });

    const updateNotes = (text) => globalStorePromise
        .then(({ updateState }) => updateState((draft) => {
          const userNotes = draft.userNotes ?? {};
          userNotes[selectedUser?.value?.id] = text;
          draft.userNotes = userNotes;
        }));

    return {
      selectedUser,
      updateNotes,
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