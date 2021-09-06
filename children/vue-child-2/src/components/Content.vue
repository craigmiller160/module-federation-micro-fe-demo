<template>
  <div class="Content">
    <h1>Vue Child 2</h1>
    <router-view :users="users" />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';

export default {
  name: "Content",
  setup() {
    const users = ref([]);

    onMounted(() => {
      axios.get('https://reqres.in/api/users')
          .then((res) => users.value = res.data.data)
          .catch((ex) => console.error(ex));
    });

    return {
      users
    };
  }
}
</script>

<style scoped lang="scss">
  @import "src/styles/common";
  .Content {
    display: flex;
    flex-direction: column;
    background-color: $color-secondary;
    @include border-heavy;

    .title {
      display: flex;
      flex-direction: row;
      justify-content: center;

      :global(h1) {
        text-align: center;
      }
    }
  }
</style>
