<template>
  <div class="Content">
    <h1>Vue Child 1</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Content"
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

      h1 {
        text-align: center;
      }
    }
  }
</style>