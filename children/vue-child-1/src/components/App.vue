<template>
  <GlobalRouterConnector />
  <Content />
</template>

<script>
import Content from './Content';
import { GlobalRouterConnector } from '@mfdemo/global-router-vue-router/src';
export default {
  name: "App",
  components: { Content, GlobalRouterConnector }
}
</script>

<style scoped>

</style>
