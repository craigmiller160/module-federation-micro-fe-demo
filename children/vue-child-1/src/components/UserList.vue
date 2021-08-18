<template>
  <div class="UserList">
    <ul>
      <router-link v-for="user in users" :to="`/${user.id}`">
        <li>
          {{ user.first_name }} {{ user.last_name }}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: [
      'users'
  ],
  setup(props) {

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