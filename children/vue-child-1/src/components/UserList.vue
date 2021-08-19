<template>
  <div class="UserList">
    <ul>
      <router-link v-for="user in users" :to="`/${user.id}`">
        <li :class="getLiClassName(user)">
          {{ user.first_name }} {{ user.last_name }}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { useSelectedUser } from './useSelectedUser';
import { useRoute } from 'vue-router';
import { onUpdated, watch } from 'vue';

export default {
  props: [
      'users'
  ],
  setup(props) {
    const selectedUser = useSelectedUser(props.users);

    const getLiClassName = (user) => {
      if (selectedUser?.value?.id === user.id) {
        return 'active';
      }
      return '';
    }

    return {
      selectedUser,
      getLiClassName
    }
  }
}
</script>

<style scoped lang="scss">
  @import "src/styles/common";

  .UserList {
    margin: 1rem;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      a {
        text-decoration: none;
        color: inherit;
      }

      li {
        font-size: $text-size-content;
        padding: 1rem;
        cursor: pointer;

        @include border-light;

        &:hover {
          background-color: $color-primary;
          color: white;
        }

        &.active {
          background-color: $color-primary;
          color: white;
        }
      }
    }
  }
</style>