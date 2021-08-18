<template>
  <div class="UserWrapper">
    <UserList />
    <UserDetails />
  </div>
</template>

<script>
import UserList from './UserList';
import UserDetails from './UserDetails';
export default {
  name: "UserWrapper",
  components: { UserDetails, UserList },
  props: [
      'users'
  ],
  setup(props) {

  }
}
</script>

<style scoped lang="scss">
  .UserWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>